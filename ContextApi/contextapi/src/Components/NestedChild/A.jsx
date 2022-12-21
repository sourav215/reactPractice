import B from "./B";

function A() {
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
      <B />
    </div>
  );
}
export default A;
