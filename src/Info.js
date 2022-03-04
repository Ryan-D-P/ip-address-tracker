import "./Info.css"

const Info = ({ ip, location, timezone, isp }) => {
    return (
        <div className="Info">
            <div className="Info-col ip-address">
                <p>IP ADDRESS</p>
                <h2>{ ip }</h2>
            </div>
            <div className="Info-col location">
                <p>LOCATION</p>
                <h2>{ location }</h2>
            </div>
            <div className="Info-col timezone">
                <p>TIMEZONE</p>
                <h2>{ timezone }</h2>
            </div>
            <div className="Info-col ISP">
                <p>ISP</p>
                <h2>{ isp }</h2>
            </div>
        </div>
    );
}

export default Info;