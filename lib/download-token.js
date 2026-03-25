import crypto from "node:crypto";

function getSecret() {
  const secret = process.env.DOWNLOAD_TOKEN_SECRET;

  if (!secret) {
    throw new Error("Missing DOWNLOAD_TOKEN_SECRET environment variable.");
  }

  return secret;
}

function encodeBase64Url(value) {
  return Buffer.from(value).toString("base64url");
}

function decodeBase64Url(value) {
  return Buffer.from(value, "base64url").toString("utf8");
}

export function createDownloadToken(payload) {
  const data = encodeBase64Url(JSON.stringify(payload));
  const signature = crypto
    .createHmac("sha256", getSecret())
    .update(data)
    .digest("base64url");

  return `${data}.${signature}`;
}

export function verifyDownloadToken(token) {
  const [data, signature] = token.split(".");

  if (!data || !signature) {
    throw new Error("Malformed download token.");
  }

  const expected = crypto
    .createHmac("sha256", getSecret())
    .update(data)
    .digest("base64url");

  if (signature !== expected) {
    throw new Error("Invalid download token.");
  }

  const payload = JSON.parse(decodeBase64Url(data));

  if (!payload.expiresAt || Date.now() > payload.expiresAt) {
    throw new Error("Download token expired.");
  }

  return payload;
}
