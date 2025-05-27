import React, { useState } from "react";

const TicTacToe = () => {
  const [turn, setTurn] = useState({});
  const [ram, setRam] = useState(true);
  const[currentIndex,setCurrentIndex]=useState(1);
  const[value,setValue]= useState()

  const handlefun = (i) => {
    setCurrentIndex(i)
    if (i % 2 !== 0) {
      setRam(false);
    }
    // if (i == 0) {
    //   setTurn({ [i]: ram });
    // } else {
      setTurn((prev) => ({...prev, [i]:ram}));
    // }
    setValue(turn.i)

    console.log("i", i);
    console.log("ram", ram);
    console.log("turn", turn);
    console.log("currentIndex",currentIndex)
    console.log("turn.i",turn[i])
  };
  return (
    <div>
      TicTacToe
      <h1>Winner</h1>
      {/* <h1>Next Player<span>{turn}</span></h1> */}
      <div>
        <div className="flex">
          {Array.from({ length: 3 }).map((item, i) => (
            <div key={i}>
              <div
                className="border-2 bg-black text-white  flex justify-center rounded-xl p-4"
                onClick={() => handlefun(i+1)}
              >
                {turn[currentIndex]}
             
                {console.log(currentIndex)}
                {/* {console.log(turn[currentIndex])} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
