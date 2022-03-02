import Search from "./Search";
import Info from "./Info";
import Map from "./Map";
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
        <Map />
      </main>
    </div>
  );
}

export default App;
