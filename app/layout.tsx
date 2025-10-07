import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Southeastern Social Work Conference 2026",
  description: "Voices from the Field - March 26-27, 2026 at UNC Pembroke",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-50`}>
        <FavoritesProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="bg-[#000000] text-white py-8 mt-12">
            <div className="container mx-auto px-4 text-center">
              <p className="text-sm">© 2026 UNC Pembroke | Southeastern Social Work Conference</p>
              <p className="text-xs mt-2 text-gray-300">Demo prototype - no data persistence</p>
            </div>
          </footer>
        </FavoritesProvider>
      </body>
    </html>
  );
}
