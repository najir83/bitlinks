import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./component/NavBar/page";
import Footer from "./component/Footer";
import { ToastContainer, Bounce } from "react-toastify";

// app/layout.js or pages/_app.js
import "@fortawesome/fontawesome-free/css/all.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bitlinks-Your trusted url shortner",
  description: "short any url",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Safe way to include external script in App Router */}
        <script
          src="https://kit.fontawesome.com/ece4b86e58.js"
          crossOrigin="anonymous"
          async
        ></script>
        <link
          rel="icon"
          href='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><circle cx="60" cy="60" r="60" fill="white"/><text x="10" y="95" font-size="100">☯</text></svg>'
        />
      </head>
      <body
        data-theme={"light"}
        className={`${geistSans.variable} bg-purple-50         ${geistMono.variable} antialiased`}
      >
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
        <NavBar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
