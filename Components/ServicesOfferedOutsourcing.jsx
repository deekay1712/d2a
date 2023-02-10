import Link from "next/link";
export default function ServicesOfferedOutsourcing() {
    return (
        <div className="servicesOfferedWrapper">
            <div className="serviceOfferedContent1">
                <div className="serviceOfferedContent">
                    <h1 className="serviceOfferedTitle">AutoCAD</h1>
                    <p className="serviceOfferedDescription">Our team at D2A Atelier is equipped with advanced AutoCAD software, allowing us to deliver precise and accurate drafting services to meet your architectural needs. Our focus on detail and attention to every aspect of your project ensures that we deliver high-quality results every time.</p>
                    <Link href="/services-we-offer/autocad">
                        <a className="serviceOfferedBtn">Learn More About This</a>
                    </Link>
                </div>
            </div>

            <div className="serviceOfferedContent2">
                <div className="serviceOfferedContent">
                    <h1 className="serviceOfferedTitle">Sketchup</h1>
                    <p className="serviceOfferedDescription">Our team of skilled SketchUp designers and modelers are dedicated to delivering innovative and visually appealing designs. Our SketchUp services include 3D modeling, interior design, and architectural visualizations, all tailored to meet your specific requirements.</p>
                    <Link href="/services-we-offer/sketchup">
                        <a className="serviceOfferedBtn">Learn More About This</a>
                    </Link>
                </div>
            </div>

            <div className="serviceOfferedContent3">
                <div className="serviceOfferedContent">
                    <h1 className="serviceOfferedTitle">BIM</h1>
                    <p className="serviceOfferedDescription">BIM is an essential tool in modern architecture. Our team at D2A Atelier utilizes the latest BIM technology to streamline the design and construction process, providing a more efficient and cost-effective solution for our clients.</p>
                    <Link href="/services-we-offer/bim">
                        <a className="serviceOfferedBtn">Learn More About This</a>
                    </Link>
                </div>
            </div>

            <div className="serviceOfferedContent4">
                <div className="serviceOfferedContent">
                    <h1 className="serviceOfferedTitle">3D Visualization</h1>
                    <p className="serviceOfferedDescription">Our team of talented 3D artists and animators create photorealistic 3D visualizations that bring your designs to life. Our 3D visualization services allow you to see your projects in full detail, helping you make informed decisions before construction begins.</p>
                    <Link href="/services-we-offer/3dVisualization">
                        <a className="serviceOfferedBtn">Learn More About This</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}