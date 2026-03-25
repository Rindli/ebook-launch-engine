import CheckoutButton from "./components/CheckoutButton";
import {
  bonusIdeas,
  chapters,
  faqs,
  metrics,
  price,
  proofPoints,
  quotes,
  stack,
} from "../lib/site-content";

export default function HomePage() {
  return (
    <main className="page-shell theme-futurist">
      <section className="hero hero-dario">
        <div className="hero-glow" />
        <div className="container">
          <nav className="nav">
            <div className="brand">The Quiet Exponential</div>
            <div>
              <a href="#chapters">Inside the book</a>
              <a href="#offer">Offer</a>
              <a href="#bonus">Bonus</a>
            </div>
          </nav>

          <div className="hero-grid">
            <div className="hero-copy hero-copy-dario">
              <div className="eyebrow">Scaling Laws to Biological Breakthroughs</div>
              <h1 className="title-stack">
                <span className="title-person">Dario Amodei</span>
                <span className="title-work">The Quiet Exponential</span>
              </h1>
              <p>
                A high-signal synthesis of Dario Amodei&apos;s 2024-2026 interviews,
                focused on the transition from model scaling to AI-enabled biology,
                scientific acceleration, safety, and the civilizational challenge of
                intelligence abundance.
              </p>
              <div className="signal-strip">
                <div className="signal-pill">Biology acceleration</div>
                <div className="signal-pill">AI safety</div>
                <div className="signal-pill">Datacenter intelligence</div>
              </div>
              <div className="hero-actions">
                <CheckoutButton className="button button-primary">
                  Buy the e-book for {price}
                </CheckoutButton>
                <a className="button button-secondary" href="#chapters">
                  Preview the thesis
                </a>
              </div>

              <div className="proof-row">
                {proofPoints.map((item) => (
                  <article className="proof-card" key={item.title}>
                    <strong>{item.title}</strong>
                    <p>{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="hero-book hero-book-dario">
              <div className="book-card panel book-card-dario">
                <div className="book-cover book-cover-dario">
                  <div className="book-orbit" />
                  <div className="book-gridline" />
                  <div>
                    <div className="eyebrow">Reflective e-book</div>
                    <div className="book-title title-stack">
                      <span className="title-person">Dario Amodei</span>
                      <span className="title-work">The Quiet Exponential</span>
                    </div>
                  </div>
                  <p className="book-note">
                    What Dario Amodei sees coming, what it means for work and
                    medicine, and why safety becomes more important as intelligence
                    becomes more abundant.
                  </p>
                  <div className="book-footer-chip">Frontier systems briefing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow">Why this sells</div>
              <h2>A sharper angle than generic AI commentary.</h2>
            </div>
            <p>
              The sales argument is specific: Amodei is not just predicting better
              models. He is arguing that AI could compress decades of biological and
              medical progress, while forcing institutions to grow up faster than they
              want to.
            </p>
          </div>

          <div className="metrics-grid metrics-grid-dario">
            {metrics.map((item) => (
              <article className="metrics-card metrics-card-dario" key={item.title}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="chapters">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow">Inside the book</div>
              <h2>The themes readers will quote back to each other.</h2>
            </div>
            <p>
              The structure moves from Amodei&apos;s forecasting method into the most
              commercially potent topics for launch content: scaling, biology,
              datacenter intelligence, labor disruption, governance, and character.
            </p>
          </div>

          <div className="chapter-grid chapter-grid-dario">
            {chapters.map((item) => (
              <article className="chapter-card chapter-card-dario" key={item.title}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow">Message market fit</div>
              <h2>Use clear tension, not hype.</h2>
            </div>
            <p>
              The best conversion path is not &quot;AI is big.&quot; It is the tension
              between extraordinary upside in biology and extraordinary demands on
              safety, governance, and human maturity.
            </p>
          </div>

          <div className="quotes-grid">
            {quotes.map((item) => (
              <article className="quote-card quote-card-dario" key={item.quote}>
                <span>{item.label}</span>
                <p>{item.quote}</p>
                <strong>{item.source}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="offer">
        <div className="container">
          <div className="offer-grid">
            <div className="stack-card stack-card-dario-main">
              <div className="eyebrow">The offer</div>
              <div className="price-tag">
                {price} <small>one-time</small>
              </div>
              <p>
                Position this as a premium niche briefing for people who would rather
                buy clarity than sift through dozens of interviews and essays.
              </p>
              <div className="hero-actions">
                <CheckoutButton className="button button-primary">
                  Start checkout
                </CheckoutButton>
              </div>
              <div className="bullet-list">
                <div>Direct response landing page with premium positioning</div>
                <div>Provider-switched checkout for Stripe or Lemon Squeezy</div>
                <div>Natural path into upsells, email capture, and bonus delivery</div>
              </div>
            </div>

            <div className="stack-list">
              {stack.map((item) => (
                <article className="stack-card stack-card-dario" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="bonus">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow">Bonus upsell</div>
              <h2>Turn a static e-book into an intelligence product.</h2>
            </div>
            <p>
              A RAG companion increases perceived value, improves conversion on a
              premium information product, and creates a credible second offer after
              checkout.
            </p>
          </div>

          <div className="bonus-grid">
            {bonusIdeas.map((item) => (
              <article className="bonus-card bonus-card-dario" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow">Objection handling</div>
              <h2>Answer the questions that stop premium buyers.</h2>
            </div>
            <p>
              Keep the page calm, adult, and precise. The audience for this product
              is skeptical by default, which means clarity converts better than
              urgency theater.
            </p>
          </div>

          <div className="faq-grid">
            {faqs.map((item) => (
              <article className="faq-card faq-card-dario" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="footer-cta panel footer-cta-dario">
            <div className="eyebrow">Direct-to-reader launch</div>
            <h2>Sell the thesis, then let checkout do its job.</h2>
            <p>
              This storefront is designed to make a premium niche e-book feel like a
              serious intellectual product, not a commodity PDF. Connect your payment
              provider, add delivery automation, and you are ready to launch.
            </p>
            <CheckoutButton className="button button-primary">
              Buy The Quiet Exponential
            </CheckoutButton>
            <div className="micro">
              Recommended setup: direct storefront first, marketplace expansion second.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
