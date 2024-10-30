import { useTimer } from 'react-timer-hook';
import { useState } from 'react';

export default function Timer({ expiryTimestamp }) {
    const {
        totalSeconds,
        seconds,
        minutes,
        hours = '00',
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    let [timeInput, setTimeInput] = useState(null);

    function setTimer(timeInput) {
        setTimeInput(timeInput);
        const time = new Date();
        time.setSeconds(time.getSeconds() + timeInput);
        restart(time)
        pause(time)
    }

    return (
        <>
            <div className="bg-green-200">

                <div className="flex justify-center">
                    <h1 className="text-2xl">Pomodoro Timer</h1>
                </div>

                <div className="flex flex-row">
                    <div className="bg-orange-300 w-1/2">
                        <div>
                            <button onClick={() => setTimer(1500)}>25 minutes</button>
                            <button onClick={() => setTimer(3000)}>50 minutes</button>
                            <button onClick={() => setTimer(6300)}>1 hour 45 minutes</button>
                            {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
                            {/* <button onClick={start}>Start</button> */}
                        </div>
                        <div>
                            <button onClick={resume}>Start/Resume</button>
                            <button onClick={pause}>Pause</button>
                            <button onClick={() => {
                                const time = new Date();
                                time.setSeconds(time.getSeconds() + timeInput);
                                restart(time)
                                pause(time)
                            }}>Restart</button>
                        </div>
                    </div>



                    <div className="text-6xl bg-red-300 w-1/2 flex justify-center">
                        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                    </div>
                </div>
            </div>
        </>
    )
}