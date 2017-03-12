import React from 'react';
import ReactDOM from'react-dom';
import GameContainer from './src/containers/GameContainer.jsx';


window.onload = () => {
  ReactDOM.render(
    <GameContainer title="GuessWho"/>,
    document.getElementById('app')
  );
}