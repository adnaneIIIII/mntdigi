import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { generateMetadata } from "@/utils";
import Head from "next/head";
import Clarity from "@/components/Clarity";

const geistSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata = generateMetadata({
  email: "support@mntdigital.com",
  telephone: "+17822221472",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/icon.png" />
        <Clarity />
      </Head>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
