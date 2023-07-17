import Team from "./Team";
export default function AboutUs() {
	return (
		<div className='aboutUsWrapper'>
			<>
				<div className='aboutUsBanner'>
					<div className='aboutUsBannerContent'>
						<h1 className='aboutUsBannerHeading'>About Us</h1>
					</div>
				</div>
				<div className='aboutUsText'>
					<h1 className='aboutUsTextHeading'>Our History</h1>
					<p className='aboutUsTextContent'>
						D2A Atelier was founded in 2020 by its Founder & CEO Rajesh Kumar
						and Co-Founder & Managing Director D.K. Jaishwal. The company has
						enough experience and creative minds to achieve the goal and give a
						path to the next generations. <br />
						D2A Atelier has grown its clientele rapidly since 2020 with a high
						level of satisfaction in their drafting services through their
						excellent man management, communication and high-quality detailing.
					</p>
					<h1 className='aboutUsTextHeading'>Who we are?</h1>
					<p className='aboutUsTextContent'>
						D2A Atelier is an established business based in New Delhi. The
						company hold a combined experience of 8 years in the designing and
						drafting industry. We are fulfilling the needs of clients across a
						diverse scope within the Residential, Commercial, Hospitality,
						Retail, Healthcare and Institutional with a skilled team of
						Architects, Interior Designers and Drafters.
						<br />
						We are well equipped to offer reliable solutions to the modern
						designing industry. Our business is associated with the
						Architecture, Interior Designing, Construction and Woodworking
						Industries and we pride itself on listening to our clients needs and
						strives to understand their working standard.
						<br />
						Our vision is &#34;To succeed by delivering a reliable service with
						a high level of professionalism&#34;. We take this very seriously
						and offer our list of services below to you as a potential or
						ongoing client.
					</p>
					<h1 className='aboutUsTextHeading'>Our values</h1>
					<p className='aboutUsTextContent'>
						Our values underpin everything we do at D2A Atelier. The way we
						approach our work and the way we interact with our colleagues and
						clients.{" "}
					</p>
					<p className='aboutUsTextContent'>
						<strong>QUALITY</strong>
						<br />
						This value is critical to our company and our staff members. It is
						an imperative part of our service and professionalism.
					</p>
					<p className='aboutUsTextContent'>
						<strong>DEPENDABILITY</strong>
						<br />
						Our client must be able to rely on us to deliver on our promise
						without worry with the project quality. You can rely on D2A Atelier
						to complete.
					</p>
					<p className='aboutUsTextContent'>
						<strong>INTEGRITY</strong>
						<br />
						We foster the highest standards of personal conduct in our people
						stressing the importance of courtesy, honesty, trust and
						understanding.
					</p>
					<p className='aboutUsTextContent'>
						<strong>PRIDE</strong>
						<br />
						All member of staff at D2A Atelier quickly develop a sense of
						professional pride in their work, skills, attitudes and in their own
						abilities due to the quality, dependability and integrity our
						company offers.
					</p>
				</div>
				<div className='aboutUsBanner aboutUsBanner1'>
					<div className='aboutUsBannerContent'>
						<h1 className='aboutUsTextHeading'>Meet Our Team</h1>
					</div>
				</div>
				<Team />
			</>
		</div>
	);
}
