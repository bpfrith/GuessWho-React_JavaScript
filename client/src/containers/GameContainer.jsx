import React from 'react'
import PeopleList from '../components/PeopleList.jsx'
import QuestionList from '../components/QuestionsList.jsx'
import Question from '../components/Question.jsx'
import GuessWhoCharacterShuffle from '../components/GuessWhoCharacterShuffle.jsx'
import GuessWhoCharacter from '../components/GuessWhoCharacter.jsx'

class GameContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      people: [
        {name: 'Minnie', tail: true, hair: false, clothes: true, hat: false, bow: true, image: '../../images/minnie_mouse.png'},
        {name: 'Donald', tail: true, hair: false, clothes: true, hat: true, bow: true, image: '../../images/donald_duck.png'},
        {name: 'Mickey', tail: true, hair: false, clothes: true, hat: false, bow: false, image: '../../images/mickey-mouse.png'}
      ],
      questions: [
        {ques: 'has a tail?'},
        {ques: 'has hair?'},
        {ques: 'is wearing clothes?'},
        {ques: 'is wearing a hat?'},
        {ques: 'is wearing a bow?'}
      ],
    focusQuestion: null, guessWho: {}
    }
  }

  setFocusQuestion(){
    this.setState({focusQuestion: question})
  }

  componentDidMount(){
    let guessWho = this.state.people.slice()
    for (var i = guessWho.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = guessWho[i]
      guessWho[i] = guessWho[j]
      guessWho[j] = temp
    }
    this.setState({guessWho:guessWho[0]})
  }

  getGuessWhoCharacter(){
    this.state.people.map(function(chars) {
    if(chars.name === this.state.guessWho) {
      console.log(chars)
      }
    }.bind(this))
  }

  render() {
    console.log('focus', this.focusQuestion)
    return(
      <div>
        <h1>GuessWho!?</h1>
        <PeopleList characters={this.state.people}/>
        <QuestionList character={this.state.guessWho}
          questions={this.state.questions}
          selectQuestion={this.setFocusQuestion.bind(this)}
          focusQuestion={this.focusQuestion}/>
        <Question question={this.focusQuestion}/>
        <GuessWhoCharacterShuffle characters={this.state.people}/>
        <GuessWhoCharacter character={this.state.guessWho}/>  
      </div>
    )
  }
}

export default GameContainer