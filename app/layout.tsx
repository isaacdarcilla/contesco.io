import "./globals.css";

export const metadata = {
  title: {
    default: "Contesco — Streamline your contests.",
    template: "Contesco — Streamline your contests.",
  },
  description:
    "Streamline your contests with Contesco, the hassle-free solution for modern organizers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
