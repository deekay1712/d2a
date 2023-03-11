import Link from 'next/link';
import projectData from "../public/Assets/data"; 

export default function HomeCards() {
  return (
    <div className="homeCardsComp">
      <h1 className='featuredProjectsHeading'>Featured Projects</h1>
      <div className='homeCardsWrapper'>

        <div className="homeCard">
          <div className="homeCardImgDiv">
            <img src={projectData[0].image[0]} alt="Img" />
          </div>
          <div className='homeCardDesc'>
            <p className='homeCardDescText'>{projectData[28].description}</p>
          </div>
          <Link href={`/portfolio/${projectData[0].id}`}>
            <a className="homeCardButton">
              More <span>&#8594;</span>
            </a>
          </Link>
        </div>
        
        <div className="homeCard">
          <div className="homeCardImgDiv">
            <img src={projectData[28].image[0]} alt="Img" />
          </div>
          <div className='homeCardDesc'>
            <p className='homeCardDescText'>{projectData[28].description}</p>
          </div>
          <Link href={`/portfolio/${projectData[28].id}`}>
            <a className="homeCardButton">
              More <span>&#8594;</span>
            </a>
          </Link>
        </div>

        <div className="homeCard">
          <div className="homeCardImgDiv">
            <img src={projectData[34].image[0]} alt="Img" />
          </div>
          <div className='homeCardDesc'>
            <p className='homeCardDescText'>{projectData[34].description}</p>
          </div>
          <Link href={`/portfolio/${projectData[34].id}`}>
            <a className="homeCardButton">
              More <span>&#8594;</span>
            </a>
          </Link>
        </div>

      </div>
    </div>
  )
}
// call ki jagah whatsapp check karo
