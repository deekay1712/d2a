import { useStore } from "../store";
import Link from "next/link";

export default function HomeAbout() {
  const { state } = useStore();

  if(state.isIndia){
    return (
      <div className="homeAboutWrapper">
        <h1 className="homeAboutHeading">About Us</h1>
        {/* <p className="homeAboutText">D2A Atelier have experience creating exceptional residential homes. The firm is recognized for creating innovative and environmentally conscious infrastructure that is individually tailored to each client and great for the community. Its multidisciplinary team of highly skilled and motivated professionals works as a strong team in each project to ensure quality of work by addressing forces of the site, respecting the context, looking into the cultural and economic aspects, meeting client’s needs and budget as well as coordinating contemporary construction techniques, branding, marketing and post occupancy issues.</p> */}
          <div className="homeAboutSection1">
            <div className="homeAboutSectionLeft">
              <img className="homeAboutSectionImg" src="/Assets/homeAbout1.jpg" alt="" />
            </div>
            <div className="homeAboutSectionMiddle"></div>
            <div className="homeAboutSectionRight">
              <h2 className="homeAboutSectionHeading">Our Vision</h2>
              <p className="homeAboutSectionText">At D2A Atelier, our vision is to create spaces that inspire, innovate, and endure. We strive to design environments that not only meet our clients&#39; needs but also have a positive impact on the world around us. Our passion for architecture and design drives us to push boundaries, find unique solutions, and create lasting beauty.</p>
            </div>
          </div>
  
          <div className="homeAboutSection2">
            <div className="homeAboutSectionLeft">
              <h2 className="homeAboutSectionHeading">Who are we ?</h2>
              <p className="homeAboutSectionText">D2A Atelier is a team of architects and designers driven to create exceptional spaces. With diverse expertise, we bring unique solutions and collaborate to meet clients&39; needs while pushing boundaries in design and technology. Our passion is guided by values of innovation, sustainability, and collaboration.</p>
            </div>
            <div className="homeAboutSectionMiddle"></div>
            <div className="homeAboutSectionRight">
              <img className="homeAboutSectionImg" src="/Assets/homeAbout2.jpg" alt="" />
            </div>
          </div>
  
          <div className="homeAboutSection1">
            <div className="homeAboutSectionLeft">
              <img className="homeAboutSectionImg" src="/Assets/homeAbout3.jpg" alt="" />
              </div>
            <div className="homeAboutSectionMiddle"></div>
            <div className="homeAboutSectionRight">
              <h2 className="homeAboutSectionHeading">Why Us ?</h2>
              <p className="homeAboutSectionText">Choose D2A for timely delivery, professional management, and attention to detail. We prioritize client satisfaction through a design process that includes visualization and a commitment to understanding unique requirements. We build long-term relationships by listening to client needs.</p>
            </div>
          </div>

          <Link href="/about-us">
            <a className="homeAboutBtn">Know More About Us</a>
          </Link>
      </div>
    )
  }
  else{
    return (
      <div className="homeAboutWrapper">
        <h1 className="homeAboutHeading">About Us</h1>
        {/* <p className="homeAboutText">D2A Atelier have experience creating exceptional residential homes. The firm is recognized for creating innovative and environmentally conscious infrastructure that is individually tailored to each client and great for the community. Its multidisciplinary team of highly skilled and motivated professionals works as a strong team in each project to ensure quality of work by addressing forces of the site, respecting the context, looking into the cultural and economic aspects, meeting client’s needs and budget as well as coordinating contemporary construction techniques, branding, marketing and post occupancy issues.</p> */}
          <div className="homeAboutSection1">
            <div className="homeAboutSectionLeft">
              <img className="homeAboutSectionImg" src="/Assets/homeAbout1.jpg" alt="" />
            </div>
            <div className="homeAboutSectionMiddle"></div>
            <div className="homeAboutSectionRight">
              <h2 className="homeAboutSectionHeading">Our Vision</h2>
              <p className="homeAboutSectionText">D2A Atelier&#39;s vision is to lead the architectural industry with exceptional services and strong client relationships. We aim to innovate and provide reliable, high-quality solutions through cutting-edge technology and skilled professionals, making a positive impact in the world and maintaining a reputation for excellence.</p>
            </div>
          </div>
  
          <div className="homeAboutSection2">
            <div className="homeAboutSectionLeft">
              <h2 className="homeAboutSectionHeading">Who are we ?</h2>
              <p className="homeAboutSectionText">D2A Atelier is a premier architectural firm in New Delhi specializing in shop drawing drafting services. With 8 years of experience, we offer reliable solutions to the modern architectural millwork industry. We prioritize client needs and strive to build lasting relationships through exceptional service.</p>
            </div>
            <div className="homeAboutSectionMiddle"></div>
            <div className="homeAboutSectionRight">
              <img className="homeAboutSectionImg" src="/Assets/homeAbout2.jpg" alt="" />
            </div>
          </div>
  
          <div className="homeAboutSection1">
            <div className="homeAboutSectionLeft">
              <img className="homeAboutSectionImg" src="/Assets/homeAbout3.jpg" alt="" />
              </div>
            <div className="homeAboutSectionMiddle"></div>
            <div className="homeAboutSectionRight">
              <h2 className="homeAboutSectionHeading">Why Us ?</h2>
              <p className="homeAboutSectionText">Choose D2A for timely delivery, professional management, and attention to detail. We prioritize client satisfaction through a design process that includes visualization and a commitment to understanding unique requirements. We build long-term relationships by listening to client needs.</p>
            </div>
          </div>

          <Link href="/about-us">
            <a className="homeAboutBtn">Know More About Us</a>
          </Link>
      </div>
    )
  }
}
