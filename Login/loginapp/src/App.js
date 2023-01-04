import logo from "./logo.svg";
import "./App.css";
import { Button } from "@chakra-ui/react";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
      <Button>Hi all</Button>
      <Login />
    </div>
  );
}

export default App;
