import { useState} from "react";
import SubserviceO from "./SubserviceO";
export default function AutoCADComponent() {
  const [filter, setFilter] = useState(1);
  const filterButton = (props) =>{
    setFilter(props);
  }
  const data = {
    1: {
      title: "Shop Drawings",
      content: "D2A Atelier has an expert team for CAD drafting and drawing services, with each team member bringing a unique skill set to the drawings, with a focus on error-free shop drawings. \nWe provide shop drawing services to builders, retailers, interior designers, architects, subcontractors, and general contractors for all sorts of projects such as residential, commercial, private, and government contracts including new projects, remodel, and reconstruction.",
      images: [
        {
          img: "/Assets/OutsourcingServices/auto-cad-1-1.jpg" ,
          label: ``,
          caption: ``,
        },
        {
          img: "/Assets/OutsourcingServices/auto-cad-1-2.jpg" ,
          label: ``,
          caption: ``,
        },
      ]

    },
    2: {
      title: "Millwork",
      content: "D2A Atelier's millwork drawing teams provide customers with architectural millwork, custom casework drawings, and cabinet drawings. D2A Atelier constantly completes projects on schedule and with great precision, which helps you save money. For plans, elevations, sections, and details, D2A Atelier adheres to your drafting standards and formatting needs. \nD2A Atelier has created ideal processes for designers, architects, construction contractors, and woodworkers. Using cutting-edge software and technologies, the team collaborates with you to create drawing templates for all of your architectural millwork and woodwork. D2A provides a full spectrum of drafting services, from initial take-offs to final red-line copy edits, giving you more time to focus on your main business.",
      images: [
        {
          img: "/Assets/OutsourcingServices/auto-cad-2-1.jpg" ,
          label: ``,
          caption: ``,
        },
        {
          img: "/Assets/OutsourcingServices/auto-cad-2-2.jpg" ,
          label: ``,
          caption: ``,
        },
        {
          img: "/Assets/OutsourcingServices/auto-cad-2-3.jpg" ,
          label: ``,
          caption: ``,
        },
        {
          img: "/Assets/OutsourcingServices/auto-cad-2-4.jpg" ,
          label: ``,
          caption: ``,
        },
        {
          img: "/Assets/OutsourcingServices/auto-cad-2-5.jpg" ,
          label: ``,
          caption: ``,
        },
        {
          img: "/Assets/OutsourcingServices/auto-cad-2-6.jpg" ,
          label: ``,
          caption: ``,
        },
        {
          img: "/Assets/OutsourcingServices/auto-cad-2-7.jpg" ,
          label: ``,
          caption: ``,
        }
      ]
    },
    3: {
      title: "As Built Services",
      content: "Once a project is done, As-built Modelling Services are developed for documentation purposes. These 2D Drawings represent any on-site revisions or adjustments. Our As-Built drawings contain detailed information about the architectural, structural, and MEP components used in the structure. We guarantee that these drawings are plotted in accordance with industry and building standards and include detailed specifications such as noting the position, name, purpose, shape, size, and so on of all building parts. \nSurveys, maintenance, and assessment of existing buildings are carried out using As-Built Drafting Services. They also help with remodelling and restoration. They can be used to create or restore historical, residential, commercial, or industrial structures.",
      images: [
        {
          img: "/Assets/OutsourcingServices/auto-cad-3-1.jpg" ,
          label: ``,
          caption: ``,
        },
        {
          img: "/Assets/OutsourcingServices/auto-cad-3-2.jpg" ,
          label: ``,
          caption: ``,
        },
        {
          img: "/Assets/OutsourcingServices/auto-cad-3-3.jpg" ,
          label: ``,
          caption: ``,
        },
        {
          img: "/Assets/OutsourcingServices/auto-cad-3-4.jpg" ,
          label: ``,
          caption: ``,
        },
        {
          img: "/Assets/OutsourcingServices/auto-cad-3-5.jpg" ,
          label: ``,
          caption: ``,
        }
      ]
    },
    4: {
      title: "Interior Drafting & Design Development Process (DDP)",
      content: "Interior drawings must constantly be more focused with solid software abilities. It is primarily required an experienced team with understanding of precise coordination and a creative attitude. Interior drawings are always created step by step, following the design development process. \nThe D2A Atelier team has knowledge in Hospitality, Restaurant, Residence, and Retail interior drawings and design development processes, and they are aware of the unique locations where drawings must be more focused and accurate.",
      images: [
        {
          img: "/Assets/OutsourcingServices/auto-cad-4-1.jpg" ,
          label: ``,
          caption: ``,
        },
        {
          img: "/Assets/OutsourcingServices/auto-cad-4-2.jpg" ,
          label: ``,
          caption: ``,
        },
        {
          img: "/Assets/OutsourcingServices/auto-cad-4-3.jpg" ,
          label: ``,
          caption: ``,
        },
        {
          img: "/Assets/OutsourcingServices/auto-cad-4-4.jpg" ,
          label: ``,
          caption: ``,
        },
        {
          img: "/Assets/OutsourcingServices/auto-cad-4-5.jpg" ,
          label: ``,
          caption: ``,
        },
        {
          img: "/Assets/OutsourcingServices/auto-cad-4-6.jpg" ,
          label: ``,
          caption: ``,
        },
      ]
    }
  }
  return (
    <div className="serviceComponentOWrapper">
        <div className="serviceComponentOHeader1">
            <h1 className="serviceComponentOHeaderTitle">AutoCAD Services</h1>
        </div>
        <div className="serviceComponentOContent">
            <p className="serviceComponentOContentText">D2A Atelier is a stablish firm with a skilled team of drafts people with a wide range of expertise in AutoCAD drafting. D2A Atelier AutoCAD service users are associated with the Architectural, Interior Designing, and Construction industries.</p>
            <div className="serviceComponentOFilter">
                <span  className={`serviceComponentOFilterButton ${filter===1? 'serviceComponentOFilterButtonSelected':``}`} onClick={()=>filterButton(1)}>Shop Drawings</span>
                <span className={`serviceComponentOFilterButton ${filter===2? 'serviceComponentOFilterButtonSelected':``}`} onClick={()=>filterButton(2)}>Millwork</span>
                <span className={`serviceComponentOFilterButton ${filter===3? 'serviceComponentOFilterButtonSelected':``}`} onClick={()=>filterButton(3)}>As Built Services</span>
                <span className={`serviceComponentOFilterButton ${filter===4? 'serviceComponentOFilterButtonSelected':``}`} onClick={()=>filterButton(4)}>Interior Drafting & Design Development Process (DDP)</span>
            </div>
          <SubserviceO title={data[filter].title} content={data[filter].content} images={data[filter].images}/>
        </div>
    </div>
  );
}