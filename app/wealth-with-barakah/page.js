import CheckoutButton from "../components/CheckoutButton";
import {
  barakahFaqs,
  barakahPrice,
  barakahProofPoints,
  barakahQuotes,
  barakahSections,
} from "../../lib/barakah-content";

export const metadata = {
  title: "Wealth with Barakah",
  description:
    "A chaptered synthesis of Islamic lessons on halal wealth, rizq, tawakkul, gratitude, family responsibility, and stewardship.",
};

export default function WealthWithBarakahPage() {
  return (
    <main className="page-shell theme-islamic-amber">
      <section className="hero hero-barakah">
        <div className="hero-glow" />
        <div className="container">
          <nav className="nav">
            <div className="brand">Wealth with Barakah</div>
            <div>
              <a href="#inside">Inside the book</a>
              <a href="#offer">Offer</a>
              <a href="#faq">FAQ</a>
            </div>
          </nav>

          <div className="hero-grid">
            <div className="hero-copy hero-copy-barakah">
              <div className="eyebrow">Halal Wealth, Rizq, and Stewardship</div>
              <h1 className="title-stack">
                <span className="title-work">Wealth with Barakah</span>
                <span className="title-subline">Achieve prosperity the Islamic way</span>
              </h1>
              <p>
                A chaptered synthesis of 13 talks on halal earning, self-reliance,
                tawakkul, gratitude, generosity, family responsibility, and using
                wealth as an amanah rather than an identity.
              </p>
              <div className="signal-strip">
                <div className="signal-pill signal-pill-warm">Halal earning</div>
                <div className="signal-pill signal-pill-warm">Tawakkul</div>
                <div className="signal-pill signal-pill-warm">Barakah</div>
                <div className="signal-pill signal-pill-warm">Family duty</div>
              </div>
              <div className="hero-actions">
                <CheckoutButton
                  className="button button-primary"
                  product="wealth-with-barakah"
                >
                  Buy the e-book for {barakahPrice}
                </CheckoutButton>
                <a className="button button-secondary" href="#inside">
                  Preview the lessons
                </a>
              </div>

              <div className="proof-row">
                {barakahProofPoints.map((item) => (
                  <article className="proof-card" key={item.title}>
                    <strong>{item.title}</strong>
                    <p>{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="hero-book hero-book-barakah">
              <div className="book-card panel book-card-barakah">
                <div className="book-cover book-cover-barakah">
                  <div className="barakah-lantern barakah-lantern-left" />
                  <div className="barakah-lantern barakah-lantern-right" />
                  <div className="barakah-stage" />
                  <div>
                    <div className="eyebrow">Reflective e-book</div>
                    <div className="book-title title-stack">
                      <span className="title-work">Wealth with Barakah</span>
                      <span className="title-subline">Achieve prosperity the Islamic way</span>
                    </div>
                  </div>
                  <p className="book-note">
                    For readers who want to grow financially without separating money
                    from faith, discipline, gratitude, and service.
                  </p>
                  <div className="book-footer-chip">Download the reflective guide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="inside">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow">Inside the book</div>
              <h2>The ideas that make this more useful than generic money advice.</h2>
            </div>
            <p>
              The thesis is simple: Islam does not glorify greed, but it also does not
              glorify weakness. Lawful wealth can be a tool for dignity, household
              stability, generosity, and service when the source and use remain clean.
            </p>
          </div>

          <div className="chapter-grid chapter-grid-barakah">
            {barakahSections.map((item) => (
              <article className="chapter-card chapter-card-barakah" key={item.title}>
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
              <div className="eyebrow">Positioning</div>
              <h2>Sell clarity, not hustle culture.</h2>
            </div>
            <p>
              This product should feel spiritually serious and practically useful. The
              strongest angle is not luxury or flexing. It is disciplined provision,
              ethical earning, and a healthier relationship with money.
            </p>
          </div>

          <div className="quotes-grid">
            {barakahQuotes.map((item) => (
              <article className="quote-card quote-card-barakah" key={item.quote}>
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
            <div className="stack-card stack-card-barakah-main">
              <div className="eyebrow">The offer</div>
              <div className="price-tag">
                {barakahPrice} <small>one-time</small>
              </div>
              <p>
                Position this as a compact Islamic wealth framework for readers who
                want both practical discipline and spiritual coherence.
              </p>
              <div className="hero-actions">
                <CheckoutButton
                  className="button button-primary"
                  product="wealth-with-barakah"
                >
                  Start checkout
                </CheckoutButton>
              </div>
              <div className="bullet-list">
                <div>Clean direct checkout and instant PDF access</div>
                <div>Respectful positioning that avoids overclaiming</div>
                <div>Launch structure ready for organic soft rollout</div>
              </div>
            </div>

            <div className="stack-list">
              <article className="stack-card stack-card-barakah">
                <h3>What the reader gets</h3>
                <p>
                  A concise synthesis of Islamic lessons on wealth, rizq, work, and
                  responsibility, arranged into practical takeaways and reflection
                  prompts.
                </p>
              </article>
              <article className="stack-card stack-card-barakah">
                <h3>Best fit buyer</h3>
                <p>
                  A Muslim reader who wants to improve income, discipline, and
                  financial responsibility without adopting a spiritually empty money
                  mindset.
                </p>
              </article>
              <article className="stack-card stack-card-barakah">
                <h3>Important note</h3>
                <p>
                  The e-book is a reflective synthesis, not a fatwa and not a
                  substitute for formal study of fiqh or tafsir.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow">FAQ</div>
              <h2>Handle objections with sincerity and precision.</h2>
            </div>
            <p>
              The audience for this e-book will respond better to clarity, humility,
              and usefulness than to aggressive sales energy.
            </p>
          </div>

          <div className="faq-grid">
            {barakahFaqs.map((item) => (
              <article className="faq-card faq-card-barakah" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="footer-cta panel footer-cta-barakah">
            <div className="eyebrow">Direct-to-reader launch</div>
            <h2>Lawful provision, cleaner thinking, steadier action.</h2>
            <p>
              Use this page to sell a spiritually serious financial guide, not a flashy
              internet-money product. The right readers will value that difference.
            </p>
            <CheckoutButton
              className="button button-primary"
              product="wealth-with-barakah"
            >
              Buy Wealth with Barakah
            </CheckoutButton>
          </div>
        </div>
      </section>
    </main>
  );
}
