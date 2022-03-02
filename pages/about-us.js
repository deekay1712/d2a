import AboutUs from "../Components/AboutUs";
import Head from "next/head";

export default function aboutUs() {
  return (
    <>
      <Head>
        <title>ABOUT US - Dream Design Architects</title>
        <meta name="description" content="Dream Design Architects is a design firm based in the heart of the city of DELHI. We are a team of creative and experienced professionals who are passionate about creating beautiful spaces." />
        <link rel="canonical" href="https://dreamdesignarchitects.com/about-us/" />
        <meta name="googlebot" content="notranslate" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SERVICES - Dream Design Architects" />
        <meta property="og:description" content="We are a team of creative and experienced professionals who are passionate about creating beautiful spaces." />
        <meta property="og:url" content="https://dreamdesignarchitects.com/about-us/" />
        <meta property="og:site_name" content="Dream Design Architects" />
        <meta property="og:image" content="/Assets/carousel1.jpeg" />
        <meta property="og:image:secure_url" content="/Assets/carousel1.jpeg" />
        <meta name="twitter:description" content="Dream Design Architects is a design firm based in the heart of the city of DELHI. We are a team of creative and experienced professionals who are passionate about creating beautiful spaces." />
        <meta name="twitter:title" content="ABOUT US - Dream Design Architects" />
        <meta name="twitter:image" content="/Assets/carousel1.jpeg" />
      </Head>
      <AboutUs/>
    </>
  )
}
