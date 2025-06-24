import React, { useState } from "react";
import Modal from "./Modal";

const CalenderDate = () => {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [dates, setDates] = useState([1, 2, 3, 4, 5, 6, 7]);
//   const [event, setEvent] = useState(Array.from({ length: 7 }));
  const [event, setEvent] = useState([... Array(7).fill(" ")]);
  const [index, setIndex] = "";
  const [showModal, setShowModal] = useState(false);
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
  const handleEvent = (i, time) => {
    setShowModal(prev=>!prev);
    console.log("i",dates[i]+1)
    console.log("time",time)
    let newArray= [...event];
    console.log(newArray);
    newArray[i]= "manhsi"
    setEvent(newArray)
    
  };
  const filterDatePrev = () => {
    setDates([]);
  };
  const filterDateNext = () => {
    setDates((prev) => prev.map((item, i) => (item + 7) % 30));
  };
  return (
    <div>
      {/* CalenderDate */}
      <div className="relative border-2 border-black ">
        <div className="sticky top-0 z-50 bg-black text-white p-4">
          <div className=" flex justify-between">
            <div className=" text-5xl">MAY 2018</div>
            <div className=" flex ">
              <button
                className="border-2 border-white rounded-md my-10 px-4"
                onClick={() => filterDatePrev()}
              >
                prev
              </button>
              <h1 className="pt-10 px-4">Today</h1>
              <button
                className="border-2 border-white rounded-md my-10 px-4"
                onClick={() => filterDateNext()}
              >
                next
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 justify-center pl-20">
            {days.map((day, i) => (
              <div className="border-2 border-white">{day}</div>
            ))}

            {dates.map((date, i) => (
              <div className="   ">{date + 1}</div>
            ))}
          </div>
        </div>

        <div className="p-4 grid grid-cols-8 border-2 border-black pl-14">
          <div>
            {times.map((time, index) => (
              <div className="flex">
                {time}
                {event.map((item, i) => (
                  <div
                    className=" border-2 border-black px-24 cursor-pointer"
                    onClick={() => handleEvent(i, time)}
                  >
                    {/* {i}{" "} */}
                    {item}
                  </div>
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
         
          {showModal && <Modal setShowModal={setShowModal}/>}
        </div>
      </div>
    </div>
  );
};

export default CalenderDate;
