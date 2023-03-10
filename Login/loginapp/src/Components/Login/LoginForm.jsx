import { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
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
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useToast,
} from "@chakra-ui/react";

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [submissionStatus, setSubmissionStatus] = useState(false);
  const [inputState, setInputState] = useState({
    phoneNumber: "",
    password: "",
    name: "",
  });

  const dispatch = useDispatch();
  const toast = useToast({ position: "top" });

  const handleValuedInput = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    if (inputState.phoneNumber.length !== 10) {
      toast({
        title: `Invalid Phone Number. Enter Correct One`,
        status: "error",
        isClosable: true,
      });
      return;
    } else if (inputState.password.length < 4) {
      toast({
        title: `Password should be over 4 characters.`,
        status: "error",
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      if (isValidUser()) {
        setLoading(false);
      } else {
        setLoading(false);
        toast({
          title: `Error! Login failed. Please recheck the phone number and password and try again.`,
          status: "error",
          isClosable: true,
        });
      }
    }, 2000);
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
        setLoading(false);
        setSubmissionStatus(true);
        setTimeout(() => {
          setSubmissionStatus(false);
          loginAction(user, dispatch);
        }, 3000);
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
      toast({
        title: `There was an error processing your request`,
        status: "error",
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);

  if (submissionStatus) {
    return (
      <>
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="1g">
            Login Success!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            You have been successfully logged into Policybazaar!
          </AlertDescription>
        </Alert>
      </>
    );
  }

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
