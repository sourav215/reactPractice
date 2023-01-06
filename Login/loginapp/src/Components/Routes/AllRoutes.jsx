import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Home from "./Home";
import Policy from "./Policy";
function AllRoutes() {
  return (
    <div>        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/policy" element={<Policy/>}/>
      </Routes>
    </div>
  );
}
export default AllRoutes;
