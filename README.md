# The Quiet Exponential launch engine

This repo contains a premium direct-to-consumer storefront for the e-book plus launch collateral:

- a Next.js multi-product landing page system with provider-switched checkout
- a Stripe or Lemon Squeezy checkout route
- short-form traffic scripts
- a safety-first email funnel
- a market intelligence memo
- a Digital Twin / Amodei-Bot upsell concept
- timed PDF fulfillment after successful Stripe checkout
- MailerLite buyer sync after successful Stripe checkout
- four independent e-book product flows

## Run locally

1. Copy `.env.example` to `.env`.
2. Set `CHECKOUT_PROVIDER` to `stripe` or `lemonsqueezy`.
3. Add the matching payment credentials.
4. Set `DOWNLOAD_TOKEN_SECRET` and confirm the bundled PDF paths.
5. Run `npm.cmd run dev`.

## Checkout env vars

### Stripe

- `STRIPE_SECRET_KEY`
- `STRIPE_PRICE_ID`
- `DOWNLOAD_TOKEN_SECRET`
- `BOOK_FILE_PATH`
- `BARAKAH_BOOK_FILE_PATH`
- `MAILERLITE_API_KEY`
- `MAILERLITE_BUYERS_GROUP_ID`
- `MAILERLITE_SENDER_NAME`
- `MAILERLITE_SENDER_EMAIL`

### Lemon Squeezy

- `LEMONSQUEEZY_API_KEY`
- `LEMONSQUEEZY_STORE_ID`
- `LEMONSQUEEZY_VARIANT_ID`

## Notes

- The landing page is intentionally calm, premium, and minimalist rather than aggressively "launchy."
- The success page now unlocks a timed PDF download after a paid Stripe session.
- The commercial recommendation is to launch direct first and use Amazon later as a discovery channel.
- The PDFs are bundled in [`public/books`](C:\Users\OEM\Desktop\Dario%20Amodei\public\books) so Vercel can serve downloads even when your laptop is off.
