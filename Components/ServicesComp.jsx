export default function ServicesComp() {
  return (
    <div className="servicesCompWrapper">
        <div className="serviceBanner">
          <div className="serviceBannerContent">
            <h1 className="serviceBannerHeading">Services</h1>
            <span>&#8595;</span>
          </div>
        </div>
        <div className="servicesComp">
          <div className="serviceL">
            <div className="serviceImgL">
              <img src="/Assets/service1.jpeg" alt="" />
            </div>
            <div className="servicePartitionDiv"></div>
            <div className="serviceText">
              <h2 className="serviceTextHeadingL">Architecture</h2>
              <p className="serviceTextContentL">Architecture is not just about making impressive buildings on paper but more importantly to deliver projects which are functional, safe, easy to maintain, sustainable and long lasting. We have been engaging with Architecture in a holistic manner since the inception of the firm and have allied services like structure, engineering, project management and green building as an integral part of the organization.</p>
            </div>
          </div>
          <div className="serviceR">
            <div className="serviceText">
              <h2 className="serviceTextHeadingR">Interior Designing</h2>
              <p className="serviceTextContentR">We follow a deeply contextual approach to our work and combine this with a strong focus on building the tactile and sensory qualities and experiential nature of the space through an in-depth understanding of methodologies, materials and storytelling.</p>
            </div>
            <div className="servicePartitionDiv"></div>
            <div className="serviceImgR">
              <img src="/Assets/service2.jpeg" alt="" />
            </div>
          </div>
          {/* <div className="serviceL">
            <div className="serviceImgL">
              <img src="/Assets/service3.jpeg" alt="" />
            </div>
            <div className="servicePartitionDiv"></div>
            <div className="serviceText">
              <h2 className="serviceTextHeadingL">2D & 3D Drafting & Modeling</h2>
              <p className="serviceTextContentL">The D2A delivers wide-ranging professional, Quality and Cost efficient timely delivery 2D Drafting services to Architects, Interior Designers, General Contractors and Woodworkers. <br/>We are a team of talented and professional Architects & Interior Designers to provide the best services with tight deadlines without compromising on the drawings quality. Our technical team utilizes AutoCAD (2D) and Sketchup (3D) programs to maintain accuracy in drawings and providing 4 rounds of Markups/Redlines.</p>
            </div>
          </div>
          <div className="serviceR">
            <div className="serviceText">
              <h2 className="serviceTextHeadingR">Turnkey Projects</h2>
              <p className="serviceTextContentR">D2A offers consultancy and project management services on turnkey projects basis in which it provides a wide range of services including planning, procurement and furnishing of building along with other necessary services.</p>
            </div>
            <div className="servicePartitionDiv"></div>
            <div className="serviceImgR">
              <img src="/Assets/service4.jpeg" alt="" />
            </div>
          </div> */}
        </div>
    </div>
  );
}
