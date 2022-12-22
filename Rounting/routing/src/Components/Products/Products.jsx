import pd from "./Products.module.css";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <div className={pd.container}>
        <div className={pd.leftcontainer}>
          <div>
            <Link to="electronics">Electronics</Link>
          </div>
          <div>
            <Link to="jewellery">Jewellery</Link>
          </div>
          <div>
            <Link to="#">Mens</Link>
          </div>
          <div>
            <Link to="#">Womens</Link>
          </div>
        </div>
        <div className={pd.rightcontainer}>
          <div>
            {/* Show All Products Here */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Products;
