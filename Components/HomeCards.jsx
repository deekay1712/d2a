import Link from 'next/link';
import projectData from "../public/Assets/data"; 
import Image from 'next/image';

export default function HomeCards() {
  return (
    <div className="homeCardsComp">
      <h1 className='featuredProjectsHeading'>Featured Projects</h1>
      <div className='homeCardsWrapper'>

        <div className="homeCard">
          <div className="homeCardImgDiv">
            <Image objectFit='cover' layout="fill" src={projectData[0].image[0]} alt="Img" />
          </div>
          <div className='homeCardDesc'>
            <p className='homeCardDescText'>{projectData[0].description}</p>
          </div>
          <Link href={`/portfolio/${projectData[0].id}`}>
            <a className="homeCardButton">
              More <span>&#8594;</span>
            </a>
          </Link>
        </div>
        
        <div className="homeCard">
          <div className="homeCardImgDiv">
            <Image objectFit='cover' layout="fill" src={projectData[1].image[0]} alt="Img" />
          </div>
          <div className='homeCardDesc'>
            <p className='homeCardDescText'>{projectData[1].description}</p>
          </div>
          <Link href={`/portfolio/${projectData[1].id}`}>
            <a className="homeCardButton">
              More <span>&#8594;</span>
            </a>
          </Link>
        </div>

        <div className="homeCard">
          <div className="homeCardImgDiv">
            <Image objectFit='cover' layout="fill" src={projectData[2].image[0]} alt="Img" />
          </div>
          <div className='homeCardDesc'>
            <p className='homeCardDescText'>{projectData[2].description}</p>
          </div>
          <Link href={`/portfolio/${projectData[2].id}`}>
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
