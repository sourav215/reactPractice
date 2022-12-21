function Login() {
  const loginStyle = {
    width: "400px",
    padding: "20px",
    margin: "50px auto",
    textAlign: center,
    boxShadow: "0 0 10px black",
  };
  return (
    <div style={loginStyle}>
      <div>
        <h2>Login Form</h2>
        <form action="">
            <input type="text" placeholder="Username.." />
            <br />
            <input type="text" placeholder="Password.." />
            <br />
            <input type="submit" value={"Submit"} />
        </form>
      </div>
    </div>
  );
}
