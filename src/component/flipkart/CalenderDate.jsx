import React, { useState } from "react";

const CalenderDate = () => {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dates = [1, 2, 3, 4, 5, 6, 7];
  const [event,setEvent]= useState(Array.fr)
  const times = [
    "1AM",
    "2AM",
    "3AM",
    "4AM",
    "5AM",
    "6AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
    "1AM",
  ];
  return (
    <div>
      {/* CalenderDate */}
      <div className="border-2 border-black ">
        <div className="sticky top-0 z-50 bg-black text-white p-4">
          <div className=" flex justify-between">
            <div className=" text-5xl">MAY 2018</div>
            <div className=" flex ">
              <button className="border-2 border-white rounded-md my-10 px-4">
                prev
              </button>
              <h1 className="pt-10 px-4">Today</h1>
              <button className="border-2 border-white rounded-md my-10 px-4">
                next
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 justify-center pl-20">
          
            {days.map((day, i) => (
              <div className="border-2 border-white">{day}</div>
            ))}
            
            {dates.map((date, i) => (
              <div className="   ">{date}</div>
            ))}
            
          </div>
        </div>

        <div className="p-4">
            {times.map((time,i)=>(
                <div>
                    {time}
                    </div>
            ))}
            <div className="grid grid-cols-7 border-2 border-black">
               {event.map((item,i)=>(
                <div>
                    {i}
                    </div>
               ))}
                        
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default CalenderDate;
