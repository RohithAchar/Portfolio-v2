import "./globals.css";

import Footer from "../components/footer";

export const metadata = {
  title: "Rohith Achar",
  description: "A personal portfolio ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-black`}
        style={{ fontFamily: "SF Pro Display Bold, sans-serif" }}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
