import Stripe from "stripe";
import {
  createCheckout,
  lemonSqueezySetup,
} from "@lemonsqueezy/lemonsqueezy.js";
import { getProduct, getProductPriceId } from "./products";

function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

export async function createCheckoutUrl(
  productSlug = "the-quiet-exponential",
  origin,
) {
  const provider = (process.env.CHECKOUT_PROVIDER || "stripe").toLowerCase();
  const product = getProduct(productSlug);
  const siteUrl = origin || getSiteUrl();

  if (provider === "stripe") {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    const priceId = getProductPriceId(product);

    if (!secretKey || !priceId) {
      throw new Error(`Missing Stripe environment variables for ${product.title}.`);
    }

    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}${product.pagePath === "/" ? "/#offer" : `${product.pagePath}#offer`}`,
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      metadata: {
        productSlug: product.slug,
      },
      custom_text: {
        submit: {
          message:
            "You will receive the premium PDF plus any launch bonuses configured in your fulfillment flow.",
        },
      },
    });

    return session.url;
  }

  if (provider === "lemonsqueezy") {
    const apiKey = process.env.LEMONSQUEEZY_API_KEY;
    const storeId = process.env.LEMONSQUEEZY_STORE_ID;
    const variantId = process.env.LEMONSQUEEZY_VARIANT_ID;

    if (!apiKey || !storeId || !variantId) {
      throw new Error("Missing Lemon Squeezy environment variables.");
    }

    lemonSqueezySetup({ apiKey });

    const { data, error } = await createCheckout(storeId, variantId, {
      productOptions: {
        redirectUrl: `${getSiteUrl()}/success`,
        receiptButtonText: "Access your launch bonus",
        receiptLinkUrl: `${siteUrl}/success`,
        receiptThankYouNote:
          "Thanks for supporting this project. Check the success page for delivery and bonus setup instructions.",
      },
      checkoutOptions: {
        embed: false,
        media: false,
        logo: false,
      },
      checkoutData: {
        custom: {
          source: "quiet-exponential-landing-page",
          productSlug: product.slug,
        },
      },
    });

    if (error) {
      throw new Error(error.message || "Unable to create Lemon Squeezy checkout.");
    }

    return data?.data?.attributes?.url;
  }

  throw new Error(`Unsupported checkout provider: ${provider}`);
}
