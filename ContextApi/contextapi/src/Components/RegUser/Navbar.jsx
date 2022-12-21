function Navbar() {
  return (
    <div>
      <div>
        <span style={{ fontSize: "25px" }}>React</span>
      </div>
      <div>
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Product</a>
        <span style={{ marginRight: "30px", color: "green", fontSize: "20px" }}>
          Guest
        </span>
        <button
          style={{
            marginRight: "50px",
            backgroundColor: "#E74C3C",
            color: "#fff",
            fontSize: "20px",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
export default Navbar;
