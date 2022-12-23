import { useSearchParams } from "react-router-dom";
function Counter() {
  const [searchparam, setSearchparam] = useSearchParams();
  console.log(searchparam.get("gender"));
  return (
    <div>
      <h1>Counter Component</h1>
    </div>
  );
}
export default Counter;
