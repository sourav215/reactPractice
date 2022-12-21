
import "./App.css";
import A from "./Components/NestedChild/A";
import Auth from "./Components/RegUser/Auth";
import Navbar from "./Components/RegUser/Navbar";

function App() {
  return (
    <div className="App">
      {/* <A /> */}
      <Navbar />
      <Auth />
    </div>
  );
}

export default App;
