import { useState } from "react";

function User2({ data, sendData }) {
  const [ip, setIp] = useState("");

  const sendToParent = () => {
    sendData(ip);
  };

  return (
    <div>
      <h1>Server Component</h1>
      <div>
        <h4>Client:  "{data}"</h4>
      </div>
      <div>
        <input
          type="text"
          placeholder="Write here .."
          onChange={(e) => {
            setIp(e.target.value);
          }}
        />
        <button onClick={sendToParent}>Send</button>
      </div>
    </div>
  );
}
export default User2;
