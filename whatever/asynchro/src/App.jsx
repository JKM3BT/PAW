import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  async function fetchedCharacters(){
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
  }
  return (
    <>
      <section>
        <button onClick={fetchedCharacters}>Fetch Characters</button>
      </section>

      <section>
        <p>To jest miejsce na wyświetlanie informacji o postaciach</p>
      </section>
    </>
  )
}

export default App
