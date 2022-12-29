import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";

function AllRoutes() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        {/* <Route path={"/"} element={} /> */}
      </Routes>
    </div>
  );
}
export default AllRoutes;
