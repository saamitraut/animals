import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
     const newAnimal = getRandomAnimal();
  
     if (!animals.includes(newAnimal)) {
       setAnimals([...animals, newAnimal]);
     }
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow key={index} type={animal} values0={index} setAnimals={setAnimals} />;
  });

  return (
    <div className="app">
      <h1>TOTEL NO OF ANIMAL ADD :- {animals.length}</h1>
    {animals.length <5 ?
      <button onClick={handleClick}>Add Animal</button>
      :
      <button onClick={()=>alert('not more then 5')}>Add Animal</button>
      }
      <div className="animal-list">{renderedAnimals}</div>
      <button onClick={()=>setAnimals([])}>clear</button>
    </div>
  );
}

export default App;
