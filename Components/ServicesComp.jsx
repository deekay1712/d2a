export default function ServicesComp() {
  return (
    <div className="servicesCompWrapper">
        <div className="serviceBanner">
          <div className="serviceBannerContent">
            <h1 className="serviceBannerHeading">Services</h1>
            <span>&#8595;</span>
          </div>
        </div>
        <div className="servicesComp">
          <div className="serviceL">
            <div className="serviceImgL">
              <img src="/Assets/service1.jpeg" alt="" />
            </div>
            <div className="servicePartitionDiv"></div>
            <div className="serviceText">
              <h2 className="serviceTextHeadingL">Architecture</h2>
              <p className="serviceTextContentL">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nihil eum nisi! Magnam qui cum nesciunt ut necessitatibus tempora facere quis. Ut labore error et recusandae aut autem, quia id ea non itaque repellat, accusantium adipisci unde ad vero quidem omnis, nihil commodi nulla beatae suscipit? Reprehenderit fugiat similique saepe!</p>
            </div>
          </div>
          <div className="serviceR">
            <div className="serviceText">
              <h2 className="serviceTextHeadingR">Interior Designing</h2>
              <p className="serviceTextContentR">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nihil eum nisi! Magnam qui cum nesciunt ut necessitatibus tempora facere quis. Ut labore error et recusandae aut autem, quia id ea non itaque repellat, accusantium adipisci unde ad vero quidem omnis, nihil commodi nulla beatae suscipit? Reprehenderit fugiat similique saepe!</p>
            </div>
            <div className="servicePartitionDiv"></div>
            <div className="serviceImgR">
              <img src="/Assets/service2.jpeg" alt="" />
            </div>
          </div>
          <div className="serviceL">
            <div className="serviceImgL">
              <img src="/Assets/service3.jpeg" alt="" />
            </div>
            <div className="servicePartitionDiv"></div>
            <div className="serviceText">
              <h2 className="serviceTextHeadingL">Turnkey Projects</h2>
              <p className="serviceTextContentL">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nihil eum nisi! Magnam qui cum nesciunt ut necessitatibus tempora facere quis. Ut labore error et recusandae aut autem, quia id ea non itaque repellat, accusantium adipisci unde ad vero quidem omnis, nihil commodi nulla beatae suscipit? Reprehenderit fugiat similique saepe!</p>
            </div>
          </div>
        </div>
    </div>
  );
}
