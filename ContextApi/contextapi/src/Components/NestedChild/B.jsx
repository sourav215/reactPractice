import C from "./C";

function B() {
  return (
    <div
      style={{
        width: "700px",
        padding: "20px",
        margin: "50px auto",
        border: "1px solid teal",
      }}
    >
      <h1>B Component</h1>
      <C />
    </div>
  );
}
export default B;
