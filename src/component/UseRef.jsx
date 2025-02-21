import { useRef } from "react";
import { useState, useEffect } from "react";

const UseRef = () => {
//   const [count, setCount] = useState(0);

//   const countRef = useRef();
//   useEffect(() => {
//     countRef.current = count;
//   }, [count])
  
const [time, setTime] = useState(0);
const intervalRef = useRef();

const startTimer = () => {
  intervalRef.current = setInterval(() => {
    setTime((prevTime) => prevTime + 1);
  }, 1000);
};

const stopTimer = () => {
  clearInterval(intervalRef.current);
};

  return (
    // <div>
    //   <h1>Userefff</h1>
    //   <button className="btn"  onClick={() => setCount(count + 1)}>
    //   Increment
    //   </button>
    //   <h1>Current Count: {count}</h1>
    //   <h2>Previous Count: {countRef.current}</h2>
    //   {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
    // </div>
    <div>
      <h1>Timer: {time} seconds</h1>
      <button className="btn m-3" onClick={startTimer}>Start</button>
      <button className="btn m-3"  onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default UseRef;
