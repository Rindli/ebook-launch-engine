# Vercel deploy

## What this gives you

When deployed to Vercel, the storefront stays online even when your laptop is off.

## Before deploy

- Stripe test or live keys ready
- bundled PDFs already present in `public/books`
- `DOWNLOAD_TOKEN_SECRET` ready

## Vercel steps

1. Push this project to GitHub.
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import the GitHub repository.
4. Keep the default Next.js framework detection.
5. In `Environment Variables`, add:
   - `CHECKOUT_PROVIDER`
   - `NEXT_PUBLIC_SITE_URL`
   - `DOWNLOAD_TOKEN_SECRET`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_PRICE_ID`
   - `STRIPE_BARAKAH_PRICE_ID`
   - `MAILERLITE_API_KEY`
   - `MAILERLITE_BUYERS_GROUP_ID`
   - `MAILERLITE_BARAKAH_GROUP_ID`
   - `MAILERLITE_SENDER_NAME`
   - `MAILERLITE_SENDER_EMAIL`
   - `BOOK_FILE_PATH`
   - `BARAKAH_BOOK_FILE_PATH`
6. Set:
   - `NEXT_PUBLIC_SITE_URL` to your Vercel URL or custom domain
   - `BOOK_FILE_PATH=public/books/dario_amodei_the_quiet_exponential.pdf`
   - `BARAKAH_BOOK_FILE_PATH=public/books/wealth_with_barakah_summary.pdf`
7. Click `Deploy`.

## After deploy

- open the live URL
- test both landing pages
- test both checkout buttons
- complete one Stripe test purchase
- confirm success page download works

## Important note

For real payments, switch Stripe from test keys to live keys inside Vercel env vars before launching publicly.
