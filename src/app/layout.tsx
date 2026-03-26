import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dronalay Learning Academy | Quality Education in Panvel",
  description: "Dronalay Learning Academy is a premier coaching institute in Panvel, Navi Mumbai, providing quality education for 5th to 12th standard students with focus on JEE, NEET, and CET preparation.",
  keywords: "coaching, tuition, Panvel, Navi Mumbai, JEE, NEET, CET, science, mathematics, education",
  openGraph: {
    title: "Dronalay Learning Academy",
    description: "Quality Education in Panvel, Navi Mumbai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
