import fs from "node:fs";
import path from "node:path";
import Stripe from "stripe";
import { createDownloadToken } from "./download-token";
import { getProduct, getProductFilePath } from "./products";

function getStripeClient() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("Missing STRIPE_SECRET_KEY environment variable.");
  }

  return new Stripe(secretKey);
}

export function getBookFilePath(productSlug = "the-quiet-exponential") {
  const product = getProduct(productSlug);
  const filePath = getProductFilePath(product);

  if (path.isAbsolute(filePath)) {
    return filePath;
  }

  return path.join(process.cwd(), filePath);
}

export function getBookFileName(productSlug = "the-quiet-exponential") {
  return path.basename(getBookFilePath(productSlug));
}

export async function getPaidCheckoutSession(sessionId) {
  if (!sessionId) {
    throw new Error("Missing session ID.");
  }

  const stripe = getStripeClient();
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (session.payment_status !== "paid") {
    throw new Error("Checkout session is not paid yet.");
  }

  if (session.status !== "complete") {
    throw new Error("Checkout session is not complete yet.");
  }

  return session;
}

export function createTimedDownloadUrl(sessionId) {
  return createTimedDownloadUrlForProduct(sessionId, "the-quiet-exponential");
}

export function createTimedDownloadUrlForProduct(
  sessionId,
  productSlug = "the-quiet-exponential",
) {
  const token = createDownloadToken({
    sessionId,
    productSlug,
    expiresAt: Date.now() + 1000 * 60 * 60 * 24 * 2,
  });

  return `/api/download?token=${encodeURIComponent(token)}`;
}

export function ensureBookExists(productSlug = "the-quiet-exponential") {
  const filePath = getBookFilePath(productSlug);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Book file not found at ${filePath}`);
  }

  return filePath;
}
