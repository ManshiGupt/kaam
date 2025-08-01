import React, { useState } from 'react'

const Name = () => {
    const[data,setData]= useState([])
    const a= ["https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw2rsGYQEZx5cmVfOnFQZKX-&ust=1754043597302000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLDz593v5o4DFQAAAAAdAAAAABAE","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYqoKTu_o3Zns2yExbst2Co84Gpc2Q1RJbA&s","https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"]
  return (
    <div>name
       {a.map((data,i)=>(
        <div>
            <img src={data}/>
            </div>
       ))}
      
        {/* {<Modal/>} */}
    </div>
  )
}

export default Name