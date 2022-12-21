function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#2C3E50",
    color: "#fff",
    padding: "20px",
    
  };
  return (
    <div style={navStyle}>
      <div>
        <span style={{ fontSize: "25px" }}>React</span>
      </div>
      <div>
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Product</a>
        <span style={{ marginRight: "30px", color: "#fff", fontSize: "20px" }}>
          Guest
        </span>
        <button
          style={{
            marginRight: "50px",
            backgroundColor: "#E74C3C",
            color: "#fff",
            fontSize: "16px",
            letterSpacing: "1px"
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
export default Navbar;
