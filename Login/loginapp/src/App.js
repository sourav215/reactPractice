import logo from "./logo.svg";
import "./App.css";
import { Button } from "@chakra-ui/react";
import Login from "./Components/Login/Login";
import AllRoutes from "./Components/Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <AllRoutes />
    </div>
  );
}

export default App;
