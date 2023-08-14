import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import Myprovider from "@/Redux/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ONE Store - Women",
  description: "ONE Store: Your one-stop shop for all your shopping needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Myprovider>
          <Navbar />
          {children}
        </Myprovider>
      </body>
    </html>
  );
}
