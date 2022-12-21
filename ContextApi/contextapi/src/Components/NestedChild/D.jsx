import { useContext } from "react";
import ncContext from "./NCcontext";
function D() {
    const contextData = useContext(ncContext);
    
const{name, email, city} = contextData;
  return (
    <div
      style={{
        width: "500px",
        padding: "20px",
        margin: "50px auto",
        border: "1px solid teal",
      }}
    >
      <h1>D Component</h1>
      <dl>
        <dt>Name</dt>
        <dd>{name}</dd>
        <dt>City</dt>
        <dd>{city}</dd>
      </dl>
    </div>
  );
}
export default D;
