import { Open_Sans } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { NavbarDemo } from "@/components/common/NavbarDemo";
import MegaMenu from "@/components/common/MegaMenu";

export const metadata = {
  title: "Balance Scorecard",
  description: "Generated by create next app",
};
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden ${openSans.className} antialiased`}
      >
              <MegaMenu/>

        {/* <NavbarDemo/> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
