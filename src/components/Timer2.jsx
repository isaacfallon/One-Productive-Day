import { useState, useEffect } from "react";

let timer__part = " text-6xl font-semibold";
let timer__minutes = " ";
let timer__btn = " w-12 h-12 ml-4 rounded-full text-white cursor-pointer";

export default function Timer2() {
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const [timerStatus, setTimerStatus] = useState("Timer inactive");

  //   let interval = null;
  let [int, setInt] = useState(null);

  let [remainingSeconds, setRemainingSeconds] = useState(0);

  const [playPauseIcon, setPlayPauseIcon] = useState(<span className="material-icons">play_arrow</span>);

  const [playPauseColor, setPlayPauseColor] = useState(' bg-green-500');

  function updateTimeInterface() {
    let mins = Math.floor(remainingSeconds / 60);
    let secs = remainingSeconds % 60;
    setMinutes(mins.toString().padStart(2, "0"));
    setSeconds(secs.toString().padStart(2, "0"));
  }

  function startTimer() {
    if (remainingSeconds === 0) return;

    setInt(
      setInterval(() => {
        setRemainingSeconds(remainingSeconds--);
        updateTimeInterface();

        if (remainingSeconds === 0) {
          stopTimer();
        }
      }, 1000)
    );
    setTimerStatus("Timer active");
    setPlayPauseIcon(<span className="material-icons">pause</span>);
    setPlayPauseColor(' bg-red-500');
  }

  function stopTimer() {
    clearInterval(int);
    setInt(null);
    setTimerStatus("Timer inactive");
    setPlayPauseIcon(<span className="material-icons">play_arrow</span>);
    setPlayPauseColor(' bg-green-500');
  }

  function controlButton() {
    if (int === null) {
      startTimer();
    } else {
      stopTimer();
    }
  }

  function setButton() {
    let inputMinutes = prompt("Enter number of minutes:");

    setMinutes("00");
    setSeconds("00");
    setTimerStatus("Timer inactive");
    setInt(null);
    setRemainingSeconds(0);
    setPlayPauseIcon(<span className="material-icons">play_arrow</span>);
    setPlayPauseColor(' bg-green-500');

    if (inputMinutes < 60) {
      stopTimer();
      setRemainingSeconds(inputMinutes * 60);
      setMinutes(inputMinutes.toString().padStart(2, "0"));
    }
  }

  return (
    <div className="flex justify-center py-6 px-8 rounded-3xl w-full border-solid border-2 border-sky-600">
      <span className={timer__part + timer__minutes}>{minutes}</span>
      <span className={timer__part}>:</span>
      <span className={timer__part + " timer__part--seconds"}>{seconds}</span>

      <div className="mt-3 ml-4">
        <button
          type="button"
          onClick={controlButton}
          className={
            "timer__btn--control timer__btn--start" + timer__btn + playPauseColor
          }
        >
          {playPauseIcon}
        </button>
        <button
          type="button"
          onClick={setButton}
          className={"timer__btn--reset bg-purple-500" + timer__btn}
        >
          <span className="material-icons">timer</span>
        </button>
      </div>

    </div>
  );
}
