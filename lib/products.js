export const products = {
  "the-quiet-exponential": {
    slug: "the-quiet-exponential",
    title: "The Quiet Exponential",
    shortTitle: "Quiet Exponential",
    priceLabel: "€15",
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
    priceLabel: "€15",
    checkoutPriceEnv: "STRIPE_BARAKAH_PRICE_ID",
    filePathEnv: "BARAKAH_BOOK_FILE_PATH",
    defaultFilePath:
      "public/books/wealth_with_barakah_summary.pdf",
    mailerLiteGroupEnv: "MAILERLITE_BARAKAH_GROUP_ID",
    pagePath: "/wealth-with-barakah",
  },
  "guide-to-inner-reform": {
    slug: "guide-to-inner-reform",
    title: "Imam al-Ghazali: Guide to Inner Reform",
    shortTitle: "Guide to Inner Reform",
    priceLabel: "€15",
    checkoutPriceEnv: "STRIPE_GHAZALI_PRICE_ID",
    filePathEnv: "GHAZALI_BOOK_FILE_PATH",
    defaultFilePath:
      "public/books/imam_al_ghazali_guide_to_inner_reform_title_only_fix.pdf",
    mailerLiteGroupEnv: "MAILERLITE_GHAZALI_GROUP_ID",
    pagePath: "/guide-to-inner-reform",
  },
  "the-heart-that-refuses-to-sleep": {
    slug: "the-heart-that-refuses-to-sleep",
    title: "The Heart That Refuses to Sleep",
    shortTitle: "The Heart That Refuses to Sleep",
    priceLabel: "€15",
    checkoutPriceEnv: "STRIPE_OMAR_PRICE_ID",
    filePathEnv: "OMAR_BOOK_FILE_PATH",
    defaultFilePath:
      "public/books/the_heart_that_refuses_to_sleep_ebook_fixed.pdf",
    mailerLiteGroupEnv: "MAILERLITE_OMAR_GROUP_ID",
    pagePath: "/the-heart-that-refuses-to-sleep",
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
