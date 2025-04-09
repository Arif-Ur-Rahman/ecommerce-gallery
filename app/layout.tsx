import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import "./globals.css";
import ToasterProvider from "@/components/ToasterProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <ToasterProvider />
          <Navbar />
          <main className="container mx-auto px-4 py-8">{children}</main>
          <footer className="bg-gray-100 py-6 text-center">
            © 2024 Ecommerce Gallery
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
