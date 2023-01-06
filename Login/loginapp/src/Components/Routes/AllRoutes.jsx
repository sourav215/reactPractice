import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import PrivateRoute from "../Login/PrivateRoute";
import Home from "./Home";
import Policy from "./Policy";
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/policy"
          element={
            <PrivateRoute>
              <Policy />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}
export default AllRoutes;
