import B from "./B";
import { useState } from "react";
import ncContext from "./NCcontext";
function A() {
  const [state, useState] = useState({
      name: "Sourabh",
      email: "sourabh@gmail.com",
      city: "Kolkata"
  })
  return (
    <div
      style={{
        width: "800px",
        padding: "20px",
        margin: "50px auto",
        border: "1px solid teal",
      }}
    >
      <h1>A Component</h1>
      <ncContext.Provider value={state}>
        <B />
      </ncContext.Provider>
    </div>
  );
}
export default A;
