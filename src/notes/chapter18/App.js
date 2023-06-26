import { useState } from 'react';
import AnimalShow from './AnimalShow';
import 'bulma/css/bulma.css';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };


  const renderedAnimals = animals.map((animal, index) => {
    return <div className="column is-4"><AnimalShow type={animal} key={index} /></div>;
  });

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      
      
      <div className="container">
        <section className="section">
          <div className="columns">
            {renderedAnimals}
          </div>
        </section>
      </div>
      
    </div>
  );
}

export default App;
