import dns from "node:dns"
dns.setServers(['8.8.8.8','8.8.4.4']);
import "./globals.css";
import { Bounce, ToastContainer } from "react-toastify";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";




export const metadata = {
  title: "SunCart – Summer Essentials Store",
  description: "Summer Essentials Store",
};

export default function RootLayout({ children }) {
  return (
    <html
    data-theme="light"
      lang="en"
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
        <Header/>
        <Navbar />
        
        {children}

        <Footer />
      </body>
    </html>
  );
}
