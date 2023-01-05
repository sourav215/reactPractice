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
  const [signupState, setsignupState] = useState({
    name: "",
    phoneNumber: "",
    password: "",
  });

  const handleSignupInput = (e) => {
    setsignupState({
      ...signupState,
      [e.target.name]: e.target.value,
    });
  };
  const handleSignupFormSubmit = (e) => {
    if (signupState.phoneNumber.length != 10) {
      alert("Enter correct number");
      return;
    } else if (signupState.password.length < 4) {
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
            // signupState.phoneNumber.length == 0 ||
            signupState.phoneNumber.length > 10
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
          {signupState.phoneNumber.length == 0 ? (
            <FormHelperText>* Phone No is required</FormHelperText>
          ) : (
            <FormErrorMessage>Invalid Phone Number</FormErrorMessage>
          )}
        </FormControl>

        <Input
          type={"text"}
          placeholder="Enter Your Name"
          maxlength="20"
          name="name"
          onChange={handleSignupInput}
        ></Input>
        {signupState.name.length == 0 && (
          <FormHelperText>* Name is required</FormHelperText>
        )}
        
        <FormControl
          isInvalid={
            signupState.password.length > 0 && signupState.password.length < 4
          }
        >
          <Input
            type={"password"}
            placeholder="Enter Password"
            maxlength="10"
            name="password"
            onChange={handleSignupInput}
          ></Input>

          <FormErrorMessage>
            {"Password should be over 4 characters."}
          </FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
          w="full"
          onClick={handleSignupFormSubmit}
        >
          Sign in with Password
        </Button>
      </VStack>
    </div>
  );
}
export default SignupForm;
