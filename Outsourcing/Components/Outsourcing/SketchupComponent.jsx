import { useState } from "react";
import SubserviceO from "./SubserviceO";
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
		<div className='serviceComponentOWrapper'>
			<div className='serviceComponentOHeader2'>
				<h1 className='serviceComponentOHeaderTitle'>Sketchup</h1>
			</div>
			<div className='serviceComponentOContent'>
				<p className='serviceComponentOContentText'>
					D2A is a team of professional architects who have worked with
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
	);
}
