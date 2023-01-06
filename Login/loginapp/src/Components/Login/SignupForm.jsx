import { useState, useEffect } from "react";

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
} from "@chakra-ui/react";

function SignupForm({ gotoPrevious }) {
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [subError, setSubError] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(false);
  const [phNoIsInvalid, setPhNoIsInvalid] = useState(false);
  const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
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
      setPhNoIsInvalid(true);
      setTimeout(() => {
        setPhNoIsInvalid(false);
      }, 5000);
      return;
    } else if (inputState.password.length < 4) {
      setPasswordIsInvalid(true);
      setTimeout(() => {
        setPasswordIsInvalid(false);
      }, 5000);
      return;
    } else if (hasAlreadyRegistered()) {
      // alert("User has already registered");
      setRegistered(true);
      setTimeout(() => {
        setRegistered(false);
        gotoPrevious();
      }, 5000);
    } else {
      postData();
      //   alert("successful");
      //   gotoPrevious();
    }
  };
  const hasAlreadyRegistered = () => {
    let present = false;
    allUsers.map(({ phoneNumber }) => {
      if (phoneNumber === inputState.phoneNumber) {
        present = true;
      }
    });
    return present;
  };
  const postData = async () => {
    try {
      setLoading(true);
      let res = await fetch(`http://localhost:8080/regUser`, {
        method: "POST",
        body: JSON.stringify(inputState),
        headers: { "Content-type": "application/json" },
      });
      setTimeout(() => {
        setLoading(false);
        setSubmissionStatus(true);
        setTimeout(() => {
          setSubmissionStatus(false);
          gotoPrevious();
        }, 5000);
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllUser = async () => {
    try {
      let res = await fetch(`http://localhost:8080/regUser`);
      let resData = await res.json();
      console.log(resData);
      setAllUsers(resData);
    } catch (error) {
      setSubError(true);
      setTimeout(() => {
        setSubError(false);
      }, 5000);
      console.log(error);
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
            Success!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Congratulation, Your Account has been successfully created.
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
          {inputState.phoneNumber.length === 0 ? (
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
          isLoading={loading}
          loadingText="Submitting"
          type="submit"
          colorScheme="blue"
          w="full"
          onClick={handleFormSubmit}
        >
          Sign up
        </Button>
        {/*  */}
        <Stack spacing={3}>
          {phNoIsInvalid && (
            <Alert status="error" w="full">
              <AlertIcon />
              Invalid Phone Number. Enter Correct One
            </Alert>
          )}
          {passwordIsInvalid && (
            <Alert status="error">
              <AlertIcon />
              {"  "} Password should be over 4 characters.{"  "}
            </Alert>
          )}
          {subError && (
            <Alert status="error">
              <AlertIcon />
              There was an error processing your request
            </Alert>
          )}
          {registered && (
            <Alert status="success">
              This Phone Number already exist in our database.
            </Alert>
          )}
        </Stack>
      </VStack>
    </div>
  );
}
export default SignupForm;
