import React, { useState } from "react";
import TosterChild from "./TosterChild";

const Toaster = () => {
  const [toasts, setToasts] = useState([]);

  const data = {
    sucess: { message: "Data saved successfully", type: "sucess", duration: 3000 },
    error: { message: "Error in saving", type: "error", duration: 4000 },
    info: { message: "Information loaded", type: "info", duration: 2000 },
  };

  const handlee = ({ message, type, duration }) => {
    const id = Date.now();
    const newToast = { id, message, type };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, duration);
  };

  return (
    <div className="p-10">
      <div className="flex justify-center gap-10 mb-10">
        <button className="border-2 border-black p-4" onClick={() => handlee(data.sucess)}>Show Success</button>
        <button className="border-2 border-black p-4" onClick={() => handlee(data.error)}>Show Error</button>
        <button className="border-2 border-black p-4" onClick={() => handlee(data.info)}>Show Info</button>
      </div>

      {/* Toast container */}
      <div className="fixed top-5 right-5 z-50">
        {toasts.map((toast) => (
          <TosterChild key={toast.id} message={toast.message} type={toast.type} />
        ))}
      </div>
    </div>
  );
};

export default Toaster;
