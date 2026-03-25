import "./globals.css";

export const metadata = {
  title: "The Quiet Exponential",
  description:
    "A premium synthesis of Dario Amodei's 2024-2026 interviews on scaling laws, AI safety, and AI-driven biological breakthroughs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
