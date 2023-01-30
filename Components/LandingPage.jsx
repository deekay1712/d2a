import Link from 'next/link';

export default function LandingPage() {
    return (
        <div className="landingPageWrapper">
            <div className="landingPage">
                <p className="landingPageTitle">D2A Atelier consists the highest caliber of design and drafting services.</p>
                <div className="landingPageButtons">
                    <div className="landingPageButton landingPageButtonOutline">
                        <Link href="/about-us">
                            <a>
                                Know More About Us
                            </a>
                        </Link>
                    </div>
                    <div className="landingPageButton landingPageButtonFill">
                        <Link href="/contact-us">
                            <a>
                                Request a Quote NOW!
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}