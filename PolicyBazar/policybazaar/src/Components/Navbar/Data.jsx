import { Family } from "../Product_page/Family_page/Family";
import { Product } from "../Product_page/Insurance_page/Product";
import { Page2 } from "../Product_page/Page_2/Page2";
import { Page3 } from "../Product_page/Page_3/Page3";
import { Page4 } from "../Product_page/Page_4/Page4";
import { Family_right } from "../Product_page/Family_page/Family_right";
import { Route, Routes } from "react-router-dom";

const Data = {
  TermInsurance: [
    {
      title: "Zero Cost Term Insurance",
      path: "zero-cost-term-insuranc",
      element: <Product />,
    },
    {
      title: "Term Insurance for NRI's",
      path: "term-insurance-for-NRI",
      element: <Product />,
    },
    {
      title: "Term Insurance for Housewife",
      path: "term-insurance-for-housewife",
      element: <Product />,
    },
    {
      title: "Best Term Insurance Plans",
      path: "best-term-insurance-plan",
      element: <Product />,
    },
    { title: "Life Insurance", path: "life-insurance", element: <Product /> },
    {
      title: "1 Crore Term Insurance",
      path: "1-crore-term-insurance",
      element: <Product />,
    },
    {
      title: "Term Insurance Calculator",
      path: "term-insurance-calculator",
      element: <Product />,
    },
    {
      title: "Term Insurance Return of Premium",
      path: "term-insurance-return-of-premium",
      element: <Product />,
    },
  ],
  OtherInsurance: [
    { title: "Travel Insurance", path: "travel-insurance" },
    { title: "Group Health Insurance", path: "group-health-insurance" },
    { title: "Home Insurance", path: "home-insurance" },
    { title: "Pet Insurance", path: "pet-insurance" },
    { title: "Cancer Insurance", path: "cancer-insurance" },
    {
      title: "Defence Personnel Insurance",
      path: "defence-personnel-insurance",
    },
  ],
  InvestmentPlans: [
    {
      title: "Investment Plans with high Returns",
      path: "investment-path-with-high-returns",
    },
    { title: "Capital Gaurantee Plans", path: "capital-garuntee-plans" },
    { title: "Investment Plans for NRI's", path: "investment-plans-for-NRI's" },
    { title: "Child Plans", path: "child-plans" },
    { title: "SIP", path: "SIP" },
    { title: "LIC", path: "LIC" },
  ],
  HealthInsurance: [
    {
      title: "Family Health Insurance",
      path: "family-health-insurance",
      element: (
        <Family/>
          
      ),
    },
    {
      title: "Senior Citizen Health Insurance",
      path: "senior-citizen-health-insurance",
      element: <Family />,
    },
    {
      title: "Health Insurance for Parents",
      path: "health-insurance-for-parents",
      element: <Family />,
    },
    {
      title: "Arogya Sanjeevani Policy",
      path: "arogya-sanjeevani-policy",
      element: <Family />,
    },
    {
      title: "Mediclaim Policy",
      path: "mediclaim-policy",
      element: <Family />,
    },
    {
      title: "Best Health Insurance Plans",
      path: "best-health-insurance-plans",
      element: <Family />,
    },
  ],
  CarInsurance: [
    { title: "Motor Insurance", path: "motor-insurance" },
    { title: "Two Wheeler Insurance", path: "two-wheeler-insurance" },
    { title: "Taxi Insurance", path: "taxi-insurance" },
    { title: "Electric Car Insurance", path: "electric-car-insurance" },
    { title: "Car Insurance Claim", path: "car-insurance-claim" },
    { title: "Motor Floater Insurance", path: "motor-floater-insurance" },
  ],
};
export default Data;
