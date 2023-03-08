import ProjectGallery from "../Components/ProjectGallery";
import { useState} from "react";
export default function ProjectGalleryFilter() {
  const [filter, setFilter] = useState("All");
  const filterButton = (props) =>{
    setFilter(props);
  }
  
  return (
    <>
    <div className="filterButtonWrapper">
        <span  className={`filterButton ${filter==`All`? 'filterButtonSelected':``}`} onClick={()=>filterButton("All")}>All Projects</span>
        <span className={`filterButton ${filter==`Architecture`? 'filterButtonSelected':``}`} onClick={()=>filterButton("Architecture")}>Architecture</span>
        <span className={`filterButton ${filter==`Interior`? 'filterButtonSelected':``}`} onClick={()=>filterButton("Interior")}>Interior</span>
        <span className={`filterButton ${filter==`Landscape`? 'filterButtonSelected':``}`} onClick={()=>filterButton("Landscape")}>Landscape</span>
    </div>
    <ProjectGallery filter={filter}/>
    </>
  )
}
