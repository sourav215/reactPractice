import { Link } from "react-router-dom";

function Navbar() {
  const fnLogout = () => {
    console.log("ljdf");
  };
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#2C3E50",
    color: "#fff",
    padding: "20px",
  };
  const astyle = {
    color: "#fff",
    textDecoration: "none",
    marginRight: "50px",
    // textAlign: "right",
  };
  return (
    <div style={navStyle}>
      <div>
        <span style={{ fontSize: "25px" }}>React</span>
      </div>
      <div>
        <Link to={"/"} style={astyle}>
          Home
        </Link>
        <Link to={"/redux"} style={astyle}>
          Redux
        </Link>
        
        <a href="#" style={astyle}>
          Product
        </a>

        {/* <span style={{ marginRight: "30px", color: "#fff", fontSize: "20px" }}>
          {userDetails.user}
        </span> */}
        <button
          style={{
            marginRight: "50px",
            backgroundColor: "#EC7063",
            color: "#fff",
            fontSize: "16px",
            padding: "5px 10px",
            letterSpacing: "1px",
          }}
          onClick={() => {
            fnLogout();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
export default Navbar;
