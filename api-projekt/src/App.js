import './App.css';
import Api from './api';
import { useEffect, useState } from 'react';

function App() {

  const[people,setPeople] = useState([])
  const PobierzDane = () => {
    fetch("https://swapi.dev/api/people")
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(data => setPeople(data.results))
    .catch(err => console.log(err.message))
  }
  useEffect(PobierzDane, [])

  return (
    <>
      <header>
        p
      </header>
      <Api people={people}/>
      <footer>
        p
      </footer>
    </>
  );
}

export default App;
