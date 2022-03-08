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
          }
        })}
      </div>
    </div>
  );
}
