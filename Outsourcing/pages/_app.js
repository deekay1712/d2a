import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Layout from "../Components/Layout";
import { StoreProvider } from "../store";
import Head from "next/head";
import { useEffect } from "react"
import { useRouter } from 'next/router';
import Cookies from "js-cookie";

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const checkCountryAndRedirect = async () => {
            try {
                // Check if the user has already been redirected
                const redirected = Cookies.get('redirected');

                // Check if the user is on the .com or .in domain
                const isCom = router.asPath.endsWith('.com');

                // Fetch user's country using ipapi.com/json API
                const res = await fetch('https://ipapi.co/json/');
                const data = await res.json();

                // Perform redirection based on the user's country and domain
                if (!redirected && data.country_name !== 'India') {
                    if (isCom) {
                        // Redirect .com to .in if the user is not from India
                        console.log("redirection")
                        Cookies.set('redirected', 'true');
                        router.replace(router.asPath.replace('.com', '.in'));
                    } else {
                        console.log("no redirection")
                        Cookies.set('redirected', 'true');
                    }
                } else {
                    console.log("True")
                }
            } catch (error) {
                console.error('Error fetching user country:', error);
            }
        };

        checkCountryAndRedirect();
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
