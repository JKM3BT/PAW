import './App.css';
import Api from './api';
import { useEffect } from 'react';

function App() {

  const PobierzDane = () => {
    fetch("https://swapi.dev/api/people")
  }
  useEffect(PobierzDane, [])

  return (
    <Api/>
  );
}

export default App;
