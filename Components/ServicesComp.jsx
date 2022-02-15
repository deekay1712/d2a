export default function ServicesComp() {
  return (
    <div className="servicesCompWrapper">
        <div className="serviceBanner">
          <div className="serviceBannerContent">
            <p>Services</p>
            <span>&#8595;</span>
          </div>
        </div>
        <div className="servicesComp">
          <div className="serviceL">
            <div className="serviceImgL">
              <img src="/Assets/service1.jpg" alt="" />
            </div>
            <div className="servicePartitionDiv"></div>
            <div className="serviceText">
              <p className="serviceTextHeadingL">Architecture</p>
              <p className="serviceTextContentL">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nihil eum nisi! Magnam qui cum nesciunt ut necessitatibus tempora facere quis. Ut labore error et recusandae aut autem, quia id ea non itaque repellat, accusantium adipisci unde ad vero quidem omnis, nihil commodi nulla beatae suscipit? Reprehenderit fugiat similique saepe!</p>
            </div>
          </div>
          <div className="serviceR">
            <div className="serviceText">
              <p className="serviceTextHeadingR">Interior Designing</p>
              <p className="serviceTextContentR">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nihil eum nisi! Magnam qui cum nesciunt ut necessitatibus tempora facere quis. Ut labore error et recusandae aut autem, quia id ea non itaque repellat, accusantium adipisci unde ad vero quidem omnis, nihil commodi nulla beatae suscipit? Reprehenderit fugiat similique saepe!</p>
            </div>
            <div className="servicePartitionDiv"></div>
            <div className="serviceImgR">
              <img src="/Assets/service2.JPG" alt="" />
            </div>
          </div>
          <div className="serviceL">
            <div className="serviceImgL">
              <img src="/Assets/service3.jpeg" alt="" />
            </div>
            <div className="servicePartitionDiv"></div>
            <div className="serviceText">
              <p className="serviceTextHeadingL">Turnkey Projects</p>
              <p className="serviceTextContentL">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nihil eum nisi! Magnam qui cum nesciunt ut necessitatibus tempora facere quis. Ut labore error et recusandae aut autem, quia id ea non itaque repellat, accusantium adipisci unde ad vero quidem omnis, nihil commodi nulla beatae suscipit? Reprehenderit fugiat similique saepe!</p>
            </div>
          </div>
        </div>
    </div>
  );
}
