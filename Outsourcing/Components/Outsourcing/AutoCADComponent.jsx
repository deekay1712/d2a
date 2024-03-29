import { useState } from "react";
import SubserviceO from "./SubserviceO";
import Head from "next/head";
export default function AutoCADComponent() {
	const [filter, setFilter] = useState(1);
	const filterButton = (props) => {
		setFilter(props);
	};
	const data = {
		1: {
			title: "Tile Shop Drawings",
			content:
				"Tile shop drawings typically include information such as tile layouts, dimensions, patterns, grout joints, and any specific installation instructions. They may also include details about transitions, trim pieces, or special considerations for tile installations, such as waterproofing or substrate preparation. \n\nThe purpose of tile shop drawings is to communicate the design intent and installation requirements. These drawings help ensure that the tile work is installed correctly, meets design specifications, and complies with relevant industry standards and best practices.\n\nAt Studio Precise, we are working on tile shop drawings with our team of experienced engineers, they work on plans, elevations, sections, and details to make error-free installation on site.",
		},
		2: {
			title: "Stone Shop Drawings",
			content:
				"Stone shop drawings are detailed drawings that provide information and instructions including precise dimensions, material specifications, and assembly details for various stone components, such as countertops, cladding panels, staircases, fireplace surrounds, and other architectural elements.\n\nStudio Precise is working on the stone shop drawings since 2020, The drawings may include plans, elevations, sections, and details as necessary, to accurately depict the design intent.\n\nStudio Precise incorporates important details such as joint locations, edge profiles, anchoring systems, seam locations, and any special considerations required for the particular stone material being used.",
		},
		3: {
			title: "Millwork Shop Drawings",
			content:
				"Studio Precise is an organization that specializes in offering a broad range of millwork services, including architectural woodworking, casework, furniture, commercial cabinets, shop fittings, and more. Our technical team is proficient in millwork drafting, CAD applications, and AWI architectural woodworking standards \n\nThe ideal workflow has been established by Studio Precise for architects, designers, builders, and woodworkers. The team collaborates closely with you to create drawing templates for all of your architectural millwork and woodwork while utilizing the most recent tools and technologies. \nFrom first take-offs to final red-line copy corrections, Studio Precise offers a full spectrum of drawing solutions, giving you more time for business management and planning. \n\nStudio Precise staff committed to provide accurate and on time works with clients to meet their needs for millwork fabrications. Studio Precise consistently completes projects on schedule and with a high degree of accuracy, assisting in cutting costs. \n\nFor the plans, elevations, sections, details, and material & hardware schedules, We complies with your drawing standards and formatting specifications and We can provide a new and fresh standard also as per the requirements. \n\nFor the more information about our services contact us today.",
		},
		4: {
			title: "As Built Services",
			content:
				"Once a project is done, As-built Modelling Services are developed for documentation purposes. These 2D Drawings represent any on-site revisions or adjustments. Our As-Built drawings contain detailed information about the architectural, structural, and MEP components used in the structure. We guarantee that these drawings are plotted in accordance with industry and building standards and include detailed specifications such as noting the position, name, purpose, shape, size, and so on of all building parts. \n\nSurveys, maintenance, and assessment of existing buildings are carried out using As-Built Drafting Services. They also help with remodelling and restoration. They can be used to create or restore historical, residential, commercial, or industrial structures.",
		},
		5: {
			title: "Interior Drafting & Design Development Process (DDP)",
			content:
				"Interior drawings must constantly be more focused with solid software abilities. It is primarily required an experienced team with understanding of precise coordination and a creative attitude. Interior drawings are always created step by step, following the design development process. \n\nThe Studio Precise team has knowledge in Hospitality, Restaurant, Residence, and Retail interior drawings and design development processes, and they are aware of the unique locations where drawings must be more focused and accurate.",
		},
	};
	return (
		<>
			<Head>
				<title>AUTOCAD SERVICES - Studio Precise</title>
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
				<div className='serviceComponentOHeader1'>
					<h1 className='serviceComponentOHeaderTitle'>AutoCAD Services</h1>
				</div>
				<div className='serviceComponentOContent'>
					<p className='serviceComponentOContentText'>
						Studio Precise is a stablish firm with a skilled team of Architects,
						Interior designers, and Drafters with a wide range of expertise in
						AutoCAD drafting. Studio Precise&rsquo;s service users are associated
						with the Architecture, Interior Designing, Construction and
						Woodworking Industries.
					</p>
					<div className='serviceComponentOFilter'>
						<span
							className={`serviceComponentOFilterButton ${
								filter === 1 ? "serviceComponentOFilterButtonSelected" : ``
							}`}
							onClick={() => filterButton(1)}>
							Tile Shop Drawings
						</span>
						<span
							className={`serviceComponentOFilterButton ${
								filter === 2 ? "serviceComponentOFilterButtonSelected" : ``
							}`}
							onClick={() => filterButton(2)}>
							Stone Shop Drawings
						</span>
						<span
							className={`serviceComponentOFilterButton ${
								filter === 3 ? "serviceComponentOFilterButtonSelected" : ``
							}`}
							onClick={() => filterButton(3)}>
							Millwork Shop Drawings
						</span>
						<span
							className={`serviceComponentOFilterButton ${
								filter === 4 ? "serviceComponentOFilterButtonSelected" : ``
							}`}
							onClick={() => filterButton(4)}>
							As Built Services
						</span>
						<span
							className={`serviceComponentOFilterButton ${
								filter === 5 ? "serviceComponentOFilterButtonSelected" : ``
							}`}
							onClick={() => filterButton(5)}>
							Interior Drafting & Design Development Process (DDP)
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
