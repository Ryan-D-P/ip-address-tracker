import "./Info.css"

const Info = () => {
    return (
        <div className="Info">
            <div className="ip-address">
                <p>IP ADDRESS</p>
                <h2>192.212.174.101</h2>
            </div>
            <div className="location">
                <p>LOCATION</p>
                <h2>Brooklyn, NY 10001</h2>
            </div>
            <div className="timezone">
                <p>TIMEZONE</p>
                <h2>UTC - 05:00</h2>
            </div>
            <div className="ISP">
                <p>ISP</p>
                <h2>SpaceX Starlink</h2>
            </div>
        </div>
    );
}

export default Info;