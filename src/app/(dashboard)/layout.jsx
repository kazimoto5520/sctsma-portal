import "./globals.css";
import Sidebar from "@/components/dashboard/Sidebar";
import TopHeader from "@/components/dashboard/TopHeader";
import ReactQueryProvider from "@/components/dashboard/ReactQueryProvider";
import { Inter } from "next/font/google";
import StoreProvider from "../StoreProvider";
import { Toaster } from "react-hot-toast";
import { CustomerSupportIcon } from "hugeicons-react";
import CustomerIconComponent from "@/components/dashboard/CustomerIconComponent";

export const metadata = {
  title: "sctsma",
  description: "Your Gateway to Invoice Financing Solutions!",
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
          className={`${inter.className} bg-main-dashboard flex h-screen overflow-x-hidden overflow-y-auto`}
        >
          <StoreProvider>
            <Sidebar />
            <main className="relative w-full h-screen overflow-y-scroll">
              <div className="relative flex flex-col">
                <TopHeader />
                <Toaster />
                <div className="px-4 py-6 max-sm:px-4">{children}</div>
              </div>

              <div className="fixed bottom-4 right-4 z-30">
                <CustomerIconComponent />
              </div>
            </main>
          </StoreProvider>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
