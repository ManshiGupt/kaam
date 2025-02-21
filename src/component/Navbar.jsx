import React, { useEffect } from 'react'
import { Link } from 'react-router'
import useShowOnline from '../utils/useShowOnline'

const Navbar = () => {

  const{isOnline}= useShowOnline();
  // useEffect(()=>{
    
  //   handleConsole();
  // },[])

  // const handleConsole=()=>{
  //   console.log("dhgdjhg");
  // }
  // const isOnline= false
  
  return (
    <div className='flex flex-row gap-10 justify-around'>
        {/* <h1 className='text-5xl'>home</h1> */}
      { isOnline? <h1>"ha hai online" </h1>:  <h1>"nhi hai online"</h1>}
        <Link to="/a" className='text-5xl'>Home</Link>
        <Link to="/grocery" className='text-5xl'>grocery</Link>
        <Link to="/b" className='text-5xl'>About</Link>
        <Link to="/user/123" className='text-5xl'>ConstactUs</Link>
        <Link to="/d" className='text-5xl'>Gallery</Link>
        {console.log("syy")}
    </div>
  )
}

export default Navbar