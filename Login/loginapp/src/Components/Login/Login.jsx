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
  FormHelperText,
} from "@chakra-ui/react";

function Login() {
  const [page, setPage] = useState(true);
  const [loginState, setLoginState] = useState({
    phoneNumber: "",
    password: "",
  });

  const phoneerr = true;
  const passworderr = true;
  const handleLoginInput = (e) => {
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value,
    });
  };
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
          <FormControl
            isInvalid={
              // loginState.phoneNumber.length == 0 ||
              loginState.phoneNumber.length > 10
            }
          >
            <InputGroup>
              <InputLeftAddon bg={"#3182ce"} color="white" children="+91 " />
              <Input
                type="number"
                placeholder="Mobile Number"
                name="phoneNumber"
                onChange={handleLoginInput}
              />
            </InputGroup>
            {loginState.phoneNumber.length == 0 ? (
              <FormHelperText>* Phone No is required</FormHelperText>
            ) : (
              <FormErrorMessage>Invalid Phone Number</FormErrorMessage>
            )}

            {/* <FormErrorMessage>
              {loginState.phoneNumber.length == 0
                ? "* Phone No is required"
                : "Invalid Phone Number"}
            </FormErrorMessage> */}
          </FormControl>
          <FormControl
            isInvalid={
              loginState.password.length > 0 && loginState.password.length < 4
            }
          >
            <Input
              type={"password"}
              placeholder="Enter Password"
              maxlength="10"
              name="password"
              onChange={handleLoginInput}
            ></Input>
            {passworderr && (
              <FormErrorMessage>
                {"Password should be over 4 characters."}
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
