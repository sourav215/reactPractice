import nv from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={nv.navbar}>
      <div>
        <span>React</span>
      </div>
      <div >
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
        <a href="/todo">Todo</a>
        <a href="/products">Products</a>
        <a href="/counter">Counter</a>
      </div>
    </div>
  );
}
export default Navbar;
