import React from 'react'

const TableRecord = ({data}) => {
  return (
    <div>
     {data.map((data)=>(
        <div key={data.id}>
            {data.id}
            {/* {data.name}
            {data.height} */}
        </div>
     ))}
    
     <button>next</button>
    </div>
  )
}

export default TableRecord