import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./component/NavBar/page";
import Footer from "./component/Footer";
// app/layout.js or pages/_app.js
import '@fortawesome/fontawesome-free/css/all.min.css';


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
      </head>
      <body data-theme={'light'}
        className={`${geistSans.variable} bg-purple-50         ${geistMono.variable} antialiased`}
      >
        <NavBar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
