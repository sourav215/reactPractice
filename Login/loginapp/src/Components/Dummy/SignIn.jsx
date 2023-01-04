import { useState } from "react";
import logo from "../Images/logo.svg";
import flag from "..Images/flag.svg";
import formImage from "..Images/form-image.webp";
import { useDispatch } from "react-redux";
import { loginRequest, loginSuccess } from "../Redux/Auth/auth.action";
import { useLocation, useNavigate } from "react-router-dom";

export const SignIn = ({ clickedSignIn, setClickedSignIn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [check, setCheck] = useState({
    mobile: "",
    otp: "",
    errorMessage: "",
    text: "To sign in, please enter your mobile number",
    otpbtn: "Sign in with OTP",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (Number(value))
      setCheck({
        ...check,
        [name]: e.target.value,
      });
  };
  const handleOTP = () => {
    if (check.mobile.length !== 10) {
      setCheck({
        ...check,
        errorMessage: "Please enter a correct Mobile",
      });
      return;
    }
    if (check.otpbtn === "Confirm OTP" && check.otp.length !== 4) {
      setCheck({
        ...check,
        errorMessage: "Please enter a correct OTP",
      });
      return;
    }
    if (check.otpbtn === "Confirm OTP" && check.otp.length === 4) {
      dispatch(loginRequest());
      dispatch(loginSuccess(check.mobile));
      setClickedSignIn(false);
      setCheck({
        ...check,
        mobile: "",
        errorMessage: "",
        text: "To sign in, please enter your mobile number",
        otpbtn: "Sign in with OTP",
        otp: "",
      });
      navigate(`${pathname}`);
      return;
    }
    setCheck({
      ...check,
      text: `Please enter 4 digit OTP sent on ${check.mobile}`,
      errorMessage: "",
      otpbtn: "Confirm OTP",
      otp: "",
    });
  };

  const handleCloseModal = () => {
    setClickedSignIn(false);
    setCheck({
      ...check,
      mobile: "",
      errorMessage: "",
      text: "To sign in, please enter your mobile number",
      otpbtn: "Sign in with OTP",
      otp: "",
    });
  };

  return (
    <div className={clickedSignIn ? "sign-in-show" : "sign-in-hide"}>
      <div className="form-container">
        <div className="close-modal" onClick={handleCloseModal}>
          <span></span>
          <span></span>
        </div>
        <div className="form-top">
          <div>
            <img src={logo} alt="policybazaar-logo" />
          </div>
          <div>
            <img src={formImage} alt="formimg" />
            <h6>{check.text}</h6>
          </div>
        </div>
        <div className="form-bottom">
          {check.otpbtn === "Confirm OTP" ? (
            <div className="mobile-otp">
              <input
                type="text"
                placeholder="Enter OTP"
                name="otp"
                value={check.otp}
                onChange={handleChange}
              />
            </div>
          ) : (
            <div className="mobile-input">
              <img src={flag} alt="in" />
              <i className="arrow-down"></i>
              <p>+91</p>
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={check.mobile}
                onChange={handleChange}
              />
            </div>
          )}
          <p className="form-error">{check.errorMessage}</p>
          <button className="sign-in-top" onClick={handleOTP}>
            {check.otpbtn}
          </button>
          <button className="sign-in-password" onClick={() => {}}>
            Sign in with Password
          </button>
          <p>
            First Time User? <b>Sign up</b>
          </p>
        </div>
      </div>
    </div>
  );
};
