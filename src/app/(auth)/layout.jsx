import "./globals.css";
import ReactQueryProvider from "@/components/dashboard/ReactQueryProvider";
import { Inter } from "next/font/google";
import StoreProvider from "../StoreProvider";

export const metadata = {
  title: "sctsma",
  description: "Your Gateway to Order Financing Solutions!",
};

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>

        <body
          className={`${inter.className} auth-background h-screen overflow-x-hidden container mx-auto py-6 max-sm:py-2 max-sm:px-2`}
        >
          <StoreProvider>{children}</StoreProvider>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
