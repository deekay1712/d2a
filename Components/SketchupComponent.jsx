import { useState} from "react";
import OutsourcingSubservices from "./outsourcingSubservices";
export default function SketchupComponent() {
  const [filter, setFilter] = useState(1);
  const filterButton = (props) =>{
    setFilter(props);
  }
  const data = {
    1: {
      title: "Sketchup 3D Modeling Services",
      content: "Our team of highly trained engineers, architects, drafters, and other specialists provides high-quality SketchUp modelling services that meet the needs of your project. Furthermore, we are equipped with the most recent technology as well as industry-specific knowledge, which allows us to provide efficient and precise services.",
      image: "sketchup-1.jpg"
    },
    2: {
      title: "CAD to Sketchup conversion service",
      content: "If you have CAD designs that you want to convert into SketchUp designs, our services can help you. You can have your designs converted into editable SketchUp design format using our CAD services, necessary infrastructure, and our team of professionals.",
      image: "sketchup-1.jpg"
    },
    3: {
      title: "Sketchup Layout",
      content: "Sketch Layout help you to present your floor plans and elevations to a specific scale, your SketchUp 3D model into 2D space with LayOut. Annotate, document, and communicate clearly so you can move your project forward.",
      image: "sketchup-1.jpg"
    }
  }
  return (
    <div className="outsourcingServiceComponentWrapper">
        <div className="outsourcingServiceComponentHeader2">
            <h1 className="outsourcingServiceComponentHeaderTitle">Sketchup</h1>
        </div>
        <div className="outsourcingServiceComponentContent">
            <p className="outsourcingServiceComponentContentText">D2A is a team of professional architects who have worked with countless clients, we offer a variety of SketchUp services, among other architectural solutions, to meet your designing requirements.</p>
            <div className="outsourcingServiceFilter">
              <span  className={`outsourcingServiceFilterButton ${filter===1? 'outsourcingServiceFilterButtonSelected':``}`} onClick={()=>filterButton(1)}>Sketchup 3D Modeling Services</span>
              <span  className={`outsourcingServiceFilterButton ${filter===2? 'outsourcingServiceFilterButtonSelected':``}`} onClick={()=>filterButton(2)}>Sketchup to CAD conversion service</span>
              <span  className={`outsourcingServiceFilterButton ${filter===3? 'outsourcingServiceFilterButtonSelected':``}`} onClick={()=>filterButton(3)}>Sketchup Layout</span>
            </div>
          <OutsourcingSubservices title={data[filter].title} content={data[filter].content} image={data[filter].image}/>
        </div>
    </div>
  );
}