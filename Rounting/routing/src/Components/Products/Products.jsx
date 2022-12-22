import pd from "./Products.module.css";
import { Link } from "react-router-dom";
function Products() {
  return (
    <div>
      <h1>Products</h1>
      <div className={pd.container}>
        <div className={pd.leftcontainer}>
          <div>
            <Link to="#">Electronics</Link>
          </div>
          <div>
            <Link to="#">Jewellery</Link>
          </div>
          <div>
            <Link to="#">Mens</Link>
          </div>
          <div>
            <Link to="#">Womens</Link>
          </div>
        </div>
        <div className={pd.rightcontainer}>
          <div>{/* Show All Products Here */}</div>
        </div>
      </div>
    </div>
  );
}
export default Products;
