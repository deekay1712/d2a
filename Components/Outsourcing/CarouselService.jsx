import Carousel from 'react-bootstrap/Carousel';

export default function CarouselService(props) {
  return (
    <div>
      <Carousel pause={false} controls={false} indicators={false}> 
        {props.images.map((item, index) => {
          return (<Carousel.Item interval={1500} key={index}>
            <img className="d-block carouselImage" src={item.img} alt="One"/>
          </Carousel.Item>)
        })}
      </Carousel>
    </div>
  );
}
