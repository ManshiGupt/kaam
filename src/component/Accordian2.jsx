import { useEffect } from "react"



const Accordian2 = ({l,i}) => {

     const p=["gupta","singh","tomar","rai"];
    // const i= 2;
     const filterList= l.filter((e,inde)=>inde===i)
    useEffect(()=>{
        console.log("l",l);
        console.log("i",i);
        console.log("l[i]",filterList)
    },[])
    
  return (
    <div>
       
       {filterList.map((data,i)=>(
        <div>
            {data}
            </div>
       ))}
       {/* <h2>{filterList}</h2> */}

       
    </div>
  )
}

export default Accordian2