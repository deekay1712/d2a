import Link from 'next/link';

export default function Footer() {
  return (
  <div className='footerWrapper'>
    <div className='footerColAbout'>
      <Link href='/'>
        <img src='/assets/LogoWhite.png' alt='logo' className='footerLogo'/>
      </Link>
      <div className="footerAbout">
        <p className='footerContent'>D2A Atelier is a design studio that provides a wide range of services in the field of architecture, interior design, and landscape design. We are a team of young and passionate architects and designers who are committed to providing the best design solutions to our clients.</p>
      </div>
      <div className="footerListItem">
        <Link href='/about-us'>
          <a className='footerContent'>
            Read More &gt;</a>
        </Link>
      </div>
    </div>
    <div className='footerCol'>
      <h3 className='footerTitle'>QUICK LINKS</h3>
      <ul className='footerList'>
        <li className='footerListItem'>
          <Link href='/'>
            <a className='footerContent'>
              <img src='/assets/ic-sideArrow.svg' alt='sideArrow' className='footerSideArrow'/>
              Home</a>
          </Link>
        </li>
        <li className='footerListItem'>
          <Link href='/about-us'>
            <a className='footerContent'>
              <img src='/assets/ic-sideArrow.svg' alt='sideArrow' className='footerSideArrow'/>
              Who are we</a>
          </Link>
        </li>
        <li className='footerListItem'>
          <Link href='/contact-us'>
            <a className='footerContent'>
              <img src='/assets/ic-sideArrow.svg' alt='sideArrow' className='footerSideArrow'/>
              Contact Us</a>
          </Link>
        </li>
        <li className='footerListItem'>
          <Link href='/services'>
            <a className='footerContent'>
              <img src='/assets/ic-sideArrow.svg' alt='sideArrow' className='footerSideArrow'/>
              Services</a>
          </Link>
        </li>
        <li className='footerListItem'>
          <Link href='/portfolio'>
            <a className='footerContent'>
              <img src='/assets/ic-sideArrow.svg' alt='sideArrow' className='footerSideArrow'/>
              Our Projects</a>
          </Link>
        </li>
      </ul>
    </div>
    <div className='footerCol'>
      <h3 className='footerTitle'>CONTACT US</h3>
      <ul className='footerList'>
        <li className='footerListItem'>
          <a href='https://goo.gl/maps/vnCG1ZEpT2ete9zp8' target='_blank' className='footerLink footerContent'>
            <img src='/assets/ic-home.png' alt='location' className='footerContactIcon'/>
            H-310, <br/>Dr.Ambedkar Nagar, Block H, <br/>Sector 5, Dakshinpuri, <br/>New Delhi, Delhi 110062</a>
        </li>
        <li className='footerListItem'>
          <a href='tel:+919990632664' className='footerLink footerContent'>
            <img src='/assets/ic-phone.png' alt='phone' className='footerContactIcon'/>
            +91 9990632664</a>
        </li>

        <li className='footerListItem'>
          <a href='mailto:admin@d2aatelier.com' className='footerLink footerContent'>
            <img src='/assets/ic-mail.png' alt='mail' className='footerContactIcon'/>
            admin@d2aatelier.com</a>
        </li>
      </ul>
      <h3 className='footerTitle'>STAY CONNECTED</h3>
      <div className='footerSocial'>
        <a href='https://www.facebook.com/d2aatelier' target='_blank' rel='noreferrer' className='footerSocialLink'>
          <img src='/assets/facebook.png' alt='facebook' className='footerSocialIcon'/>
        </a>
        <a href='https://www.instagram.com/d2aatelier/' target='_blank' rel='noreferrer' className='footerSocialLink'>
          <img src='/assets/instagram.png' alt='instagram' className='footerSocialIcon'/>
        </a>
        <a href='https://www.linkedin.com/company/d2aatelier' target='_blank' rel='noreferrer' className='footerSocialLink'>
          <img src='/assets/linkedin.png' alt='linkedin' className='footerSocialIcon'/>
        </a>
      </div>
    </div>
  </div>
  );
}
