import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import AuthProvider from "@/Components/Provider/AuthProvider";
import DropDownProvider from "@/Components/Provider/DropDownProvider";
import { Links, StoreDescription, StoreName } from "@/Data/Info";
import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["700", "500"],
  variable: "--Font",
});
export const metadata: Metadata = {
  title: `${StoreName} - ${Links[0].value}`,

  description: StoreDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={tajawal.variable}>
        <AuthProvider>
          <DropDownProvider>
            <Navbar />
            {children}
            <Footer />
          </DropDownProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
