// import React, { useEffect, useState } from 'react'

// const StopWtch1 = () => {
//     const[progress,setProgress]= useState(0)
//     const[timer,setTimer]= useState()


//     useEffect(()=>{
       
//         // setTimer( setInterval(()=>{
//         //     setProgress(prev=>prev+1)
//         // },2000))

//         return(()=>{
//             clearInterval(timer)
//         })
         
        
//     },[])

//     const handleStart=()=>{
//         setTimer( setInterval(()=>{
//             setProgress(prev=>prev+1)
//         },2000))
//     }
//     const handleStop=()=>{
//         clearInterval(timer)
//     }
//     const handleReset=()=>{
//         setProgress(0)
//         clearInterval(timer)
//     }
//   return (
//     <div>
//         {progress}
//         <button className='bg-gray-400 p-4 m-10 rounded-2xl'onClick={()=>handleStart(prev=>prev>=100?100:prev+10)}>start</button>
//         <button className='bg-gray-400 p-4 m-10 rounded-2xl ' onClick={()=>handleStop(prev=>prev<10?0:prev-10)}>stop</button>
//         <button className='bg-gray-400 p-4 m-10 rounded-2xl ' onClick={()=>handleReset(prev=>prev<10?0:prev-10)}>reset</button>
//     </div>
//   )
// }

// export default StopWtch1

import React, { useEffect, useRef, useState } from 'react'

const StopWtch1 = () => {
    const[progress,setProgress]= useState(0)
    const timer= useRef(null)


    useEffect(()=>{
       
        // setTimer( setInterval(()=>{
        //     setProgress(prev=>prev+1)
        // },2000))

        // return(()=>{
        //     clearInterval(timer)
        // })
         
        
    },[])

    const handleStart=()=>{
        timer.current= setInterval(()=>{
            setProgress(prev=>prev+1)
        },500)
    }
    const handleStop=()=>{
      clearInterval(timer.current)
    }
    const handleReset=()=>{
        setProgress(0)
         clearInterval(timer.current)
    }
  return (
    <div>
        {progress}
        <button className='bg-gray-400 p-4 m-10 rounded-2xl'onClick={()=>handleStart(prev=>prev>=100?100:prev+10)}>start</button>
        <button className='bg-gray-400 p-4 m-10 rounded-2xl ' onClick={()=>handleStop(prev=>prev<10?0:prev-10)}>stop</button>
        <button className='bg-gray-400 p-4 m-10 rounded-2xl ' onClick={()=>handleReset(prev=>prev<10?0:prev-10)}>reset</button>
    </div>
  )
}

export default StopWtch1