import Search from "./Search";
import Info from "./Info";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import patternBg from "./images/pattern-bg.png";

function App() {
  return (
    <div className="App">
      <header className="header-content">
        <img src={ patternBg } alt="pattern-bg" />
        <h1>IP Address Tracker</h1>
        <Search />
      </header>
      <main className="main-content">
        <Info />
        <MapContainer id="map" center={[51.505, -0.09]} zoom={13}>
          <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </main>
    </div>
  );
}

export default App;
