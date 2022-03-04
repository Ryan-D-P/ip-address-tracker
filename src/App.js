import Search from "./Search";
import Info from "./Info";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import patternBg from "./images/pattern-bg.png";
import { useState } from "react";

function App() {
  const [position, setPosition] = useState([]);

  return (
    <div className="App">
      <header className="header-content">
        <img src={ patternBg } alt="pattern-bg" />
        <h1>IP Address Tracker</h1>
        <Search position={ position } setPosition={ setPosition } />
      </header>
      <main className="main-content">
        <Info />

        {
          position.length === 2 ?
            (<MapContainer id="map" center={ position } zoom={13}>
              <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={ position }>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
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
