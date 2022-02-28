import Link from 'next/link';
import projectData from "../public/Assets/data"; 

export default function ProjectGallery(props) {
  return (
    <div className="projectGalleryWrapper">
      <div className="projectCards">
        {projectData.map((item, index) => {
            if (props.filter === "All" || item.type === props.filter) {
            return (
              <Link key={index} href={`/portfolio/${item.id}`} passHref>
                <div key={index} className="projectCard">
                  <div className="projectCardImage">
                    <img src={item.image[0]} alt={item.name}/>
                    <Link href={`/portfolio/${item.id}`} passHref>
                      <div className="projectCardLabel">
                        <h3 className="projectCardName">{item.name}</h3>
                        <h3 className="projectCardAddress">{item.address}</h3>
                      </div>
                    </Link>
                  </div>
                  <div className="projectCardLabelMobile">
                    <h3 className="projectCardName">{item.name}</h3>
                    <h3 className="projectCardAddress">{item.address}</h3>
                  </div>
                </div>
              </Link>
            )
          }
        })}
      </div>
    </div>
  );
}
