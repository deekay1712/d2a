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
                    <h2 className="homeServicesCardTitle">Drafting And Modelling</h2>
                    <p className="homeServicesCardDescription">Our 2D & 3D drafting and modelling services bring your vision to life with precision.</p>
                    <div className="homeServicesCardButton">
                        <Link href="/services">
                            <a>
                                Know More
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="homeServicesCard">
                    <h2 className="homeServicesCardTitle">Turnkey Projects</h2>
                    <p className="homeServicesCardDescription">From design to completion, trust us to deliver seamless turnkey projects.</p>
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