import Link from 'next/link';

export default function LandingPage() {
    return (
        <div className= "landingPageWrapper">
            <div className="landingPage">
                <p className="landingPageTitle">Architects you can depend on <br/> and a process you can trust.</p> :
                <div className="landingPageButtons">
                    <div className="landingPageButton landingPageButtonOutline">
                        <Link href="/services">
                            <a>
                                Services We Offer
                            </a>
                        </Link>
                    </div>
                    <div className="landingPageButton landingPageButtonFill">
                        <Link href="/portfolio">
                            <a>
                                Our Projects
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}