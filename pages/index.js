import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Index from "../components/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Graham Coulby</title>
        <link rel="icon" href="./img/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width,initial-scale=0.85,maximum-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="./img/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./img/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./img/favicon-16x16.png" />
        <link rel="manifest" href="./img/site.webmanifest" />
        <link rel="mask-icon" href="./img/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="apple-mobile-web-app-title" content="Graham Coulby" />
        <meta name="application-name" content="Graham Coulby" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:url" content=" https://grahamcoulby.co.uk/" />
        <meta property="og:image:height" content="411" />
        <meta property="og:image:width" content="785" />
        <meta property="og:title" content="Graham Coulby" />
        <meta
          property="og:description"
          content="Graham Coulby is a doctoral student who is researching better ways to integrate sensor technology in the homes and neighbourhoods of the future, to improve wellbeing."
        />
        <meta property="og:image" content="./img/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link href="./css/bootstrap.min.css" rel="stylesheet" />
        <link href="./css/main.css" rel="stylesheet" />
      </Head>
      <div className="App title-center title-h1h2 modular fixed-nav">
        <Index />
      </div>
    </>
  );
}
