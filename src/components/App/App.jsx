import { useState } from 'react';
import './App.css';
import HeroList from '../HeroList/HeroList';

function App() {

  let myHeroes = [
    {
      name: 'Mario',
      nemesis: 'Bowser'
    },
    {
      name: 'Link',
      nemesis: 'Ganondorf'
    },
    {
      name: 'Master Chief',
      nemesis: 'The Covenant'
    },
    {
      name: 'Lara Croft',
      nemesis: 'Trinity organization'
    },
    {
      name: 'Solid Snake',
      nemesis: 'Liquid Snake'
    },
    {
      name: 'Cloud Strife',
      nemesis: 'Sephiroth'
    },
    {
      name: 'Samus',
      nemesis: 'Ridley'
    },
    {
      name: 'Geralt',
      nemesis: 'The Wild Hunt'
    }
  ]

  const [heroesList, setHeroesList] = useState(myHeroes)

  return (
    <>
      <header className="Header">
        <h1>Legendary Video Game Heroes</h1>
      </header>
      <div className="App">
        <div>
          Splatting to the DOM looks like this:
          <pre>
            <ul>
              <HeroList heroesList={heroesList}/>
            </ul>
          </pre>
        </div>
      </div>
    </>
  );
}

export default App;
