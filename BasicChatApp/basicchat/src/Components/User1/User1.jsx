import { useState } from "react";

function User1({ data, sendData }) {

  const [ip, setIp] = useState("");

  const sendToParent = () => {
    sendData(ip);
  };

  return (
    <div>
      <h1>Client Component</h1>
      <div>
        <h4>Server:  "{data}"</h4>
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

export default User1;
