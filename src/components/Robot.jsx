import React from "react";

function Robot({robot}) {
    
    return(
      <div className='robot'>
        <div className='img'>
        {robot.imageUrl && <img src={robot.imageUrl} alt={robot.name} />}
        </div>
        <div className='info'>
        <h2>{robot.name}</h2>
        <p>{robot.email}</p>
        </div>
      </div>
    )
  }

export default Robot;