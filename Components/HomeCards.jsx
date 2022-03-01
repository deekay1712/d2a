import Link from 'next/link';
import projectData from "../public/Assets/data"; 

export default function HomeCards() {
  return (
    <div className="homeCardsComp">
      <h1 className='featuredProjectsHeading'>Featured Projects</h1>
      <div className='homeCardsWrapper'>

        <div className="homeCard">
          <div className="homeCardImgDiv">
            <img src={projectData[6].image[0]} alt="Img" />
          </div>
          <div className='homeCardDesc'>
            <p className='homeCardDescText'>{projectData[6].description}</p>
          </div>
          <Link href={`/portfolio/${projectData[6].id}`}>
            <a className="homeCardButton">
              More <span>&#8594;</span>
            </a>
          </Link>
        </div>
        
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
            <img src={projectData[10].image[0]} alt="Img" />
          </div>
          <div className='homeCardDesc'>
            <p className='homeCardDescText'>{projectData[10].description}</p>
          </div>
          <Link href={`/portfolio/${projectData[10].id}`}>
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
