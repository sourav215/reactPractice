import { useDispatch } from "react-redux";
import { logoutAction } from "../Redux/Login/loginAction";
function Policy() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    logoutAction(dispatch);
  };

  return (
    <div>
      <h1>Policy Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
export default Policy;
