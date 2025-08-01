import React, { useRef, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [k, setK] = useState(null);
  const reff = useRef(null);

  const handleStart = () => {
    // const p= setInterval(()=>{
    //     setTime(prev=>prev+1)
    // },500)
    // setK(p)
    reff.current = setInterval(() => {
      setTime((prev) => prev + 1);
      console.log("chal");
    }, 500);
  };
  const handleStop = () => {
    clearInterval(reff.current);
    // setK(clearInterval(k))
  };
  const handleReset = () => {
    // setK(clearInterval(k))
    clearInterval(reff.current);
    setTime(0);
  };
  return (
    <div>
      StopWatch
      <div>
        {/* {time} */}
        {time}
        <div className="flex justify-center gap-10">
          <button
            className="p-4 bg-yellow-400 text-white"
            onClick={() => handleStart()}
          >
            {" "}
            start
          </button>
          <button
            className="p-4 bg-yellow-400 text-white"
            onClick={() => handleStop()}
          >
            {" "}
            Stop
          </button>
          <button
            className="p-4 bg-yellow-400 text-white"
            onClick={() => handleReset()}
          >
            {" "}
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
