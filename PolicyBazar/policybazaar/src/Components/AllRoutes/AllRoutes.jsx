import { Route, Routes } from "react-router-dom";
import FinalCheckout from "../FinalCheckout/Checkout";
import OTP from "../FinalCheckout/OTP";
import Login from "../Login/LoginComp/Login";
import Data from "../Navbar/Data";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "../Home/Home";
import Payment from "../Payment/Payment";
import { Family } from "../Product_page/Family_page/Family";
import { Product } from "../Product_page/Insurance_page/Product";
import { Page2 } from "../Product_page/Page_2/Page2";
import { Page3 } from "../Product_page/Page_3/Page3";
import { Page4 } from "../Product_page/Page_4/Page4";
import { Family_right } from "../Product_page/Family_page/Family_right";
import { Display_data } from "../Product_page/data/Display_data";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lifeinsurance">
          <Route path="term-insurance">
            {Data.TermInsurance.map((ele) => {
              return <Route path={ele.path} element={ele.element} />;
            })}
          </Route>
          <Route path="other-insurance">
            {Data.OtherInsurance.map((ele) => {
              return <Route path={ele.path} />;
            })}
          </Route>
          <Route path="investment-plans">
            {Data.InvestmentPlans.map((ele) => {
              return <Route path={ele.path} />;
            })}
          </Route>
          <Route path="health-insurance" element={<Family/>}>
            {/* {Data.HealthInsurance.map((ele) => {
              return <Route path={ele.path} element={ele.element} />;
            })} */}
            <Route path="" element={<Family_right />} />
            <Route path="age" element={<Page2 />} />
            <Route path="pincode" element={<Page3 />} />
            <Route path="contact" element={<Page4 />} />
            <Route path="*" element={<div>ERROR</div>} />
          </Route>
          <Route path="car-insurance">
            {Data.CarInsurance.map((ele) => {
              return <Route path={ele.path} />;
            })}
          </Route>
        </Route>
        <Route path="/renewal">
          <Route path="life-renewal" />
          <Route path="health-renewal" />
          <Route path="motor-renewal" />
          <Route path="two-wheeler-renewal" />
        </Route>
        <Route path="/claim">
          <Route path="new-claim" />
          <Route path="already-filed-claim" />
          <Route path="filing-claim" />
          <Route path="track-exising-claim" />
        </Route>
        <Route path="/support">
          <Route path="account">
            <Route path="policies" />
            <Route path="get-help" />
            <Route path="communication-preferences" />
            <Route path="advisor" />
          </Route>
          <Route path="contact">
            <Route path="whatsapp" />
            <Route path="stores" />
            <Route path="callback" />
          </Route>
        </Route>

        <Route
          path="/login"
          element={
            <ChakraProvider>
              <Login />
            </ChakraProvider>
          }
        ></Route>
        <Route path="/checkout" element={<FinalCheckout />} />
        <Route path="otp" element={<OTP></OTP>} />
        <Route path="/payment" element={<Payment />} />
        {/*  */}
        
        <Route path="/plans" element={<Display_data />} />
        <Route path="/term" element={<Product />} />

        {/*  */}
      </Routes>
    </div>
  );
};
export default AllRoutes;
