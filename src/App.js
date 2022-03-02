import Search from "./Search";
import Info from "./Info";
import Map from "./Map";

function App() {
  return (
    <div className="App">
      <header className="header-content">
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
