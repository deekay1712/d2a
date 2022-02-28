import Link from 'next/link';

export default function Footer() {
  return (
  <div className='footerWrapper'>
      <div className="footerCol footerAddress">
        <h3 className="footerHeading">CONTACT</h3>
        <p className="footerContent">H.No. 310, Gali No. 8,<br/>
        Basement Floor, Dakshinpuri, <br/>
        Near Lal Building School,<br/>
        New Delhi-110062</p>
      </div>
      <div className="footerCol">
        <p className="footerContent">architect.d2a@gmail.com <br/>
        +91-9354106858 <br/> 
        +91-9911136306 <br/> 
        +91-8383081635 <br/>
        </p>
      </div>
      <div className="footerCol footerColContactButton">
        <div className="contactUsButton">
          <Link href="/contact-us">
            <a>
              CONTACT US
            </a>
            </Link>
        </div>
      </div>
      <div className="footerLogoCol">
        <Link href="/">
          <a >
          <img className='footerLogo' src='/Assets/LogoWhite.png' alt="" />
          </a>
        </Link>
      </div>
  </div>
  );
}
