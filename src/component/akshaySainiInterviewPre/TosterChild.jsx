import React from 'react';

const TosterChild = ({ message, type }) => {
  const bgColor =
    type === "sucess" ? "bg-green-600"
    : type === "error" ? "bg-red-600"
    : "bg-blue-600";

  return (
    <div className={`text-white p-4 mb-3 rounded shadow-lg ${bgColor}`}>
      {message}
    </div>
  );
};

export default TosterChild;
