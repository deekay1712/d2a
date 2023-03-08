import Link from 'next/link';

export default function LandingPage() {
    return (
        <div className= "landingPageWrapper">
            <div className="landingPage">
                <p className="landingPageTitle">Architects you can depend on and a process you can trust.</p> :
                <div className="landingPageButtons">
                    <div className="landingPageButton landingPageButtonOutline">
                        <Link href="/about-us">
                            <a>
                                Know More About Us
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}