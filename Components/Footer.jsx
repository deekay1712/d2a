import Link from 'next/link';

export default function Footer() {
  return (
  <div className='footerWrapper'>
      <div className="footerCol footerAddress">
        <h3 className="footerHeading">CONTACT</h3>
        <p className="footerContent">H-310,<br/>
        Basement Floor, Dakshinpuri, <br/>
        Delhi-110068</p>
      </div>
      <div className="footerCol">
        <p className="footerContent">admin@dreamdesignarchitects.com<br/>
        +91-9990632664 <br/> 
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
