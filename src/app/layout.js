import localFont from "next/font/local";
import "./globals.css";
import "./custom.css";
import Main from "./[lang]/main";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Home | LUAI Car Rental Dubai",
  description: "Home | LUAI Car Rental Dubai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Main>{children}</Main>
      </body>

    </html>
  );
}
