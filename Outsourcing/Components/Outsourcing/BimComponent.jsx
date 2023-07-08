import { useState } from "react";
import SubserviceO from "./SubserviceO";
export default function BimComponent() {
	const [filter, setFilter] = useState(1);
	const filterButton = (props) => {
		setFilter(props);
	};

	const data = {
		1: {
			title: "PDF to BIM",
			content:
				"For a long time, we have been building Revit models from PDF drawings. You may provide us drawings and 2D models in PDF format, and we will turn them into a Revit BIM model. We can create a 3D Revit model that includes elevations, sections, 2D house plans, and floor layouts. The Revit modelling is built quickly and without any changes to the existing plan.",
		},
		2: {
			title: "CAD to BIM",
			content:
				"CAD to Revit modelling is another service that has lately gained popularity due to the clear advantages of Revit over AutoCAD drawings. Send us your CAD files, and we&#39;ll create an outstanding BIM Revit model for you. Our specialists would meticulously examine the CAD designs and determine the LOD for each architectural part. We choose the templates using the Revit architectural library and then convert the CAD files into Revit models.",
		},
		3: {
			title: "Revit family creation",
			content:
				"Revit platform is used to create parametric families of architectural or interior equipment for our bespoke Revit family production. If a family type is modified and reflected to throughout the project, for example, the window type dimensions change, all windows in the same family are updated throughout the project. The use of intelligent families of this type can aid in the management and maintenance of the project's building information model. Our Revit professionals create unique architectural libraries for architects, engineers, and manufacturers. These BIM families can be used and modified as needed for the project. \nD2A Atelier provides full-service Revit family development for residential, commercial, healthcare, educational, and industrial projects. Our Revit family designer provides high-quality services in a timely manner.",
		},
		4: {
			title: "Scan to BIM",
			content:
				"We specialise in transforming point cloud data into precise BIM models that may be utilised for existing building and infrastructure reconstruction, restoration, retrofit, and refurbishment. Our Point Cloud to BIM solutions may also be used to build as-built models or for facility operation and management.",
		},
	};
	return (
		<div className='serviceComponentOWrapper'>
			<div className='serviceComponentOHeader3'>
				<h1 className='serviceComponentOHeaderTitle'>BIM</h1>
			</div>
			<div className='serviceComponentOContent'>
				<p className='serviceComponentOContentText'>
					Whether you are an architect, engineer, builder, contractor, or owner,
					D2A Atelier can provide expert services to help you overcome any
					technological, economic, personnel, or infrastructure issues you may
					face. The services include Revit design, drawing, and modelling.
				</p>
				<p className='serviceComponentOContentText'>
					D2A Atelier professionals have vast knowledge and employ cutting-edge
					technology to meet Revit needs in a variety of sectors. Our Revit
					engineers and modellers will effectively accomplish your requests,
					whether they are residential, commercial, retail, corporate,
					educational, institutional, healthcare, or hospitality.
				</p>
				<div className='serviceComponentOFilter'>
					<span
						className={`serviceComponentOFilterButton ${
							filter === 1 ? "serviceComponentOFilterButtonSelected" : ``
						}`}
						onClick={() => filterButton(1)}>
						PDF to BIM
					</span>
					<span
						className={`serviceComponentOFilterButton ${
							filter === 2 ? "serviceComponentOFilterButtonSelected" : ``
						}`}
						onClick={() => filterButton(2)}>
						CAD to BIM
					</span>
					<span
						className={`serviceComponentOFilterButton ${
							filter === 3 ? "serviceComponentOFilterButtonSelected" : ``
						}`}
						onClick={() => filterButton(3)}>
						Revit family creation
					</span>
					<span
						className={`serviceComponentOFilterButton ${
							filter === 4 ? "serviceComponentOFilterButtonSelected" : ``
						}`}
						onClick={() => filterButton(4)}>
						Scan to BIM
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
