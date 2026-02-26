import ScrollReveal from "../components/ScrollReveal";

const reviews = [
  {
    stars: 5,
    quote: "Best coffee in town. Fast Wi-Fi and great vibes for getting work done.",
    author: "Sarah K.",
  },
  {
    stars: 5,
    quote: "The Caramel Latte changed my life. And the code I write here actually runs.",
    author: "Alex M.",
  },
  {
    stars: 5,
    quote: "Finally a coffee shop that gets developers. Power outlets everywhere.",
    author: "Jordan L.",
  },
  {
    stars: 5,
    quote: "The Flat White is perfection. I come here every morning before standup.",
    author: "Taylor R.",
  },
  {
    stars: 5,
    quote: "Cozy, quiet, and the cold brew never disappoints. My go-to spot.",
    author: "Morgan P.",
  },
];

export default function ReviewsPage() {
  return (
    <div className="reviews-page">
      <ScrollReveal>
      <section className="reviews-hero" aria-labelledby="reviews-title">
        <div className="section-beans-left" aria-hidden="true" />
        <div className="section-beans-right" aria-hidden="true" />
        <div className="section-content">
          <h1 id="reviews-title" className="reviews-hero-title">What People Say</h1>
          <p className="reviews-hero-subtitle">Trusted by developers and coffee lovers alike.</p>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal delay={80}>
      <section className="reviews-main" aria-label="Customer reviews">
        <div className="section-beans-left" aria-hidden="true" />
        <div className="section-beans-right" aria-hidden="true" />
        <div className="section-content">
          <div className="reviews-grid">
            {reviews.map((review, i) => (
              <article key={i} className="review-card">
                <div className="review-stars" aria-hidden="true">
                  {"★".repeat(review.stars)}
                </div>
                <blockquote>{review.quote}</blockquote>
                <cite>— {review.author}</cite>
              </article>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
