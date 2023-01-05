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
    const [inputState, setInputState] = useState({
        phoneNumber: "",
        name: "",
        password: "",
      });
    
      const handleValuedInput = (e) => {
        setInputState({
          ...inputState,
          [e.target.name]: e.target.value,
        });
      };
      const handleFormSubmit = (e) => {
        if (inputState.phoneNumber.length !== 10) {
          alert("Enter correct number");
          return;
        } else if (inputState.password.length < 4) {
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
                inputState.phoneNumber.length > 10
              }
            >
              <InputGroup>
                <InputLeftAddon bg={"#3182ce"} color="white" children="+91 " />
                <Input
                  type="number"
                  placeholder="Mobile Number"
                  name="phoneNumber"
                  onChange={handleValuedInput}
                />
              </InputGroup>
              {inputState.phoneNumber.length == 0 ? (
                <FormHelperText>* Phone No is required</FormHelperText>
              ) : (
                <FormErrorMessage>Invalid Phone Number</FormErrorMessage>
              )}
            </FormControl>
            <FormControl>
              <Input
                type={"text"}
                placeholder="Enter Your Name"
                name="name"
                onClick={handleValuedInput}
              />
              {/* {inputState.name.length < 1 && (
                <FormHelperText>* Name is required</FormHelperText>
              )} */}
            </FormControl>
    
            <FormControl
              isInvalid={
                inputState.password.length > 0 && inputState.password.length < 4
              }
            >
              <Input
                type={"password"}
                placeholder="Enter Password"
                maxlength="10"
                name="password"
                onChange={handleValuedInput}
              ></Input>
    
              <FormErrorMessage>
                {"Password should be over 4 characters."}
              </FormErrorMessage>
            </FormControl>
            <Button
              type="submit"
              colorScheme="blue"
              w="full"
              onClick={handleFormSubmit}
            >
              Sign up
            </Button>
          </VStack>
        </div>
      );
}
export default SignupForm;
