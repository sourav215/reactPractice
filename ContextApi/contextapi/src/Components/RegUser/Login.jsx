import { useState } from "react";
import { useContext } from "react";
import loginContext from "./LGNContext";
function Login() {
  const [inputData, setInputData] = useState({
    name: "",
    password: "",
  });
  const { fnLoggedIn } = useContext(loginContext);
  const handleValuedInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(inputData.name == "Sourav" && inputData.password == "1234"){
        fnLoggedIn ({
            user: "Sourav",
            loginStatus: true,
          })
    }else{
        alert ("Wrong Credential!");
    }
  };

  const loginStyle = {
    width: "400px",
    padding: "20px",
    margin: "50px auto",
    textAlign: "center",
    boxShadow: "0 0 10px black",
  };

  return (
    <div style={loginStyle}>
      <div>
        <h2>Login Form</h2>
        <form action="" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Username.."
            name="name"
            onChange={handleValuedInput}
          />
          <br />
          <input
            type="text"
            placeholder="Password.."
            name="password"
            onChange={handleValuedInput}
          />
          <br />
          <input type="submit" value={"Submit"} />
        </form>
      </div>
    </div>
  );
}

export default Login;
