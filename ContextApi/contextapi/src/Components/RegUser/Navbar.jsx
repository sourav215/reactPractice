import { useContext } from "react";
import loginContext from "./LGNContext";

function Navbar() {
  const userData = useContext(loginContext);

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
      </div>
      <div>
        <span style={{ marginRight: "30px", color: "#fff", fontSize: "20px" }}>
          {userData.user}
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
        >
          Logout
        </button>
      </div>
    </div>
  );
}
export default Navbar;
