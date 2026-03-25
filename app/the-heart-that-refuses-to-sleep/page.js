import CheckoutButton from "../components/CheckoutButton";
import {
  omarFaqs,
  omarPrice,
  omarProofPoints,
  omarSections,
} from "../../lib/omar-content";

export const metadata = {
  title: "The Heart That Refuses to Sleep",
  description:
    "A reflective synthesis of Omar Suleiman's themes on faith, character, hardship, justice, public witness, and hope.",
};

export default function TheHeartThatRefusesToSleepPage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-glow" />
        <div className="container">
          <nav className="nav">
            <div className="brand">The Heart That Refuses to Sleep</div>
            <div>
              <a href="#inside">Inside the book</a>
              <a href="#offer">Offer</a>
              <a href="#faq">FAQ</a>
            </div>
          </nav>

          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Faith, Character, Justice, Hope</div>
              <h1>A reflective editorial guide to living with more clarity, courage, and mercy.</h1>
              <p>
                A polished synthesis built from Omar Suleiman's public conversations,
                organized around identity, hardship, discipline, love, justice, public
                witness, and the kind of hope that can survive a dark age.
              </p>
              <div className="hero-actions">
                <CheckoutButton
                  className="button button-primary"
                  product="the-heart-that-refuses-to-sleep"
                >
                  Buy the e-book for {omarPrice}
                </CheckoutButton>
                <a className="button button-secondary" href="#inside">
                  Preview the journey
                </a>
              </div>

              <div className="proof-row">
                {omarProofPoints.map((item) => (
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
                    <div className="book-title">The Heart That Refuses to Sleep</div>
                  </div>
                  <p className="book-note">
                    For readers who want a faith that is inwardly serious, publicly
                    awake, and still capable of hope.
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
              <h2>This one sells through emotional and moral resonance.</h2>
            </div>
            <p>
              The strongest angle here is integration: private faith and public life
              belong together. The reader is not buying mere inspiration, but a calmer
              map for hardship, character, justice, and hope.
            </p>
          </div>

          <div className="chapter-grid">
            {omarSections.map((item) => (
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
                {omarPrice} <small>one-time</small>
              </div>
              <p>
                Position this as a premium reading experience for people who need moral
                seriousness, public courage, and spiritual depth without hollow noise.
              </p>
              <div className="hero-actions">
                <CheckoutButton
                  className="button button-primary"
                  product="the-heart-that-refuses-to-sleep"
                >
                  Start checkout
                </CheckoutButton>
              </div>
            </div>

            <div className="stack-list">
              <article className="stack-card">
                <h3>What the reader gets</h3>
                <p>
                  A quiet editorial synthesis on faith, discipline, love, pain,
                  justice, hope, and public moral witness.
                </p>
              </article>
              <article className="stack-card">
                <h3>Best-fit reader</h3>
                <p>
                  Someone who resonates with Omar Suleiman's tone and wants one
                  coherent reflective book rather than scattered clips and interviews.
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
              <h2>Use a humane and hopeful sales tone.</h2>
            </div>
            <p>
              This product should feel emotionally intelligent and spiritually grounded,
              not loud or aggressively promotional.
            </p>
          </div>

          <div className="faq-grid">
            {omarFaqs.map((item) => (
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
