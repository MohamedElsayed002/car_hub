import type { Metadata } from "next";
import "./globals.css";
import { Footer , Header } from "../../components";
export const metadata: Metadata = {
  title: "Car Hub",
  description: "discover the best car in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='relative '>
        <Header/>
        {children}
        <Footer/>
      </body>

    </html>
  );
}
