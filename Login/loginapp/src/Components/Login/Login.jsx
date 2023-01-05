import lgnstl from "./Login.module.css";
import { CgCloseO } from "react-icons/cg";

import { Flex, Box, Spacer, Input } from "@chakra-ui/react";
function Login() {
  return (
    <div className={lgnstl.login_main}>
      <h1>Login Component</h1>

      <div className={lgnstl.login_container}>
        <div className={lgnstl.icon_div}>
          <CgCloseO />
        </div>
        <div className={lgnstl.logo_div}>
          <img src="https://static.pbcdn.in/cdn/images/new-home/logopb.svg?v=2" alt="logo" />
        </div>
        <div className={lgnstl.title_div}>
          <div>
            <img
              src="https://static.pbcdn.in/myaccount-cdn/images/login-illusion.png"
              alt=""
            />
          </div>
          <div>
            <h3>To sign in, please enter your mobile number</h3>
          </div>
        </div>
        <Input type="text" placeholder="Enter Mobile Number"/>
        <Input type="submit" value={"Login"}/>
      </div>

      
    </div>
  );
}
export default Login;
