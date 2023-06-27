import './AnimalShow.css';
import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type,values0,setAnimals }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setAnimals((animal) => animal.filter((_, index) => index !== values0));
  };


  return (
    <div className="animal-show" >
      <img className="animal" alt="animal" src={svgMap[type]} onClick={handleClick} />
      <p>{clicks}</p>
      <img height={20} src={heart} onClick={()=>setClicks(clicks+1)} />
     
   
    </div>
  );
}

export default AnimalShow;
