import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Layout from "../Components/Layout";
import { StoreProvider } from "../store";
import Head from "next/head";
import { useEffect } from "react"
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {

    const router = useRouter();
    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const res = await fetch('https://ipapi.co/json/');
                const data = await res.json();
                console.log(data.country_name)
                if (data.country_name === 'India') {
                    router.push('https://d2aatelier.com/');
                } else {
                    router.push('https://d2aatelier.in/');
                }
            } catch (error) {
                console.error('Error fetching country:', error);
            }
        };

        fetchCountry();
    }, []);

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <StoreProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </StoreProvider>
        </>
    );
}

export default MyApp;
