import React from 'react'
import StateSome from './StateSome';

const State = () => {
    const a=["performance","testing","development","maintance","design"];

  return (
    <div>
        <div>
            <StateSome a={a}/>
        </div>
        
    </div>
  )
}

export default State