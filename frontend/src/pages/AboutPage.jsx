import ScrollReveal from "../components/ScrollReveal";

const features = [
  {
    title: "Specialty Beans",
    description: "Sourced from top roasters around the world. Every cup is a premium experience, roasted to perfection.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 4h14v12a2 2 0 01-2 2H7a2 2 0 01-2-2V4z" />
        <path d="M6 4V2M18 4V2M12 4V2" />
      </svg>
    ),
  },
  {
    title: "Laptop-Friendly Space",
    description: "Power outlets at every seat. Fast, reliable Wi-Fi. A quiet space built for deep work.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="12" rx="1" />
        <path d="M2 20h20" />
      </svg>
    ),
  },
  {
    title: "Fast Checkout",
    description: "Order ahead online. Skip the line and pick up in minutes. Or stay and savor.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l2.5 8h13L21 9H3z" />
        <path d="M9 9V6a3 3 0 016 0v3" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <ScrollReveal>
      <section className="about-hero section-with-bg" aria-labelledby="about-title">
        <div className="section-beans-left" aria-hidden="true" />
        <div className="section-beans-right" aria-hidden="true" />
        <div className="section-content">
          <h1 id="about-title" className="about-hero-title">Why Byte Beans</h1>
          <p className="about-hero-subtitle">Built for people who love coffee and code.</p>
        </div>
      </section>
      </ScrollReveal>

      <section className="about-main" aria-labelledby="about-story-title">
        <div className="section-beans-left" aria-hidden="true" />
        <div className="section-beans-right" aria-hidden="true" />
        <div className="section-content">
          <div className="about-features-wrap">
            <div className="features-grid">
              {features.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 80}>
                <article className="feature-card">
                  {feature.icon}
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
          <ScrollReveal delay={100}>
          <div className="about-story">
            <h2 id="about-story-title">Our Story</h2>
            <p>
              Byte Beans started with a simple idea: what if a coffee shop could be the
              perfect workspace? We combined specialty coffee with a developer-friendly
              environment—fast Wi-Fi, plenty of outlets, and a calm atmosphere for focused work.
              Today, we serve thousands of coders, creators, and coffee lovers every week.
            </p>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
