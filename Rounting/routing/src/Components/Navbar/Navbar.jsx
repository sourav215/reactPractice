import nv from "./Navbar.module.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className={nv.navbar}>
      <div>
        <span>React</span>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/products">Products</Link>
        <Link to="/counter">Counter</Link>
      </div>
    </div>
  );
}
export default Navbar;
