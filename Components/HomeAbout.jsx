export default function HomeAbout() {
  return (
    <div className="homeAboutWrapper">
      {/* <h1 className="homeAboutHeading">Renowned Architectural Design</h1> */}
      {/* <p className="homeAboutText">D2A Atelier have experience creating exceptional residential homes. The firm is recognized for creating innovative and environmentally conscious infrastructure that is individually tailored to each client and great for the community. Its multidisciplinary team of highly skilled and motivated professionals works as a strong team in each project to ensure quality of work by addressing forces of the site, respecting the context, looking into the cultural and economic aspects, meeting client’s needs and budget as well as coordinating contemporary construction techniques, branding, marketing and post occupancy issues.</p> */}


        <div className="homeAboutSection1">
          <div className="homeAboutSectionLeft">
            <img className="homeAboutSectionImg" src="/Assets/service1.jpeg" alt="" />
          </div>
          <div className="homeAboutSectionMiddle"></div>
          <div className="homeAboutSectionRight">
            <h2 className="homeAboutSectionHeading">Our Vision</h2>
            <p className="homeAboutSectionText">At D2A Atelier, our vision is to create spaces that inspire, innovate, and endure. We strive to design environments that not only meet our clients&#39; needs but also have a positive impact on the world around us. Our passion for architecture and design drives us to push boundaries, find unique solutions, and create lasting beauty.</p>
          </div>
        </div>

        <div className="homeAboutSection2">
          <div className="homeAboutSectionLeft">
            <h2 className="homeAboutSectionHeading">Who are we?</h2>
            <p className="homeAboutSectionText" style={{textAlign: "right"}}>D2A Atelier is a team of architects and designers driven to create exceptional spaces. With diverse expertise, we bring unique solutions and collaborate to meet clients' needs while pushing boundaries in design and technology. Our passion is guided by values of innovation, sustainability, and collaboration.</p>
          </div>
          <div className="homeAboutSectionMiddle"></div>
          <div className="homeAboutSectionRight">
            <img className="homeAboutSectionImg" src="/Assets/service2.jpeg" alt="" />
          </div>
        </div>
      </div>
  )
}
