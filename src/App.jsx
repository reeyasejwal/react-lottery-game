import { useState } from "react";
import Startscreen from "./startscreen";
import Gamescreen from "./gamescreen";

function App() {
  let [started,setstarted]=useState(false);
  return (
   <div>
    {started?(<Gamescreen/>):(<Startscreen Onstart={()=>setstarted(true)}/>)}
   </div>
  );
}

export default App;