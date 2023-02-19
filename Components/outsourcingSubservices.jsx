export default function OutsourcingSubservices({title, content, image}) {
    return(
        <div className="outsourcingServiceComponentSubserviceWrapper">
            <div className="outsourcingServiceComponentSubserviceContent">
                <h3 className="outsourcingServiceComponentContentHeading">{title}</h3>
                <p className="outsourcingServiceComponentContentText">{content}</p>
            </div>
            <div className="outsourcingServiceComponentSubserviceSeparator">
                
            </div>
            <div className="outsourcingServiceComponentSubserviceImage">
                <img src={`/Assets/OutsourcingServices/${image}`} alt="outsourcing service" />
            </div>
        </div>
    )
}