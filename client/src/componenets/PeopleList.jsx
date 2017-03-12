import React from 'react'
import Characters from './characters.jsx'

class PeopleList extends React.Component{
  render(){
    const char = this.props.character.map(function(characteristics, index){
      return(
        <Characters image={characteristics.image} key={index}></Characters>

      )
    })

    return(
      <div className = "picsDiv"
        {char}
      </div>
    )
  }
}

export default PeopleList