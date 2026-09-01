import { useState, useEffect } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((previousSeconds) =>
                previousSeconds + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <h1>{seconds}</h1>
    );
}

export default Timer;