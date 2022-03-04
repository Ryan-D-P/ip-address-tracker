import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Search from "./Search";
import BadInputError from "./BadInputError";
import Info from "./Info";
import ChangeView from "./ChangeView"
import patternBg from "./images/pattern-bg.png";
import { useState } from "react";

function App() {
  // Manage position of the MapContainer ([lat, lng])
  const [position, setPosition] = useState([]);

  // Manage the state of the Info component
  const [ip, setIp] = useState(``);
  const [location, setLocation] = useState(``);
  const [timezone, setTimezone] = useState(``);
  const [isp, setIsp] = useState(``);

  // Render error message if bad/invalid input is given as an IP
  const [isBadInput, setIsBadInput] = useState(false);

  return (
    <div className="App">
      <header className="header-content">
        <img src={ patternBg } alt="pattern-bg" />
        <h1>IP Address Tracker</h1>
        <Search
          setPosition={ setPosition }
          ip={ ip }
          setIp={ setIp }
          setLocation={ setLocation }
          setTimezone={ setTimezone }
          setIsp={ setIsp }
          isBadInput={ isBadInput }
          setIsBadInput={ setIsBadInput }
        />

        { isBadInput ? <BadInputError /> : null }

      </header>
      <main className="main-content">
        <Info
          ip={ ip }
          location={ location }
          timezone={ timezone }
          isp={ isp }
        />

        {
          position.length === 2 ?
            (<MapContainer id="map" center={ position } zoom={ 13 }>
              <ChangeView center={ position } zoom={ 13 } />
              <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={ position }>
                <Popup>
                  <p>Location of IP address `{ ip }`</p>
                </Popup>
              </Marker>
            </MapContainer>) 
            : null
        }

      </main>
    </div>
  );
}

export default App;
