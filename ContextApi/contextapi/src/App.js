import logo from "./logo.svg";
import "./App.css";
import A from "./Components/NestedChild/A";
import Auth from "./Components/RegUser/Auth";

function App() {
  return (
    <div className="App">
      {/* <A /> */}
      <Auth />
    </div>
  );
}

export default App;
