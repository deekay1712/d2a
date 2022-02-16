import CarouselProject from "../Components/CarouselProject";

export default function ProjectDesc({ projectObj }) {
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
