import { useState } from "react";
import SubserviceO from "./SubserviceO";
import Head from "next/head";
export default function SketchupComponent() {
	const [filter, setFilter] = useState(1);
	const filterButton = (props) => {
		setFilter(props);
	};
	const data = {
		1: {
			title: "Sketchup 3D Modeling Services",
			content:
				"Our team of highly trained engineers, architects, drafters, and other specialists provides high-quality SketchUp modelling services that meet the needs of your project. Furthermore, we are equipped with the most recent technology as well as industry-specific knowledge, which allows us to provide efficient and precise services.",
		},
		2: {
			title: "CAD to Sketchup conversion service",
			content:
				"If you have CAD designs that you want to convert into SketchUp designs, our services can help you. You can have your designs converted into editable SketchUp design format using our CAD services, necessary infrastructure, and our team of professionals.",
		},
		3: {
			title: "Sketchup Layout",
			content:
				"Sketch Layout help you to present your floor plans and elevations to a specific scale, your SketchUp 3D model into 2D space with LayOut. Annotate, document, and communicate clearly so you can move your project forward.",
		},
	};
	return (
		<>
			<Head>
				<title>SKETCHUP - Studio Precise</title>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
				<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
				<meta name='msapplication-TileColor' content='#da532c' />
				<meta name='theme-color' content='#000000' />
				<meta
					name='description'
					content='Studio Precise is a design firm based in the heart of the city of DELHI. We are a team of creative and experienced professionals who are passionate about creating beautiful spaces.'
				/>
				<link rel='canonical' href='https://www.studioprecise.com/' />
				<meta name='googlebot' content='notranslate' />
				<meta property='og:locale' content='en_US' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content='SERVICES - Studio Precise' />
				<meta
					property='og:description'
					content='We are a team of creative and experienced professionals who are passionate about creating beautiful spaces.'
				/>
				<meta property='og:url' content='https://www.studioprecise.com/' />
				<meta property='og:site_name' content='Studio Precise' />
				<meta property='og:image' content='/Assets/carousel1.jpeg' />
				<meta property='og:image:secure_url' content='/Assets/carousel1.jpeg' />
				<meta
					name='twitter:description'
					content='Studio Precise is a design firm based in the heart of the city of DELHI. We are a team of creative and experienced professionals who are passionate about creating beautiful spaces.'
				/>
				<meta name='twitter:title' content='ABOUT US - Studio Precise' />
				<meta name='twitter:image' content='/Assets/carousel1.jpeg' />
			</Head>
			<div className='serviceComponentOWrapper'>
				<div className='serviceComponentOHeader2'>
					<h1 className='serviceComponentOHeaderTitle'>Sketchup</h1>
				</div>
				<div className='serviceComponentOContent'>
					<p className='serviceComponentOContentText'>
						Studio Precise is a team of professional architects who have worked with
						countless clients, we offer a variety of SketchUp services, among
						other architectural solutions, to meet your designing requirements.
					</p>
					<div className='serviceComponentOFilter'>
						<span
							className={`serviceComponentOFilterButton ${
								filter === 1 ? "serviceComponentOFilterButtonSelected" : ``
							}`}
							onClick={() => filterButton(1)}>
							Sketchup 3D Modeling Services
						</span>
						<span
							className={`serviceComponentOFilterButton ${
								filter === 2 ? "serviceComponentOFilterButtonSelected" : ``
							}`}
							onClick={() => filterButton(2)}>
							Sketchup to CAD conversion service
						</span>
						<span
							className={`serviceComponentOFilterButton ${
								filter === 3 ? "serviceComponentOFilterButtonSelected" : ``
							}`}
							onClick={() => filterButton(3)}>
							Sketchup Layout
						</span>
					</div>
					<SubserviceO
						title={data[filter].title}
						content={data[filter].content}
					/>
				</div>
			</div>
		</>
	);
}
