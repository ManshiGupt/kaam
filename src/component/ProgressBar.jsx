// import React, { useState } from "react";

// const ProgressBar = () => {
//   const [count, setCount] = useState(0);
//   const handleChange = () => {
//     // setCount((prev) => (prev - 10) % 10);
//     // setCount((prev)=>(prev-10)<=0? 0: (prev-10));
//     setCount((prev)=>Math.max(prev-10,0));
//   };
//   const handleChane = () => {
//     // setCount((prev) => (prev + 10) % 110);
//     setCount((prev)=>(prev+10)>=100?100: (prev+10));
//   };
//   return (
//     <div>
//       <h1> {count}</h1>
//       <div>
//         <button
//           className="border-2 bg-gray-400 text-white px-4 py-2 rounded-md "
//           onClick={() => handleChange()}
//         >
//           -
//         </button>
//         <button
//           className="border-2 bg-gray-400 text-white px-4 py-2 rounded-md "
//           onClick={() => handleChane()}
//         >
//           +
//         </button>
//       </div>
//       <button
//         className={`${
//           count >= 10
//             ? "bg-green-600 text-green-600"
//             : "bg-gray-400 text-gray-400"
//         } px-10 `}
//       >
//         o
//       </button>
//       <button
//         className={`${
//           count >= 20
//             ? "bg-green-600 text-green-600"
//             : "bg-gray-400 text-gray-400"
//         } px-10 `}
//       >
//         o
//       </button>
//       <button
//         className={`${
//           count >= 30
//             ? "bg-green-600 text-green-600"
//             : "bg-gray-400 text-gray-400"
//         } px-10 `}
//       >
//         o
//       </button>
//       <button
//         className={`${
//           count >= 40
//             ? "bg-green-600 text-green-600"
//             : "bg-gray-400 text-gray-400"
//         } px-10 `}
//       >
//         o
//       </button>
//       <button
//         className={`${
//           count >= 50
//             ? "bg-green-600 text-green-600"
//             : "bg-gray-400 text-gray-400"
//         } px-10 `}
//       >
//         o
//       </button>
//       <button
//         className={`${
//           count >= 60
//             ? "bg-green-600 text-green-600"
//             : "bg-gray-400 text-gray-400"
//         } px-10 `}
//       >
//         o
//       </button>
//       <button
//         className={`${
//           count >= 70
//             ? "bg-green-600 text-green-600"
//             : "bg-gray-400 text-gray-400"
//         } px-10 `}
//       >
//         o
//       </button>
//       <button
//         className={`${
//           count >= 80
//             ? "bg-green-600 text-green-600"
//             : "bg-gray-400 text-gray-400"
//         } px-10 `}
//       >
//         o
//       </button>
//       <button
//         className={`${
//           count >= 90
//             ? "bg-green-600 text-green-600"
//             : "bg-gray-400 text-gray-400"
//         } px-10 `}
//       >
//         o
//       </button>
//       <button
//         className={`${
//           count >= 100
//             ? "bg-green-600 text-green-600"
//             : "bg-gray-400 text-gray-400"
//         } px-10 `}
//       >
//         o
//       </button>
//     </div>
//   );
// };

// export default ProgressBar;


import React, { useState } from "react";

const ProgressBar = () => {
  const [count, setCount] = useState(0);
  const handleChange = () => {
    // setCount((prev) => (prev - 10) % 10);
    // setCount((prev)=>(prev-10)<=0? 0: (prev-10));
    setCount((prev)=>Math.max(prev-10,0));
  };
  const handleChane = () => {
    // setCount((prev) => (prev + 10) % 110);
    setCount((prev)=>(prev+10)>=100?100: (prev+10));
  };
  return (
    <div>
      <h1> {count}</h1>
      <div>
        <button
          className="border-2 bg-gray-400 text-white px-4 py-2 rounded-md "
          onClick={() => handleChange()}
        >
          -
        </button>
        <button
          className="border-2 bg-gray-400 text-white px-4 py-2 rounded-md "
          onClick={() => handleChane()}
        >
          +
        </button>
      </div>
      <button
        className={`${
          count >= 10
            ? "bg-green-600 text-green-600"
            : "bg-gray-400 text-gray-400"
        } px-10 `}
      >
        o
      </button>
     { [...Array(10)].map((_,i)=>(
        <button
        className={`${
          count >= (i*10)
            ? "bg-green-600 text-green-600"
            : "bg-gray-400 text-gray-400"
        } px-10 `}
      >
        o
      </button>
     ))}
    </div>
  );
};

export default ProgressBar;
