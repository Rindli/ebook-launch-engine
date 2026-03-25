export const products = {
  "the-quiet-exponential": {
    slug: "the-quiet-exponential",
    title: "The Quiet Exponential",
    shortTitle: "Quiet Exponential",
    priceLabel: "$47",
    checkoutPriceEnv: "STRIPE_PRICE_ID",
    filePathEnv: "BOOK_FILE_PATH",
    defaultFilePath:
      "public/books/dario_amodei_the_quiet_exponential.pdf",
    mailerLiteGroupEnv: "MAILERLITE_BUYERS_GROUP_ID",
    pagePath: "/",
  },
  "wealth-with-barakah": {
    slug: "wealth-with-barakah",
    title: "Wealth with Barakah",
    shortTitle: "Wealth with Barakah",
    priceLabel: "$15",
    checkoutPriceEnv: "STRIPE_BARAKAH_PRICE_ID",
    filePathEnv: "BARAKAH_BOOK_FILE_PATH",
    defaultFilePath:
      "public/books/wealth_with_barakah_summary.pdf",
    mailerLiteGroupEnv: "MAILERLITE_BARAKAH_GROUP_ID",
    pagePath: "/wealth-with-barakah",
  },
};

export function getProduct(slug) {
  const product = products[slug];

  if (!product) {
    throw new Error(`Unsupported product: ${slug}`);
  }

  return product;
}

export function getProductFilePath(product) {
  return process.env[product.filePathEnv] || product.defaultFilePath;
}

export function getProductPriceId(product) {
  return process.env[product.checkoutPriceEnv];
}

export function getProductMailerLiteGroupId(product) {
  return process.env[product.mailerLiteGroupEnv];
}
