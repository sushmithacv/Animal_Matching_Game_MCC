import React, { useState, useEffect } from 'react';
import { animals } from '../assets/AnimalsDb';  
import '../assets/css';  

function Game() {
  const [correctAnimal, setCorrectAnimal] = useState(null);  
  const [result, setResult] = useState(null);  

  
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * animals.length); 
    setCorrectAnimal(animals[randomIndex]);  
  }, []);  

  return (
    <div className="game-container">
      <div className="game-board">
        {/* Display the randomly selected animal name */}
        <div className="row">
          <div className="column">
            <p className="animal-name">{correctAnimal?.name}</p> {/* Display the name of the randomly chosen animal */}
          </div>
        </div>

        {/* The rest of your code (such as displaying images, handling clicks) goes here */}

        {result && (
          <div className="result">
            {result === 'win' ? 'You Win!' : 'You Lose!'}
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
