import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "../Login/Login";
import PrivateRoute from "../Login/PrivateRoute";
import Home from "./Home";
import Policy from "./Policy";
import ErrorPage from "../Login/ErrorPage";
function AllRoutes() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const userData = JSON.parse(sessionStorage.getItem("loggedInUserInfo"));
  //   console.log(userData);
  //   if (userData) {
  //     // dispatch(loginThunkAction);
  //     loginAction(userData, dispatch);
  //   }
  // }, []);

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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default AllRoutes;
