"use client";

import { useState } from "react";

export default function CheckoutButton({
  className,
  children,
  product = "the-quiet-exponential",
}) {
  const [status, setStatus] = useState("idle");

  async function handleCheckout() {
    try {
      setStatus("loading");

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to start checkout.");
      }

      window.location.href = data.url;
    } catch (error) {
      setStatus(error.message || "Unable to start checkout.");
    }
  }

  return (
    <div>
      <button className={className} onClick={handleCheckout} type="button">
        {status === "loading" ? "Opening secure checkout..." : children}
      </button>
      {status !== "idle" && status !== "loading" ? (
        <p className="micro">{status}</p>
      ) : null}
    </div>
  );
}
