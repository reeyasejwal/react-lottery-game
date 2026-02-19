import { FaDice, FaCoins } from "react-icons/fa";
import "./startscreen.css";

function Startscreen({Onstart}) {
  return (
    <div className="start-screen">
      <div className="start-content">
        <h1 className="title">
          <FaDice className="neon-icon" />
          Lottery Game
          <FaCoins className="neon-icon" />
        </h1>

        {/* Button BELOW title */}
        <button className="start-btn" onClick={Onstart}>Start Now</button>
      </div>
    </div>
  );
}


export default Startscreen;