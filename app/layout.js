import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Authentication App",
  description: "My Authentication App Created By NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="main-container">
          {children}
          </div>
      </body>
    </html>
  );
}
