import React, { useState } from "react";
import TosterChild from "./TosterChild";

const Toaster = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(["sucess", "error", "info"]);
  const [type, setType] = useState("");
  const [duration, setDuration] = useState(3000);
  const [data, setData] = useState({
    sucess: ["datasaved sucessfully", "sucess", 3000],
    error: ["error in saving", "error", 4000],
    info: ["information loaded", "info", 2000],
  });

  const handlee = (data) => {
    setMessage(data[0]);
    setType(data[1]);
    setDuration(data[2]);
    setShow(true);
    const intervall = setTimeout(() => {
      setShow(false);
    }, duration);
  };

  return (
    <div>
      {/* <TosterChild message={message} type={type} duration={duration} /> */}
      <div className="flex justify-center gap-10">
        <button
          className="border-2 border-black p-4"
          onClick={() => handlee(data.sucess)}
        >
          show sucees
        </button>
        <button
          className="border-2 border-black p-4"
          onClick={() => handlee(data.error)}
        >
          show error
        </button>
        <button
          className="border-2 border-black p-4"
          onClick={() => handlee(data.info)}
        >
          show info
        </button>
      </div>
      {show && type == "sucess" && (
        <TosterChild message={message} type={type} duration={duration} />
      )}
      <div className="mt-20">
        {show && type == "error" && (
          <TosterChild message={message} type={type} duration={duration} />
        )}
      </div>
      <div className="mt-20">
        {show && type == "info" && (
          <TosterChild message={message} type={type} duration={duration} />
        )}
      </div>
    </div>
  );
};

export default Toaster;
