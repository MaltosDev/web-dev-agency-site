import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "../context/LanguageContext";

import SmoothScroll from "../components/SmoothScroll";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <LanguageProvider>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
    </Head>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SmoothScroll>
        <Component {...pageProps} />
      </SmoothScroll>
    </ThemeProvider>
  </LanguageProvider>
);

export default MyApp;
