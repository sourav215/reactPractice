import { useState } from "react";

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

function SignupForm() {
  const [loginState, setLoginState] = useState({
    phoneNumber: "",
    password: "",
  });

  const handleLoginInput = (e) => {
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value,
    });
  };
  const handleLoginSubmit = (e) => {
    if (loginState.phoneNumber.length != 10) {
      alert("Enter correct number");
      return;
    } else if (loginState.password.length < 4) {
      alert("Enter correct password");
      return;
    } else {
      alert("successful");
    }
  };

  return (
    <div>
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

          <FormErrorMessage>
            {"Password should be over 4 characters."}
          </FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
          w="full"
          onClick={handleLoginSubmit}
        >
          Sign in with Password
        </Button>
      </VStack>
    </div>
  );
}
export default SignupForm;
