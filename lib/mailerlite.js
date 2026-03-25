function getMailerLiteApiKey() {
  return process.env.MAILERLITE_API_KEY;
}

function getBuyerGroupId(groupId) {
  return groupId;
}

export function isMailerLiteConfigured(groupId) {
  return Boolean(getMailerLiteApiKey() && getBuyerGroupId(groupId));
}

export async function upsertBuyerSubscriber({
  email,
  stripeSessionId,
  bookTitle = "The Quiet Exponential",
  groupId,
}) {
  if (!email) {
    throw new Error("Missing buyer email.");
  }

  if (!isMailerLiteConfigured(groupId)) {
    throw new Error("MailerLite is not configured.");
  }

  const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getMailerLiteApiKey()}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email,
      groups: [getBuyerGroupId(groupId)],
      status: "active",
      fields: {
        source: "stripe_checkout",
        book_title: bookTitle,
        stripe_session_id: stripeSessionId,
      },
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`MailerLite subscriber sync failed: ${body}`);
  }

  return response.json();
}
