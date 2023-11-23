import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import AuthProvider from "@/Components/Providers/AuthProvider";
import DropDownProvider from "@/Components/Providers/DropDownProvider";
import { Links, StoreDescription, StoreName } from "@/Data/Info";
import { getCartLength } from "@/Server/Actions";
import { AuthConfig } from "@/lib/Auth";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Tajawal } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(AuthConfig);
  const length = (await getCartLength(session?.user?.email as string)) || 0;

  return (
    <html lang="en">
      <body className={tajawal.variable}>
        <AuthProvider>
          <DropDownProvider>
            <Navbar length={length} />
            {children}
            <Footer />
            <ToastContainer
              position="bottom-left"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              rtl={true}
              draggable={false}
              closeOnClick
              pauseOnHover
            />
          </DropDownProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
