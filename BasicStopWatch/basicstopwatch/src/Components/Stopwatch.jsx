import { useState, useEffect,useRef } from "react";
function Stopwatch() {
  const [count, setCount] = useState(10);
  let countId = useRef();
  const startInterval = () => {
    countId.current = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          clearInterval(countId.current);
          return prev;
        } else {
          return prev - 1;
        }
      });
    },1000);
  };

  useEffect(() => {
    // startInterval();
    return () => clearInterval(countId.current);
  }, []);

  return (
    <div>
      <h1>Timer</h1>
      <h1>{count}</h1>
      <button onClick={startInterval}>Start</button>
      <button onClick={()=> clearInterval(countId.current)}>Pause</button>
      <button >Reset</button>
    </div>
  );
}
export default Stopwatch;
