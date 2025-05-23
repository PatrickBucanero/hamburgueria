import type { Metadata } from "next";
import styles from "./globals.module.css";
import Header from "@/frontend/components/header-default/Header";
import Footer from "@/frontend/components/footer-default/Footer";

export const metadata: Metadata = {
  title: "King Bites",
  description: "Generated by create next page",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
          <body className={styles.layoutContainer}>
            
              <Header/>
              
              <main className={`${styles.mainContent} ${styles.pageContainer}`}>
                    {children}
                    
              </main>
              <Footer/>
          </body>
      </html>
  );
}