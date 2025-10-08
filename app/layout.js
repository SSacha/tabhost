import { Geist, Geist_Mono } from "next/font/google";
import { League_Spartan , Jost } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ls = League_Spartan({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ['latin']
})

export const metadata = {
  title: "Tab&Host",
  description: "Optimisez la gestion de votre bien avec notre service de conciergerie personnalisé",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ls.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
