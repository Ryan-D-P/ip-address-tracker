import "./Search.css"
import iconArrow from "./images/icon-arrow.svg";
import { useState } from "react";

const Search = ({ position, setPosition }) => {
    // Manage the IP of user input
    const [ip, setIp] = useState(``);

    // Get location and ISP from IP using GeoIP API
    const getIpInfo = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_JTnelcFGhhHGGnIZYOb2BtV0O6hJg&ipAddress=${ip}`);
        const ipData = await response.json();

        setPosition([ipData.location.lat, ipData.location.lng]);
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