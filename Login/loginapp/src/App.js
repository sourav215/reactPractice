import logo from "./logo.svg";
import "./App.css";
import { Button } from "@chakra-ui/react";
import Login from "./Components/Login/Login";
import AllRoutes from "./Components/Routes/AllRoutes";
import ErrorPage from "./Components/Login/ErrorPage";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <AllRoutes /> */}
      <ErrorPage />
    </div>
  );
}

export default App;
