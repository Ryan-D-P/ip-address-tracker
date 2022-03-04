import "./Search.css"
import iconArrow from "./images/icon-arrow.svg";

const Search = ({ setPosition, ip, setIp, setLocation, setTimezone, setIsp, isBadInput, setIsBadInput }) => {

    // Get location and ISP from IP using GeoIP API
    const getIpInfo = async (e) => {
        e.preventDefault();

        // Fetch data using the user IP input as a query parameter
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_JTnelcFGhhHGGnIZYOb2BtV0O6hJg&ipAddress=${ip}`);
        if (!response.ok) {
            setIsBadInput(true);
            return;
        }
        const ipData = await response.json();

        if (isBadInput) setIsBadInput(false);

        // Update MapContainer
        setPosition([ipData.location.lat, ipData.location.lng]);

        // Update Info component state
        setLocation(`${ipData.location.city}, ${ipData.location.region}, ${ipData.location.postalCode}`);
        setTimezone(`UTC ${ipData.location.timezone}`);
        setIsp(ipData.isp);
    };

    return (
        <div className="Search">
            <form id="ip-form" onSubmit={ (e) => getIpInfo(e) }>
                <div className="search-input">
                        <input
                            type="text"
                            name="ip"
                            id="ip"
                            placeholder="Search for any IP address or domain"
                            value={ ip }
                            onChange={ (e) => setIp(e.target.value) }
                        />
                </div>
                <div className="search-button">
                    <button form="ip-form"><img src={ iconArrow } alt="iconArrow" /></button>
                </div>
            </form>
        </div>
    );
}

export default Search;