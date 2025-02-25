import type { Metadata, Viewport } from "next";
import "./globals.css";
import { montserrat } from "./fonts/fonts";
import Navbar from "./components/navbar/client/navbar";
import Footer from "./components/navbar/client/footer";

export const metadata: Metadata = {
  title: "Forest McKinney",
  description: "My portfolio, personal info, and professional qualifications",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <main className={`${montserrat.className} antialiased flex-1`}>
            <Navbar />
            <div className="py-10">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
