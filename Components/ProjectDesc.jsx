import projectData from "../public/Assets/data";
import CarouselProject from "../Components/CarouselProject";

export default function ProjectDesc(prop) {
    var id = prop.id;
    const projectObj = projectData.find(item => item.id === id);
    return (
    <div className="projectDescWrapper">
        <div className="projectDescCarousel">
            <CarouselProject carouselData={projectObj} /> 
        </div>
        <div className="projectDesc">
            <div className="projectDescHead">
                <p>{projectObj.name}</p>
                <p>{projectObj.address}</p>
            </div>
            <div className="projectDescText">
                <p>{projectObj.description}</p>
            </div>
        </div>
    </div>
    );
}
