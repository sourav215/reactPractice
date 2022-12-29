import { useSelector } from "react-redux";

function DisplayTask() {
  const data = useSelector((storedata) => storedata);
  console.log(data);
  return (
    <div>
      <h1>All Task</h1>
      {data.map(({ task }, i) => {
        return (
          <div key={i}>
            <h4>{task}</h4>
          </div>
        );
      })}
    </div>
  );
}
export default DisplayTask;
