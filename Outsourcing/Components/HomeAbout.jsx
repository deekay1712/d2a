import Link from "next/link";

export default function HomeAbout() {
	return (
		<div className='homeAboutWrapper'>
			<h1 className='homeAboutHeading'>About Us</h1>
			{/* <p className="homeAboutText">Studio Precise have experience creating exceptional residential homes. The firm is recognized for creating innovative and environmentally conscious infrastructure that is individually tailored to each client and great for the community. Its multidisciplinary team of highly skilled and motivated professionals works as a strong team in each project to ensure quality of work by addressing forces of the site, respecting the context, looking into the cultural and economic aspects, meeting client’s needs and budget as well as coordinating contemporary construction techniques, branding, marketing and post occupancy issues.</p> */}
			<div className='homeAboutSection1'>
				<div className='homeAboutSectionLeft'>
					<img
						className='homeAboutSectionImg'
						src='/Assets/homeAbout1.jpg'
						alt=''
					/>
				</div>
				<div className='homeAboutSectionMiddle'></div>
				<div className='homeAboutSectionRight'>
					<h2 className='homeAboutSectionHeading'>Our Vision</h2>
					<p className='homeAboutSectionText'>
						Studio Precise&#39;s vision is to lead the drafting industry with
						exceptional services and strong client relationships. We aim to
						innovate and provide reliable, high-quality solutions through
						cutting-edge technology and skilled professionals, making a positive
						impact in the world and maintaining a reputation for excellence.
					</p>
				</div>
			</div>

			<div className='homeAboutSection2'>
				<div className='homeAboutSectionLeft'>
					<h2 className='homeAboutSectionHeading'>Who are we ?</h2>
					<p className='homeAboutSectionText'>
						Studio Precise is a premier outsourcing-based design and drafting firm
						in New Delhi specializing in Interior drawings, shop drawings and 3D
						rendering services, with 8 years of combine experience, we offer
						reliable solutions to the modern designing industry. We prioritize
						client needs and strive to build long lasting relationships through
						exceptional services
					</p>
				</div>
				<div className='homeAboutSectionMiddle'></div>
				<div className='homeAboutSectionRight'>
					<img
						className='homeAboutSectionImg'
						src='/Assets/homeAbout2.jpg'
						alt=''
					/>
				</div>
			</div>

			<div className='homeAboutSection1'>
				<div className='homeAboutSectionLeft'>
					<img
						className='homeAboutSectionImg'
						src='/Assets/homeAbout3.jpg'
						alt=''
					/>
				</div>
				<div className='homeAboutSectionMiddle'></div>
				<div className='homeAboutSectionRight'>
					<h2 className='homeAboutSectionHeading'>Why Us ?</h2>
					<p className='homeAboutSectionText'>
						Choose Studio Precise for timely delivery, professional management, and
						attention to detail. We prioritize client satisfaction through a
						design process that includes visualization and a commitment to
						understanding. We build long-term relationships by listening to
						client needs.
					</p>
				</div>
			</div>

			<Link href='/about-us'>
				<a className='homeAboutBtn'>Know More About Us</a>
			</Link>
		</div>
	);
}
