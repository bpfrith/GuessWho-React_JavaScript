import React from 'react'

const Characters =function(props){
  return(
    <div>
    <img className="pics" src={props.image}></img>
    </div>
  )
}

export default Characters