import React, { useState } from "react";

const Qui = () => {
  const [ind, setInd] = useState(null);
  const[right, setRight]= useState(false);
  const[click, setClick]= useState(true);
  const quest = {
    "what is this number?": ["gwdhgdd", "frf", "DDD", "dvff"],
    "whois this?": ["gwdhgddd", "fdrf", "DdDD", "ddff"],
    "ram is what doing?": ["dee", "dhvehgeg", "egytey", "egde"],
  };
  const ans=["frf","ddff","dhvehgeg"];
  const handleAns=(i,que)=>{
    // setInd(i);
    alert(que);
    // alert(i);
    setClick(false);

    if(ans.includes(quest[que][i])){
            setRight(true);
    }
  }
  
  return (
    <div className="bg-red-300 rounded-lg px-4">
     {Object.keys(quest).map((que,ink)=>(
        <div className="p-4">
            {que}
            {quest[que].map((answer,i)=>(
                <div key={i} className="py-1">
                  <li><button className="border-2 bg-gray-400 text-white px-4 py-2 rounded-md " onClick={()=>handleAns(i,que)}>{answer}</button></li>  
                 
                  </div>
            ))}
            
            <button className="border-1 bg-red-700 ml-64 text-white px-4 py-2 rounded-md ">Submit</button>
            {/* <a href="/Result">ejguegy</a> */}
            
        </div>
     ))}
    <button className={`${click?"bg-blue-700":right?"bg-green-700":"bg-red-700"} px-40 py-10 font-bold text-5xl text-white rounded-md mb-10`}>Result</button>
    </div>
  );
};

export default Qui;
