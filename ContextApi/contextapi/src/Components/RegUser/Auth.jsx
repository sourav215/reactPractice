import Login from "./Login";
import Home from "./Home";
import { useContext } from "react";
import loginContext from "./LGNContext";
function Auth() {
  const userData = useContext(loginContext);
  const {
    userDetails: { user, loginStatus },
  } = userData;
  return <div>{loginStatus ? <Home /> : <Login />}</div>;
}

export default Auth;
