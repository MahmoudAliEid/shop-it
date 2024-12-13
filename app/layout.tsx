import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Shop IT",
  description:
    "Shop-It is a modern e-commerce platform designed to offer a seamless and enjoyable shopping experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col  min-h-screen transition">
          <NavBar />
          <main className="flex-grow">
            <Container className="bg-background-light dark:bg-background-dark mt-10 rounded-lg">
              {children}
            </Container>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
