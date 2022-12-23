import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import Home from "./Components/Home/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Electronics from "./Components/Products/Electronics";
import Jewellery from "./Components/Products/Jewellery";
import ProductDetails from "./Components/Products/ProductDetails";
import Counter from "./Components/Counter/Counter";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="" element={<Navigate to="electronics" />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="jewellery" element={<Jewellery />} />
        </Route>
        <Route path="/productdetails/:id" element={<ProductDetails />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
