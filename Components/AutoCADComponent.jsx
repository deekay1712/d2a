import { useState} from "react";
import OutsourcingSubservices from "./outsourcingSubservices";
export default function AutoCADComponent() {
  const [filter, setFilter] = useState(1);
  const filterButton = (props) =>{
    setFilter(props);
  }
  const data = {
    1: {
      title: "Shop Drawings",
      content: "D2A Atelier has an expert team for CAD drafting and drawing services, with each team member bringing a unique skill set to the drawings, with a focus on error-free shop drawings. \nWe provide shop drawing services to builders, retailers, interior designers, architects, subcontractors, and general contractors for all sorts of projects such as residential, commercial, private, and government contracts including new projects, remodel, and reconstruction.",
      image: "autoCad1.jpg"
    },
    2: {
      title: "Millwork",
      content: "D2A Atelier's millwork drawing teams provide customers with architectural millwork, custom casework drawings, and cabinet drawings. D2A Atelier constantly completes projects on schedule and with great precision, which helps you save money. For plans, elevations, sections, and details, D2A Atelier adheres to your drafting standards and formatting needs. \nD2A Atelier has created ideal processes for designers, architects, construction contractors, and woodworkers. Using cutting-edge software and technologies, the team collaborates with you to create drawing templates for all of your architectural millwork and woodwork. D2A provides a full spectrum of drafting services, from initial take-offs to final red-line copy edits, giving you more time to focus on your main business.",
      image: "autoCad1.jpg"
    },
    3: {
      title: "As Built Services",
      content: "Once a project is done, As-built Modelling Services are developed for documentation purposes. These 2D Drawings represent any on-site revisions or adjustments. Our As-Built drawings contain detailed information about the architectural, structural, and MEP components used in the structure. We guarantee that these drawings are plotted in accordance with industry and building standards and include detailed specifications such as noting the position, name, purpose, shape, size, and so on of all building parts. \nSurveys, maintenance, and assessment of existing buildings are carried out using As-Built Drafting Services. They also help with remodelling and restoration. They can be used to create or restore historical, residential, commercial, or industrial structures.",
      image: "autoCad1.jpg"
    },
    4: {
      title: "Interior Drafting & Design Development Process (DDP)",
      content: "Interior drawings must constantly be more focused with solid software abilities. It is primarily required an experienced team with understanding of precise coordination and a creative attitude. Interior drawings are always created step by step, following the design development process. \nThe D2A Atelier team has knowledge in Hospitality, Restaurant, Residence, and Retail interior drawings and design development processes, and they are aware of the unique locations where drawings must be more focused and accurate.",
      image: "autoCad1.jpg"
    }
  }
  return (
    <div className="outsourcingServiceComponentWrapper">
        <div className="outsourcingServiceComponentHeader1">
            <h1 className="outsourcingServiceComponentHeaderTitle">AutoCAD Services</h1>
        </div>
        <div className="outsourcingServiceComponentContent">
            <p className="outsourcingServiceComponentContentText">D2A Atelier is a stablish firm with a skilled team of drafts people with a wide range of expertise in AutoCAD drafting. D2A Atelier AutoCAD service users are associated with the Architectural, Interior Designing, and Construction industries.</p>
            <div className="outsourcingServiceFilter">
                <span  className={`outsourcingServiceFilterButton ${filter===1? 'outsourcingServiceFilterButtonSelected':``}`} onClick={()=>filterButton(1)}>Shop Drawings</span>
                <span className={`outsourcingServiceFilterButton ${filter===2? 'outsourcingServiceFilterButtonSelected':``}`} onClick={()=>filterButton(2)}>Millwork</span>
                <span className={`outsourcingServiceFilterButton ${filter===3? 'outsourcingServiceFilterButtonSelected':``}`} onClick={()=>filterButton(3)}>As Built Services</span>
                <span className={`outsourcingServiceFilterButton ${filter===4? 'outsourcingServiceFilterButtonSelected':``}`} onClick={()=>filterButton(4)}>Interior Drafting & Design Development Process (DDP)</span>
            </div>
          <OutsourcingSubservices title={data[filter].title} content={data[filter].content} image={data[filter].image}/>
        </div>
    </div>
  );
}