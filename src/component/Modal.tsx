import React from 'react'
const ab= ["https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw2rsGYQEZx5cmVfOnFQZKX-&ust=1754043597302000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLDz593v5o4DFQAAAAAdAAAAABAE","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYqoKTu_o3Zns2yExbst2Co84Gpc2Q1RJbA&s","https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"]

const Modal = ({a,setCurrentImage,setIsModalOpen,handleCurrent}) => {
    const handleClick=(i)=>{
        setCurrentImage(4);
        // setIsModalOpen(prev=>!prev)
    }
  return (
    <div>Modal
        {setCurrentImage}mog
       
        <div className='flex gap-10'>

       
        <div className='bg-red-700 p-10' onClick={()=>handleCurrent(0)}>
            card1
        </div>
        <div className='bg-green-700 p-10' onClick={()=>handleCurrent(1)}>
            card2
        </div>
        <div className='bg-yellow-700 p-10' onClick={()=>handleCurrent(2)}>
            card3
        </div>
        <div className='bg-orange-500 p-10' onClick={()=>handleCurrent(3)}>
            card4
        </div>
        </div>

    </div>
  )
}

export default Modal