import { useState, useEffect } from "react";
function Stopwatch() {
  const [count, setCount] = useState(10);
  let countId;
  const startInterval = () => {
    countId = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          clearInterval(countId);
          return prev;
        } else {
          return prev - 1;
        }
      });
    },1000);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(countId);
  }, []);

  return (
    <div>
      <h1>Timer</h1>
      <h1>{count}</h1>
      <button>Start</button>
      <button>Pause</button>
      <button onClick={startInterval}>Reset</button>
    </div>
  );
}
export default Stopwatch;
