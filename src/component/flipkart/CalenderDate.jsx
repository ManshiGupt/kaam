import React, { useState } from "react";

const CalenderDate = () => {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [dates,setDates] = [1, 2, 3, 4, 5, 6, 7];
  const [event, setEvent] = useState(Array.from({ length: 7 }));
  const[setIndex,c]
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
  const handleEvent=(i,time)=>{
    showModal(true)
  }
  const filterDatePrev=()=>{
    setDates()
  }
  const filterDateNext=()=>{
    setDates()
  }
  return (
    <div>
      {/* CalenderDate */}
      <div className="border-2 border-black ">
        <div className="sticky top-0 z-50 bg-black text-white p-4">
          <div className=" flex justify-between">
            <div className=" text-5xl">MAY 2018</div>
            <div className=" flex ">
              <button className="border-2 border-white rounded-md my-10 px-4" onClick={()=>filterDatePrev()}>
                prev
              </button>
              <h1 className="pt-10 px-4">Today</h1>
              <button className="border-2 border-white rounded-md my-10 px-4" onClick={()=>filterDateNext()}>
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

        <div className="p-4 grid grid-cols-8 border-2 border-black pl-40">
          <div>
            {times.map((time, index) => (
              <div className="flex">
                {time}
                {event.map((item, i) => (
                  <div className=" border-2 border-black p-28" onClick={()=>handleEvent(i,time)}>{/* {i} */}</div>
                ))}
              </div>
            ))}
          </div>
          {/* <div className="grid grid-cols-7 border-2 border-black"> */}
          {/* {event.map((item,i)=>(
                <div className=" border-2 border-black p-20">
                  
                    </div>
               ))} */}

          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default CalenderDate;
