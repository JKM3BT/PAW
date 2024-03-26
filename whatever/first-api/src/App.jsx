import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movies from './Movies'

function App() {

  const [movies, setMovies] = useState([]);
  const pobierzDaneOFilmach = () => {
    fetch("https://swapi.dev/api/films")
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(data => setMovies(data.results))
      .catch(err => console.log(err.message))
  }

  useEffect(pobierzDaneOFilmach, [])
  return (
    <>
      <h1> Super filmu </h1>
      <button>Pobierz Dane</button>
      <Movies listaFilmow={movies}/>
    </>
  )
}

export default App
