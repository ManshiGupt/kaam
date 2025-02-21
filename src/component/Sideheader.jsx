import React from "react";

const Sideheader = () => {
  return (
    <div className="flex flex-col gap-20 px-4 h-screen w-14 relative border-x-2">
      {/* Header Section */}
      <div className="flex items-center gap-5 relative">
        <div className="flex flex-col gap-2 items-center">
          <h1>icon</h1>
          <h1>Nam </h1>
        </div>

        {/* Vertical Line */}
        {/* <div className="absolute top-0  h-screen left-40 w-1 bg-gray-800"></div> */}
      </div>

      {/* Footer Section */}
      <div className="flex flex-col gap-5 absolute bottom-4">
        {/* Placeholder Footer Items */}
        {/* <div className="absolute -top-40  h-screen right-0 w-1 bg-gray-800"></div> */}
        <h1 >Auto </h1>
        <h1>Auto </h1>
        <h1>icon</h1>
      </div>
    </div>
  );
};

export default Sideheader;
