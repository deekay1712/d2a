import Link from 'next/link';
import{ useStore } from "../store"

export default function LandingPage() {
    const { state } = useStore();
    return (
        <div className={state.isIndia? "landingPageWrapper" : "landingPageWrapperOutsourcing" }>
            <div className="landingPage">
                {
                    state.isIndia ? 
                    <p className="landingPageTitle">Architects you can depend on and a process you can trust.</p> :
                    <p className="landingPageTitle">D2A Atelier consists the highest caliber of design and drafting services.</p>
                }
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