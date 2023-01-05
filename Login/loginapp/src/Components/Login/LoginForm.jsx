import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginAction } from "../Redux/Login/loginAction";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  VStack,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  flatten,
} from "@chakra-ui/react";

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [logedInUser, setLoggedInUser] = useState({});
  const [inputState, setInputState] = useState({
    phoneNumber: "",
    password: "",
    name: "",
  });
  const dispatch = useDispatch();
  const { isAuth } = useSelector((store) => store);

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
    }
    //  else {
    //   alert("successful");
    //   if (isValidUser()) {
    //     console.log(logedInUser);
    //   }
    // }
    setLoading(true);
    setTimeout(() => {
      if (isValidUser()) {
        // setLoading(false);
        alert("Login Successful!");
      }
      setLoading(false);
    }, 5000);
  };

  const isValidUser = () => {
    let present = false;
    allUsers.forEach((ele) => {
      if (
        inputState.phoneNumber === ele.phoneNumber &&
        inputState.password === ele.password
      ) {
        present = true;
        const user = {
          isAuth: true,
          name: ele.name,
          phoneNumber: ele.phoneNumber,
        };
        sessionStorage.setItem("loggedInUserInfo", JSON.stringify(user));
        loginAction(user, dispatch);
      }
    });
    setLoading(false);
    return present;
  };

  const getAllUser = async () => {
    try {
      let res = await fetch(`http://localhost:8080/regUser`);
      let resData = await res.json();
      setAllUsers(resData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <div>
      <VStack spacing={6} align="flex-start">
        <FormControl isInvalid={inputState.phoneNumber.length > 10}>
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
          isLoading={loading}
          loadingText="Submitting"
          type="submit"
          colorScheme="blue"
          w="full"
          onClick={handleFormSubmit}
        >
          Sign in
        </Button>
      </VStack>
    </div>
  );
}
export default LoginForm;
