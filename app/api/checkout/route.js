import { NextResponse } from "next/server";
import { createCheckoutUrl } from "../../../lib/checkout";

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const origin = request.headers.get("origin") || request.nextUrl.origin;
    const url = await createCheckoutUrl(body.product, origin);

    if (!url) {
      throw new Error("Checkout URL was not returned by the payment provider.");
    }

    return NextResponse.json({ url });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Unable to start checkout." },
      { status: 500 },
    );
  }
}
