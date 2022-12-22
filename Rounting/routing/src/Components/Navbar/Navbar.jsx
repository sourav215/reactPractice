import nv from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={nv.navbar}>
      <div>
        <span>React</span>
      </div>
      <div >
        <a href="">Home</a>
        <a href="">Profile</a>
        <a href="">Todo</a>
        <a href="">Products</a>
        <a href="">Counter</a>
      </div>
    </div>
  );
}
export default Navbar;
