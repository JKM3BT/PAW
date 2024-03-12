import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CharacterList from './CharacterList'

function App() {
  const [count, setCount] = useState(0)
  const [moviesCharacters, setMoviesCharacters] = useState()

  async function fetchedCharacters(){
    // fetch("https://rickandmortyapi.com/api/character")
    // .then(res=>{
    //   return res.json()
    // })
    // .then(data=> {
    //   console.log(data)
    //   const characters = data.results.map(character => {
    //     return {
    //       id: character.id,
    //       name: character.name,
    //       gender: character.gender,
    //       species: character.species,
    //       status: character.status
    //     }
    //   })
    //   console.log(characters)
    // })
    // .catch(err=>{console.log(err)})
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data = await res.json()
    const characters = data.results.map(character => {
      return {
        id: character.id,
        name: character.name,
        gender: character.gender,
        species: character.species,
        status: character.status
      }
    })
    console.log(characters)
  }
  return (
    <>
      <section>
        <button onClick={fetchedCharacters}>Fetch Characters</button>
      </section>

      <section>
        <CharacterList chars={moviesCharacters}/>
      </section>
    </>
  )
}

export default App
