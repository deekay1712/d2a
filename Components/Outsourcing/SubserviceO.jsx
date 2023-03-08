export default function SubserviceO({title, content, image}) {
    return(
        <div className="subserviceOWrapper">
            <div className="subserviceOContent">
                <h3 className="serviceComponentOContentHeading">{title}</h3>
                <p className="serviceComponentOContentText">{content}</p>
            </div>
            <div className="subserviceOSeparator">
                
            </div>
            <div className="subserviceOImage">
                <img src={`/Assets/OutsourcingServices/${image}`} alt="outsourcing service" />
            </div>
        </div>
    )
}