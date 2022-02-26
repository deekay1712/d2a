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
        <span className={`filterButton ${filter==`Residential`? 'filterButtonSelected':``}`} onClick={()=>filterButton("Residential")}>Residential</span>
        <span className={`filterButton ${filter==`Turnkey`? 'filterButtonSelected':``}`} onClick={()=>filterButton("Turnkey")}>Turnkey</span>
    </div>
    <ProjectGallery filter={filter}/>
    </>
  )
}
