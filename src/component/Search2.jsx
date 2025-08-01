// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Search2 = () => {
//   const [query, setQuery] = useState("");
//   const [list, setList] = useState([]);
//   const [isBold, setBold] = useState(false);
  
//   const fetchData = async () => {
//     try {
//       const resp = await axios.get(
//         `https://app.vedicpandit.in/get-all-poojas?searchText=${query}&category=&currentPage=1&limit=0`
//       );

//       console.log("resp", resp.data.data);
//       // const regu = new RegExp(query, "g");
//       setList(resp.data.data);
//       //   const l= list.map((data)=>{
//       //     data.
//       //   })
//       //   console.log(l)

//       // return resp.data.data;
//     } catch (error) {
//       console.log("not able to fetch", error);
//     }
//   };

//   useEffect(() => {
  
//     const k = setTimeout(
//       fetchData()
//     , 300);

//     const cache = k;
//     console.log("k", k);
//     console.log("cache", cache);

//     return () => clearTimeout(k);
//   }, [query]);

//   const setQuhandleery = (event) => {
//     setQuery(event);
//   };
//   const flipka=(title)=>{
//     const k= title.slice(0,query.length);
//     const p= title.slice(query.length);
//     return (<><strong>{k}</strong><span>{p}</span></>)
   
//     // const a= new RegExp(`(${query})`,"gi");
//     // const part= title.split(a);
//     // return part.map((d)=>d.toLowerCase()==query.toLowerCase()?<strong>{d}</strong>:<span>{d}</span>)
//   }

  
//   return (
//     <div className=" flex flex-col justify-center">
//       <input
//         value={query}
//         className="border-2 border-black bg-gray-300 flex flex-col justify-center"
//         onChange={(e) => setQuhandleery(e.target.value)}
//       />
//       <ul className="h-40  overflow-y-scroll w-96  flex flex-col justify-center">
//       {list.map((data,i)=>(
//         <li key={i}>
//           {flipka(data.title)}
//         </li>
//       ))}
//       </ul>
//     </div>
//   );
// };

// export default Search2;



import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Search2 = () => {
  const[query,setQuery]= useState("")
  const[list,setList]= useState([])

  const fetchData = async () => {
        try {
          const resp = await axios.get(
            `https://app.vedicpandit.in/get-all-poojas?searchText=${query}&category=&currentPage=1&limit=0`
          );
          console.log(query)
          console.log("resp", resp.data.data);
       
           setList(resp.data.data);
         
        } catch (error) {
          console.log("not able to fetch", error);
        }
      };
    useEffect(()=>{
      if(query.trim()==" ") return;
      let k;
      if(query.length>1){
         k= setTimeout(()=>{
          console.log("hi insidesettimeout")
          fetchData()
        },1000)
  
      }

     
      return()=>clearTimeout(k)

     
    },[query])
    
  
  return (
    <div>
      <input type='text' placeholder='search' onChange={(e)=>setQuery(e.target.value)}/>
      <div className=''>
        <ol className='space-y-4 max-h-80 overflow-y-auto '>
         {list.map((data,i)=>(
          <li>
            {data.title}
          </li>
         ))}
        </ol>
      </div>
    </div>
  )
}

export default Search2
