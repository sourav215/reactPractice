import lgnstl from "./Login.module.css";
import { Flex, Box, Spacer } from "@chakra-ui/react";
function Login() {
  return (
    <div>
      <h1>Login Component</h1>
      <div className={lgnstl.container}>
        <div>left Div</div>
        <div>Right Div</div>
      </div>
      
    </div>
  );
}
export default Login;
