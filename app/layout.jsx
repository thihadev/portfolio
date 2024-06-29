import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// theme
import ThemeProvider from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Thiha soe's Portfolio",
  description: "Developed By Thiha soe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel='icon' href='/icon.ico' />
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme='light'>
          <Header />
            {children}
          <Footer/>
        </ThemeProvider>
        </body>
    </html>
  );
}
