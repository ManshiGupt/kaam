import { useEffect } from "react"



const Accordian2 = (l,index) => {

     const k=["gupta","singh","tomar","rai"];
    // const index= 2;
     const filterList= k.filter((e,i)=>i===index)
    // useEffect(()=>{
    //     console.log("l",l);
    //     console.log("index",index);
    //     console.log("l[index]",l[2])
    // },[])
    
  return (
    <div>
       <h1>cjhcj</h1>
       {/* {filterList.map((data,i)=>(
        <div>
            {data}
            </div>
       ))} */}
       <h2>{filterList}</h2>

       
    </div>
  )
}

export default Accordian2