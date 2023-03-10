import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ProductDetails from "./ProductDetails";

function Jewellery() {
  const [jdata, setJData] = useState([]);

  const getData = async () => {
    let res = await fetch(
      `https://fakestoreapi.com/products/category/jewelery`
    );
    let data = await res.json();
    setJData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Jewellery Component</h1>
      <div>
        {jdata.length > 0 ? (
          <ul
            style={{
              listStyleType: "none",
              textAlign: "left",
              fontSize: "24px",
            }}
          >
            {jdata.map((ele, i) => {
              return (
                <NavLink
                  to={`/productdetails/${ele.id}`}
                  key={i}
                  style={{
                    textDecoration: "none",
                    color: "teal",
                    display: "block",
                    marginBottom: "25px",
                  }}
                >
                  <li>{ele.title}</li>
                </NavLink>
              );
            })}
          </ul>
        ) : (
          <div>
            <h2>....loading..</h2>
          </div>
        )}
      </div>
    </div>
  );
}
export default Jewellery;
