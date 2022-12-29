import taskAction from "../Redux/Action";
import { useState } from "react";
import { useDispatch } from "react-redux";
function FormComp() {
  const [inputState, setInputState] = useState({
    task: "",
    status: false,
  });
  const dispatch = useDispatch();

  const handleSubmit = () => {
    // taskAction(inputState);
    taskAction(inputState,dispatch);
  };
  return (
    <div style={{ padding: "100px" }}>
      <h2>Input Component</h2>
      <input
        type="text"
        placeholder="Enter task here ..."
        onChange={(e) => {
          setInputState({ ...inputState, task: e.target.value });
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default FormComp;
