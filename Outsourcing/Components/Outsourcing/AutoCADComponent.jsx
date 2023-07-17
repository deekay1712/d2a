import { useState } from "react";
import SubserviceO from "./SubserviceO";
export default function AutoCADComponent() {
	const [filter, setFilter] = useState(1);
	const filterButton = (props) => {
		setFilter(props);
	};
	const data = {
		1: {
			title: "Shop Drawings",
			content:
				"Shop drawings are detailed, scaled drawings that are created by professionals with expertise in the relevant field to illustrate the construction or fabrication of a particular component or system. They provide specific information about the dimensions, materials, assembly, and installation details necessary for the construction or fabrication process. Shop drawings can cover a wide range of construction elements, such as Tile, Stone, cabinetry, millwork, and more.",
		},
		2: {
			title: "Millwork",
			content:
				"D2A Atelier is an organization that specializes in offering a broad range of millwork services, including architectural woodworking, casework, furniture, commercial cabinets, shop fittings, and more. Our technical team is proficient in millwork drafting, CAD applications, and AWI architectural woodworking standards \n\nThe ideal workflow has been established by D2A Atelier for architects, designers, builders, and woodworkers. The team collaborates closely with you to create drawing templates for all of your architectural millwork and woodwork while utilizing the most recent tools and technologies. \nFrom first take-offs to final red-line copy corrections, D2A Atelier offers a full spectrum of drawing solutions, giving you more time for business management and planning. \n\nD2A Atelier staff committed to provide accurate and on time works with clients to meet their needs for millwork fabrications. D2A Atelier consistently completes projects on schedule and with a high degree of accuracy, assisting in cutting costs. \n\nFor the plans, elevations, sections, details, and material & hardware schedules, We complies with your drawing standards and formatting specifications and We can provide a new and fresh standard also as per the requirements. \n\nFor the more information about our services contact us today.",
		},
		3: {
			title: "As Built Services",
			content:
				"Once a project is done, As-built Modelling Services are developed for documentation purposes. These 2D Drawings represent any on-site revisions or adjustments. Our As-Built drawings contain detailed information about the architectural, structural, and MEP components used in the structure. We guarantee that these drawings are plotted in accordance with industry and building standards and include detailed specifications such as noting the position, name, purpose, shape, size, and so on of all building parts. \nSurveys, maintenance, and assessment of existing buildings are carried out using As-Built Drafting Services. They also help with remodelling and restoration. They can be used to create or restore historical, residential, commercial, or industrial structures.",
		},
		4: {
			title: "Interior Drafting & Design Development Process (DDP)",
			content:
				"Interior drawings must constantly be more focused with solid software abilities. It is primarily required an experienced team with understanding of precise coordination and a creative attitude. Interior drawings are always created step by step, following the design development process. \nThe D2A Atelier team has knowledge in Hospitality, Restaurant, Residence, and Retail interior drawings and design development processes, and they are aware of the unique locations where drawings must be more focused and accurate.",
		},
		5: {
			title: "Tile Shop Drawings",
			content:
				"Tile shop drawings typically include information such as tile layouts, dimensions, patterns, grout joints, and any specific installation instructions. They may also include details about transitions, trim pieces, or special considerations for tile installations, such as waterproofing or substrate preparation. \n\nThe purpose of tile shop drawings is to communicate the design intent and installation requirements. These drawings help ensure that the tile work is installed correctly, meets design specifications, and complies with relevant industry standards and best practices.\n\nAt D2A Atelier, we are working on tile shop drawings with our team of experienced engineers, they work on plans, elevations, sections, and details to make error-free installation on site.",
		},
		6: {
			title: "Stone Shop Drawings",
			content:
				"Stone shop drawings are detailed drawings that provide information and instructions including precise dimensions, material specifications, and assembly details for various stone components, such as countertops, cladding panels, staircases, fireplace surrounds, and other architectural elements.\n\nD2A Atelier is working on the stone shop drawings since 2020, The drawings may include plans, elevations, sections, and details as necessary, to accurately depict the design intent.\n\nD2A Atelier incorporates important details such as joint locations, edge profiles, anchoring systems, seam locations, and any special considerations required for the particular stone material being used.",
		},
	};
	return (
		<div className='serviceComponentOWrapper'>
			<div className='serviceComponentOHeader1'>
				<h1 className='serviceComponentOHeaderTitle'>AutoCAD Services</h1>
			</div>
			<div className='serviceComponentOContent'>
				<p className='serviceComponentOContentText'>
					D2A Atelier is a stablish firm with a skilled team of drafts people
					with a wide range of expertise in AutoCAD drafting. D2A Atelier
					AutoCAD service users are associated with the Architectural, Interior
					Designing, and Construction industries.
				</p>
				<div className='serviceComponentOFilter'>
					<span
						className={`serviceComponentOFilterButton ${
							filter === 1 ? "serviceComponentOFilterButtonSelected" : ``
						}`}
						onClick={() => filterButton(1)}>
						Shop Drawings
					</span>
					<span
						className={`serviceComponentOFilterButton ${
							filter === 2 ? "serviceComponentOFilterButtonSelected" : ``
						}`}
						onClick={() => filterButton(2)}>
						Millwork
					</span>
					<span
						className={`serviceComponentOFilterButton ${
							filter === 3 ? "serviceComponentOFilterButtonSelected" : ``
						}`}
						onClick={() => filterButton(3)}>
						As Built Services
					</span>
					<span
						className={`serviceComponentOFilterButton ${
							filter === 4 ? "serviceComponentOFilterButtonSelected" : ``
						}`}
						onClick={() => filterButton(4)}>
						Interior Drafting & Design Development Process (DDP)
					</span>
					<span
						className={`serviceComponentOFilterButton ${
							filter === 5 ? "serviceComponentOFilterButtonSelected" : ``
						}`}
						onClick={() => filterButton(5)}>
						Tile Shop Drawings
					</span>
					<span
						className={`serviceComponentOFilterButton ${
							filter === 6 ? "serviceComponentOFilterButtonSelected" : ``
						}`}
						onClick={() => filterButton(6)}>
						Stone Shop Drawing
					</span>
				</div>
				<SubserviceO
					title={data[filter].title}
					content={data[filter].content}
				/>
			</div>
		</div>
	);
}
