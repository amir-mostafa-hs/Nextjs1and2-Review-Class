import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-2">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
