import { Route, Routes } from "react-router-dom";
import Input from "./Input";
import Home from "./Home";
import Navbar from "./Navbar";

function AllRoutes() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/redux"} element={<Input/>} />
      </Routes>
    </div>
  );
}
export default AllRoutes;
