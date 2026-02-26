import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LOTTIE_COFFEE_POUR =
  "https://lottie.host/592a8059-5827-41c4-bcb8-9cf12764647a/91BEQR7Nuo.lottie";

export default function PourAnimation() {
  return (
    <div className="pour-animation" aria-hidden="true">
      <div className="pour-lottie-wrap">
        <DotLottieReact
          src={LOTTIE_COFFEE_POUR}
          loop
          autoplay
          className="pour-lottie"
        />
      </div>
      <p className="coffee-pour-tagline">Coffee is the developer&apos;s energy.</p>
    </div>
  );
}
