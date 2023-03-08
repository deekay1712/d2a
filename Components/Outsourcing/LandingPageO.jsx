import Link from 'next/link';

export default function LandingPageO() {
    return (
        <div className="landingPageOWrapper">
            <div className="landingPageO">
                    <p className="landingPageOTitle">D2A Atelier consists the highest caliber of design and drafting services.</p>
                <div className="landingPageOButtons">
                    <div className="landingPageOButton landingPageOButtonOutline">
                        <Link href="/about-us">
                            <a>
                                Know More About Us
                            </a>
                        </Link>
                    </div>
                    <div className="landingPageOButton landingPageOButtonFill">
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