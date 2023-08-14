import faqsData from "../public/Assets/faqs";
import Faq from "../Components/Faq";
import Head from 'next/head'

export default function Faqs() {
    return (
        <>
            <Head>
                <title>FAQs - Studio Precise</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Studio Precise is a design firm based in the heart of the city of DELHI. We are a team of creative and experienced professionals who are passionate about creating beautiful spaces." />
                <link rel="canonical" href="https://www.studioprecise.com/" />
                <meta name="googlebot" content="notranslate" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="HOME - Studio Precise" />
                <meta property="og:description" content="We are a team of creative and experienced professionals who are passionate about creating beautiful spaces." />
                <meta property="og:url" content="https://www.studioprecise.com/" />
                <meta property="og:site_name" content="Studio Precise" />
                <meta property="og:image" content="/Assets/carousel1.jpeg" />
                <meta property="og:image:secure_url" content="/Assets/carousel1.jpeg" />
                <meta name="twitter:description" content="Studio Precise is a design firm based in the heart of the city of DELHI. We are a team of creative and experienced professionals who are passionate about creating beautiful spaces." />
                <meta name="twitter:title" content="HOME - Studio Precise" />
                <meta name="twitter:image" content="/Assets/carousel1.jpeg" />
            </Head>
            <div className="faqsWrapper">
                <h1 className="faqsHeading">Frequently Asked Questions</h1>

                {faqsData.map((faq, index) => (
                    <Faq key={index} question={faq.question} answer={faq.answer} />
                ))}

            </div>
        </>
    )
}
