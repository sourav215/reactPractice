import taskAction from "../Redux/Action";
import { useState } from "react";

function Input() {
  const [inputState, setInputState] = useState("");
  const handleSubmit = () => {
    console.log(inputState);
  };
  return (
    <div style={{ padding: "100px" }}>
      <h2>Input Component</h2>
      <input
        type="text"
        placeholder="Enter task here ..."
        onChange={(e) => {
          setInputState(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default Input;
