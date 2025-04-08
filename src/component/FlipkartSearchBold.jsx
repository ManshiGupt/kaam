import React, { useState } from 'react'

const FlipkartSearchBold = () => {
    const[isBold,setIsBold]= useState(false);
    const[kaam,setKaam]= useState("");

   

    const handle=()=>{
        const p=["gupta","gunami","guota","gulam"];
        const char= "gu";
        const ram="gupta";
        // const regu= new RegExp(char,"i");
        // setIsBold(regu.test(ram));
        const regu= new RegExp(char,"g");
        const l= ram.match(regu);
        setKaam(l);

    }
  return (
    <div>FlipkartSearchBold
        {isBold?"t":"f"}
        {kaam}
        <input />
        <button onClick={()=>handle()}>onhcd</button>
    </div>
  )
}

export default FlipkartSearchBold