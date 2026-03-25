import {
  createTimedDownloadUrlForProduct,
  getBookFileName,
  getPaidCheckoutSession,
} from "../../lib/fulfillment";
import { isMailerLiteConfigured, upsertBuyerSubscriber } from "../../lib/mailerlite";
import { getProduct, getProductMailerLiteGroupId } from "../../lib/products";

export const dynamic = "force-dynamic";

export default async function SuccessPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const sessionId = resolvedSearchParams?.session_id;
  let downloadUrl = null;
  let customerEmail = null;
  let errorMessage = null;
  let mailerLiteStatus = null;
  let product = getProduct("the-quiet-exponential");

  if (sessionId) {
    try {
      const session = await getPaidCheckoutSession(sessionId);
      product = getProduct(session.metadata?.productSlug || "the-quiet-exponential");
      downloadUrl = createTimedDownloadUrlForProduct(session.id, product.slug);
      customerEmail = session.customer_details?.email || null;

      const groupId = getProductMailerLiteGroupId(product);

      if (customerEmail && isMailerLiteConfigured(groupId)) {
        await upsertBuyerSubscriber({
          email: customerEmail,
          stripeSessionId: session.id,
          bookTitle: product.title,
          groupId,
        });
        mailerLiteStatus = "Buyer synced to MailerLite.";
      }
    } catch (error) {
      errorMessage = error.message;
    }
  }

  return (
    <main className="page-shell">
      <section className="section">
        <div className="container">
          <div className="footer-cta panel">
            <div className="eyebrow">Purchase complete</div>
            <h2>You now have the premium e-book engine in place.</h2>
            <p>
              Your checkout has a delivery flow now. After a successful Stripe
              payment, this page verifies the session and unlocks a timed PDF
              download link for the buyer.
            </p>
            {downloadUrl ? (
              <>
                <a className="button button-primary" href={downloadUrl}>
                  Download {getBookFileName(product.slug)}
                </a>
                <p className="micro">
                  {customerEmail
                    ? `Verified for ${customerEmail}.`
                    : "Verified checkout session."}{" "}
                  The download link stays active for 48 hours.
                </p>
                {mailerLiteStatus ? <p className="micro">{mailerLiteStatus}</p> : null}
              </>
            ) : (
              <>
                <a className="button button-secondary" href="/">
                  Return to the storefront
                </a>
                <p className="micro">
                  {errorMessage ||
                    "This page needs a successful Stripe session to unlock the PDF."}
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
