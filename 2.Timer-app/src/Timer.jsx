import React, { useRef, useState,useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const IntervalRef = useRef(false);
  const [second, setSecond] = useState(0);
  const [isRunning, setIsrunning] = useState(false);

  const startTimer = () => {
    setIsrunning(true);
    // her saniye second değerini bir artttırıcam

    IntervalRef.current = setInterval(() => {
      setSecond((prev) => prev + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(IntervalRef.current);
    setIsrunning(false);
  };
  const clearTimer = () => {
    setSecond(0);
    stopTimer();
  };

  useEffect(()=>{
    return ()=>{
        clearTimer()
    }
  },[])
  return (
    <div className="timer">
      <b>Kronometre</b>

      <div className="timer-time">
        <strong>
          {Math.floor(second / 60)
            .toString()
            .padStart(2, "0")}
          :{(second % 60).toString().padStart(2, "0")}
        </strong>
      </div>

      <div className="timer-buttons">
        <button disabled={isRunning} onClick={startTimer} className="start">
          {isRunning ? "Çalışıyor.." : "Başlat"}
        </button>
        <button onClick={stopTimer} className="stop">
          Durdur
        </button>
        <button onClick={clearTimer} className="reset">
          Sıfırla
        </button>
      </div>
    </div>
  );
};

export default Timer;
