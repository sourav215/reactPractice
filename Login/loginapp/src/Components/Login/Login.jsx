import { useState } from "react";
import lgnstl from "./Login.module.css";
import { CgCloseO } from "react-icons/cg";

import {
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  VStack,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";

function Login() {
  const [page, setPage] = useState(true);
  
  const hasNum = new RegExp("(?=.*[0-9])");
  const phoneerr = true;
  const passworderr = true;
  return (
    <div className={lgnstl.login_main}>
      <div className={lgnstl.login_container}>
        <div className={lgnstl.icon_div}>
          <CgCloseO />
        </div>
        <div className={lgnstl.logo_div}>
          <img
            src="https://static.pbcdn.in/cdn/images/new-home/logopb.svg?v=2"
            alt="logo"
          />
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
        {/*demo  */}
        {page ? <div>login page</div> : <div>signup page</div>}
        {/* demo */}
        <VStack spacing={6} align="flex-start">
          <FormControl isInvalid={phoneerr}>
            <InputGroup>
              <InputLeftAddon bg={"#3182ce"} color="white" children="+91 " />
              <Input type="tel" placeholder="Mobile Number" />
            </InputGroup>
            {phoneerr && (
              <FormErrorMessage>* Phone No is required.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={passworderr}>
            <Input type={"password"} placeholder="Enter Password"></Input>
            {passworderr && (
              <FormErrorMessage>
                {"Password should be over 6 characters."}
              </FormErrorMessage>
            )}
          </FormControl>
          <Button
            type="submit"
            colorScheme="blue"
            w="full"
            onClick={() => alert("Working")}
          >
            Sign in with Password
          </Button>
        </VStack>
        <div className={lgnstl.changepage}>
          <p>
            First time user?{" "}
            <span className={lgnstl.spn} onClick={() => setPage(!page)}>
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
