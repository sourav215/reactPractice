import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PrivateRoute from "../Login/PrivateRoute";
import { loginThunkAction } from "../Redux/Login/loginAction";
import Home from "./Home";
import Policy from "./Policy";
function AllRoutes() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loginThunkAction);
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <ChakraProvider>
              <Login />
            </ChakraProvider>
          }
        />
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
