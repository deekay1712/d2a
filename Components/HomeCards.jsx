import Link from 'next/link';
import projectData from "../public/Assets/data"; 

export default function HomeCards() {
  return (
    <div className="homeCardsComp">
      <h1 className='featuredProjectsHeading'>Featured Projects</h1>
      <div className='homeCardsWrapper'>

        <div className="homeCard">
          <div className="homeCardImgDiv">
            <img src={projectData[8].image[0]} alt="Img" />
          </div>
          <div className='homeCardDesc'>
            <p className='homeCardDescText'>{projectData[8].description}</p>
          </div>
          <Link href={`/portfolio/${projectData[8].id}`}>
            <a className="homeCardButton">
              More <span>&#8594;</span>
            </a>
          </Link>
        </div>
        
        <div className="homeCard">
          <div className="homeCardImgDiv">
            <img src={projectData[9].image[0]} alt="Img" />
          </div>
          <div className='homeCardDesc'>
            <p className='homeCardDescText'>{projectData[9].description}</p>
          </div>
          <Link href={`/portfolio/${projectData[9].id}`}>
            <a className="homeCardButton">
              More <span>&#8594;</span>
            </a>
          </Link>
        </div>

        <div className="homeCard">
          <div className="homeCardImgDiv">
            <img src={projectData[15].image[0]} alt="Img" />
          </div>
          <div className='homeCardDesc'>
            <p className='homeCardDescText'>{projectData[15].description}</p>
          </div>
          <Link href={`/portfolio/${projectData[15].id}`}>
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
