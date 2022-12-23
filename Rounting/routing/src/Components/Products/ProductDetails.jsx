import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ProductDetails() {
  const [prod, setProd] = useState({});

  const { id } = useParams();

  const getSigleProdData = async () => {
    try {
      let res = await fetch(`https://fakestoreapi.com/products/${id}`);
      let resData = await res.json();
      setProd(resData);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getSigleProdData();
  }, []);

  return (
    <div>
      <h1>Product Details</h1>
      {Object.keys(prod).length > 0 ? (
        <div>
          <img src={prod.image} alt="" />
          <h2>{prod.title}</h2>
          <h4>$ {prod.price}</h4>
          <h4>{prod.category.toUpperCase()}</h4>
        </div>
      ) : (
        <div>
          {" "}
          <h1>...No Data..</h1>
        </div>
      )}
    </div>
  );
}
export default ProductDetails;
