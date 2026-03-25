import CheckoutButton from "../components/CheckoutButton";
import {
  ghazaliFaqs,
  ghazaliPrice,
  ghazaliProofPoints,
  ghazaliSections,
} from "../../lib/ghazali-content";

export const metadata = {
  title: "Imam al-Ghazali: Guide to Inner Reform",
  description:
    "A reflective synthesis on Imam al-Ghazali's thought, inward reform, intention, sincerity, doubt, and the diagnosis of the soul.",
};

export default function GuideToInnerReformPage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-glow" />
        <div className="container">
          <nav className="nav">
            <div className="brand">Guide to Inner Reform</div>
            <div>
              <a href="#inside">Inside the book</a>
              <a href="#offer">Offer</a>
              <a href="#faq">FAQ</a>
            </div>
          </nav>

          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Imam al-Ghazali for Modern Readers</div>
              <h1>A slow-reading guide to self-diagnosis, sincerity, and inward reform.</h1>
              <p>
                A reflective synthesis built around Imam al-Ghazali's enduring questions:
                what corrupts intention, what heals the heart, what doubt can teach,
                and how a life is rebuilt from the inside out.
              </p>
              <div className="hero-actions">
                <CheckoutButton
                  className="button button-primary"
                  product="guide-to-inner-reform"
                >
                  Buy the e-book for {ghazaliPrice}
                </CheckoutButton>
                <a className="button button-secondary" href="#inside">
                  Preview the themes
                </a>
              </div>

              <div className="proof-row">
                {ghazaliProofPoints.map((item) => (
                  <article className="proof-card" key={item.title}>
                    <strong>{item.title}</strong>
                    <p>{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="hero-book">
              <div className="book-card panel">
                <div className="book-cover">
                  <div>
                    <div className="eyebrow">Reflective e-book</div>
                    <div className="book-title">Guide to Inner Reform</div>
                  </div>
                  <p className="book-note">
                    For readers who feel intellectually crowded but inwardly unclear,
                    and want a serious companion for self-examination.
                  </p>
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
              <h2>Sell this as moral clarity, not just historical interest.</h2>
            </div>
            <p>
              The strongest commercial angle is that al-Ghazali speaks directly to a
              modern condition: too much information, too little inward clarity, and a
              dangerous gap between performance and sincerity.
            </p>
          </div>

          <div className="chapter-grid">
            {ghazaliSections.map((item) => (
              <article className="chapter-card" key={item.title}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="offer">
        <div className="container">
          <div className="offer-grid">
            <div className="stack-card">
              <div className="eyebrow">The offer</div>
              <div className="price-tag">
                {ghazaliPrice} <small>one-time</small>
              </div>
              <p>
                Position this as a premium reflective guide for readers who want to
                examine motive, ego, pride, sincerity, and spiritual fatigue with more
                seriousness than generic self-help allows.
              </p>
              <div className="hero-actions">
                <CheckoutButton
                  className="button button-primary"
                  product="guide-to-inner-reform"
                >
                  Start checkout
                </CheckoutButton>
              </div>
            </div>

            <div className="stack-list">
              <article className="stack-card">
                <h3>What the reader gets</h3>
                <p>
                  A structured, literary synthesis of al-Ghazali's inward concerns
                  shaped for slow reading and practical reflection.
                </p>
              </article>
              <article className="stack-card">
                <h3>Best-fit reader</h3>
                <p>
                  Someone drawn to Islamic spirituality, classical wisdom, and inward
                  reform, but who still wants readable prose and modern relevance.
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
              <h2>Keep the positioning serious and honest.</h2>
            </div>
            <p>
              Readers will respond best when this book feels like a trustworthy guide
              to inner reform rather than a flashy spiritual product.
            </p>
          </div>

          <div className="faq-grid">
            {ghazaliFaqs.map((item) => (
              <article className="faq-card" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
