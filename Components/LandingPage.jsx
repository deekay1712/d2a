import Link from 'next/link';

export default function LandingPage() {
    return (
        <div className="landingPageWrapper">
            <div className="landingPage">
                <p className="landingPageTitle">Discover the essence of design and creativity at D2A Atelier.</p>
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