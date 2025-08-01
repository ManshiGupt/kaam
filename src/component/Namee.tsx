import React, { useState } from 'react'
import Modal from './Modal'
const a= ["https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw2rsGYQEZx5cmVfOnFQZKX-&ust=1754043597302000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLDz593v5o4DFQAAAAAdAAAAABAE","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYqoKTu_o3Zns2yExbst2Co84Gpc2Q1RJbA&s","https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"]
const Namee = () => {
    // const[data,setData]= useState([])
    const[isModalOpen,setIsModalOpen]= useState(false)
    const[data,setData]= useState(a[2])
    const[currentImage,setCurrentImage]= useState(2)
   const handleCurrent=(i)=>{
    setCurrentImage(i)
   }
  
  return (
    <div>name
       {/* {a.map((data,i)=>( */}
        <div>
            {currentImage}
            <img src={a[currentImage]}/>
            <button onClick={()=>setIsModalOpen(true)}>change</button>
            </div>
       {/* ))} */}
      
        {isModalOpen &&<Modal a={a} setCurrentImage={setCurrentImage} setIsModalOpen={setIsModalOpen} handleCurrent={handleCurrent}/>}
    </div>
  )
}

export default Namee