import Head from "next/head";
import { ThemeProvider } from "next-themes";

import SmoothScroll from "../components/SmoothScroll";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Maltos Dev | Agence Web Moderne</title>
      <meta name="description" content="Agence de développement web spécialisée dans la création de sites modernes et performants pour les petites entreprises." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </Head>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SmoothScroll>
        <Component {...pageProps} />
      </SmoothScroll>
    </ThemeProvider>
  </>
);

export default MyApp;
