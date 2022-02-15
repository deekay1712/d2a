import Carousel from 'react-bootstrap/Carousel';

export default function CarouselProject(props) {
  return (
  <div className='carouselProjectWrapper'>
      <Carousel>
        {props.carouselData.image.map((item, index) => {
          return (<Carousel.Item interval={1500} key={index}>
            <img className="d-block carouselProjectImage" src={item} alt="One"/>
          </Carousel.Item>)
        })}
      </Carousel>
  </div>
  );
}
