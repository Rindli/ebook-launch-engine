import fs from "node:fs";
import { NextResponse } from "next/server";
import { ensureBookExists, getBookFileName } from "../../../lib/fulfillment";
import { verifyDownloadToken } from "../../../lib/download-token";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.json({ error: "Missing token." }, { status: 400 });
    }

    const payload = verifyDownloadToken(token);
    const filePath = ensureBookExists(payload.productSlug);
    const file = fs.readFileSync(filePath);

    return new NextResponse(file, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${getBookFileName(payload.productSlug)}"`,
        "X-Checkout-Session": payload.sessionId,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Unable to download file." },
      { status: 400 },
    );
  }
}
