import Carousel from 'react-bootstrap/Carousel';

export default function CarouselHome(props) {
  return (
    <div>
      <Carousel>
        {props.homeCarouselData.map((item, index) => {
          return (<Carousel.Item interval={1500} key={index}>
            <img className="d-block w-100 carouselImage" src={item.img} alt="One"/>
            <Carousel.Caption>
              <h3>{item.label}</h3>
              <p>{item.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>)
        })}
      </Carousel>
    </div>
  );
}
