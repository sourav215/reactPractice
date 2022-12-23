import { useSearchParams } from "react-router-dom";
function Counter() {
  const [searchparam, setSearchparam] = useSearchParams();
  console.log(searchparam.get("gender"));
  return (
    <div>
      <h1>Counter Component</h1>
      <button
        onClick={() => {
          setSearchparam({ filter: "camera" });
        }}
      >
        Set New Params
      </button>
    </div>
  );
}
export default Counter;
