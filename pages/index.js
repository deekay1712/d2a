import CarouselHome from "../Components/CarouselHome";
import HomeServices from "../Components/HomeServices";
import LandingPage from "../Components/LandingPage";
import LandingPageO from "../Components/Outsourcing/LandingPageO";
import HomeAbout from "../Components/HomeAbout";
import HomeCards from "../Components/HomeCards";
import HomeTestimonials from "../Components/HomeTestimonials";
import Head from 'next/head'
import { useStore } from "../store";

export default function Home() {
    const { state } = useStore();

    return (
        <>
            <Head>
                <title>HOME - D2A Atelier</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="D2A Atelier is a design firm based in the heart of the city of DELHI. We are a team of creative and experienced professionals who are passionate about creating beautiful spaces." />
                <link rel="canonical" href="https://www.d2aatelier.com/" />
                <meta name="googlebot" content="notranslate" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="HOME - D2A Atelier" />
                <meta property="og:description" content="We are a team of creative and experienced professionals who are passionate about creating beautiful spaces." />
                <meta property="og:url" content="https://www.d2aatelier.com/" />
                <meta property="og:site_name" content="D2A Atelier" />
                <meta property="og:image" content="/Assets/carousel1.jpeg" />
                <meta property="og:image:secure_url" content="/Assets/carousel1.jpeg" />
                <meta name="twitter:description" content="D2A Atelier is a design firm based in the heart of the city of DELHI. We are a team of creative and experienced professionals who are passionate about creating beautiful spaces." />
                <meta name="twitter:title" content="HOME - D2A Atelier" />
                <meta name="twitter:image" content="/Assets/carousel1.jpeg" />
            </Head>
            {
                state.isIndia?
                <LandingPage /> : <LandingPageO />
            }
            <HomeServices />
            <HomeAbout />
            {
                state.isIndia && 
                <>
                    <HomeCards />
                    <HomeTestimonials />
                </>
            }
        </>
    );
}
