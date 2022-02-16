import Link from 'next/link';
import projectData from "../public/Assets/data"; 

export default function ProjectGallery() {
  return (
    <div className="projectGalleryWrapper">
      <div className="projectHeading">
        <h1>Projects</h1>
      </div>
      <div className="projectCards">
        {projectData.map((item, index) => {
          return (
            <Link key={index} href={`/portfolio/${item.id}`} passHref>
              <div key={index} className="projectCard">
                <div className="projectCardImage">
                  <img src={item.image[0]} alt={item.name}/>
                  <Link href={`/portfolio/${item.id}`} passHref>
                    <div className="projectCardLabel">
                      <p className="projectCardName">{item.name}</p>
                      <p className="projectCardAddress">{item.address}</p>
                    </div>
                  </Link>
                </div>
                <div className="projectCardLabelMobile">
                  <p className="projectCardName">{item.name}</p>
                  <p className="projectCardAddress">{item.address}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}
