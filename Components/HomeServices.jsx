import Link from 'next/link';

export default function HomeServices() {
    return (
        <div className='homeServicesWrapper'>
            <h1 className="homeServicesHeading">Services We Offer</h1>
            <div className="homeServicesCards">
                <div className="homeServicesCard">
                    <h2 className="homeServicesCardTitle">Architecture</h2>
                    <p className="homeServicesCardDescription">At D2A Atelier, we specialize in creating exceptional architectural designs.</p>
                    <div className="homeServicesCardButton">
                        <Link href="/services">
                            <a>
                                Know More
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="homeServicesCard">
                    <h2 className="homeServicesCardTitle">Interior Designing</h2>
                    <p className="homeServicesCardDescription">Transform your space into a work of art with our innovative interior design solutions.</p>
                    <div className="homeServicesCardButton">
                        <Link href="/services">
                            <a>
                                Know More
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="homeServicesCard">
                    <h2 className="homeServicesCardTitle">Landscaping</h2>
                    <p className="homeServicesCardDescription">Enhance the beauty of your outdoor spaces with D2A Atelier&#39;s expert landscaping services.</p>
                    <div className="homeServicesCardButton">
                        <Link href="/services">
                            <a>
                                Know More
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}