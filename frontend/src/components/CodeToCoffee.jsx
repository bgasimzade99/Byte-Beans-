import { useState, useEffect, useRef } from "react";
import PourAnimation from "./PourAnimation";

const CODE_LINES = [
  { text: "export default function Developer() {", type: "keyword" },
  { text: "  const coffee = \"developer's energy\";", type: "var" },
  { text: "  const productivity = \"10x\";", type: "var" },
  { text: "  return (", type: "keyword" },
  { text: "    <div className=\"life\">", type: "jsx" },
  { text: "      <DrinkCoffee />", type: "jsx" },
  { text: "      <WriteCode />", type: "jsx" },
  { text: "      <BeProductive level={productivity} />", type: "jsx" },
  { text: "    </div>", type: "jsx" },
  { text: "  );", type: "keyword" },
  { text: "}", type: "keyword" },
];

// 22-35ms base + ±8ms jitter for realistic typewriter feel
const getTypingDelay = () => {
  const base = 22 + Math.random() * 13;
  const jitter = (Math.random() - 0.5) * 16;
  return Math.max(14, Math.round(base + jitter));
};

const LOOP_TYPING = false; // true = restart when done; false = stop

export default function CodeToCoffee({ onComplete }) {
  const [phase, setPhase] = useState("typing");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const timerRef = useRef(null);

  // Single typing effect: one char at a time, one timer only
  useEffect(() => {
    if (phase !== "typing") return;

    const lineCount = CODE_LINES.length;
    const isComplete = lineIndex >= lineCount;

    if (isComplete) {
      timerRef.current = setTimeout(() => {
        if (LOOP_TYPING) {
          setLineIndex(0);
          setCharIndex(0);
        } else {
          setPhase("transition");
        }
      }, 900);
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }

    const line = CODE_LINES[lineIndex];
    const lineText = line.text;
    const isLineComplete = charIndex >= lineText.length;

    if (isLineComplete) {
      // Move to next line - minimal delay for "newline" feel
      timerRef.current = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, 0);
    } else {
      // Type exactly one character
      const delay = getTypingDelay();
      timerRef.current = setTimeout(() => {
        setCharIndex((i) => i + 1);
      }, delay);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [phase, lineIndex, charIndex]);

  // Phase transition to pour
  useEffect(() => {
    if (phase === "transition") {
      const t = setTimeout(() => setPhase("pour"), 800);
      return () => clearTimeout(t);
    }
  }, [phase]);

  // Call onComplete when pour + steam done (~4.5s)
  useEffect(() => {
    if (phase === "pour" && onComplete) {
      const t = setTimeout(onComplete, 4500);
      return () => clearTimeout(t);
    }
  }, [phase, onComplete]);

  return (
    <section className="code-to-coffee" aria-label="Developer fuel">
      <div className={`code-to-coffee-inner ${phase}`}>
        {/* Phase 1: Code editor */}
        <div className="code-editor-wrap">
          <div className="code-editor-header">
            <span className="code-dot" />
            <span className="code-dot" />
            <span className="code-dot" />
            <span className="code-filename">Developer.jsx</span>
          </div>
          <div className="code-editor-body">
            {/* Completed lines - static, never change */}
            {CODE_LINES.slice(0, lineIndex).map((line, i) => (
              <div key={i} className="code-line">
                <span className="code-line-num">{i + 1}</span>
                <span className={`code-token code-${line.type}`}>{line.text}</span>
              </div>
            ))}
            {/* Current line - substring(0, charIndex) + caret */}
            {lineIndex < CODE_LINES.length && (
              <div key={lineIndex} className="code-line">
                <span className="code-line-num">{lineIndex + 1}</span>
                <span className={`code-token code-${CODE_LINES[lineIndex].type}`}>
                  {CODE_LINES[lineIndex].text.slice(0, charIndex)}
                  <span className="code-cursor" aria-hidden="true" />
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Phase 2: Coffee pour - realistic SVG animation */}
        <div className="coffee-pour-wrap">
          <PourAnimation />
        </div>
      </div>
    </section>
  );
}
