import { useContext } from "react";
import loginContext from "./LGNContext";

function Navbar() {
  const { userDetails, fnLogout } = useContext(loginContext);

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
        <a href="#" style={astyle}>
          Home
        </a>
        <a href="#" style={astyle}>
          Profile
        </a>
        <a href="#" style={astyle}>
          Product
        </a>

        <span style={{ marginRight: "30px", color: "#fff", fontSize: "20px" }}>
          {userDetails.user}
        </span>
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
