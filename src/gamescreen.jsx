import "./gamescreen.css";
import { useState } from "react";
import confetti from "canvas-confetti";

function Gamescreen(){
    let [ticket,setticket]=useState(0);
    let [Islottery,setIslottery]=useState(false);
    let [score,setscore]=useState(0);
    function Yourscore(sum){
        if(sum==15){
            setscore(prev=>prev+10);
        }

    }

    function lottery(num){
        let digit=num.toString().split("").map(Number);
        let sum=digit[0]+digit[1]+digit[2];
        if(sum==15){
            setIslottery(true);

            //confetti 
            confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 }
        });

        
        }else{
            setIslottery(false);
        }
        Yourscore(sum);
       
    }
    function Generateno(){
        let num=Math.floor(Math.random() * 900) + 100;
        setticket(num);
        lottery(num);
    }
   return (
  <div className="game-wrapper">
    <div className="game-card">

      <h1 className="game-heading">
        ✨ Let the Game of Luck Decide Your Fate ✨
      </h1>
      <h3 className="score-text">Your Score: {score}</h3>

      <button className="generate-btn" onClick={Generateno}>
         Generate Number
      </button>

      <p className="ticket-number">{ticket}</p>

      {Islottery ? (
        <h1 className="result win-text">🎉 Congratulations 🎉</h1>
      ) : (
        <h1 className="result lose-text">❌ Try Next Time</h1>
      )}

    </div>
  </div>
);

}





export default Gamescreen;
