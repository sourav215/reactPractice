import User1 from "../User1/User1";
import User2 from "../User2/User2";
import style from "./Home.module.css"
function Home() {
    return (
        <div className= {style.home}>
            <User1/>
            <User2/>
        </div>
    );
}

export default Home;