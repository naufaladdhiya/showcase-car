import "./globals.css";

import { Navbar, Footer } from "@/components";

export const metadata = {
  title: "Cars Show Case",
  description: "Find a brands news cars in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
