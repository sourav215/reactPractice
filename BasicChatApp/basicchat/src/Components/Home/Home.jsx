import User1 from "../User1/User1";
import User2 from "../User2/User2";
import style from "./Home.module.css";
import { useState } from "react";
function Home() {
  const [user1State, setUser1State] = useState("");
  const [user2State, setUser2State] = useState("");

  return (
    <div className={style.home}>
      <User1 data={user2State} sendData={setUser1State} />
      <User2 data={user1State} sendData={setUser2State} />
    </div>
  );
}

export default Home;
