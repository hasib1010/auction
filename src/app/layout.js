import { Geist, Geist_Mono } from "next/font/google";
import { UserProvider } from "../contexts/UserContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Super Media Bros",
  description: "Auction site for Super Media Bros",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased container mx-auto`}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
