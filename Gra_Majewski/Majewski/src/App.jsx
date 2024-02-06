import { useState } from 'react'
import './App.css'

function App() {
  let i = 0;
  let points = 0;
  const listOfQuestions = ["","Nazwa aktualnej stolicy Polski","Największym (powierzchniowo) państwem na świecie jest...",
  "Imię i nazwisko człowieka uznanego za odkrywcę Ameryki","Jak się mówi poprawnie: Lubuskie, czy Lubelskie?",
  "Wyspa, na której żyją Kangury?","Jaka jest poprawa forma: Arktyka, Antarktyka, czy Antarktyda?"];

  const listOfAnswers = ["Warszawa","Rosja","Krzysztof Kolumb","To są dwa różne województwa","Australia","Wszystkie"];

  const [question, setQuestion] = useState(listOfQuestions[i]);
  const [answer, setAnswer] = useState(listOfAnswers[i]);

  return (
    <div id='all'>
      <h2>Points:{points}</h2>
      <h1>{question}</h1>
      <input id='answer_box' type='text'/>
      <br/>
      <input id="submit_answer" type='submit' title="Sprawdź"/>
    </div>
  )
}

export default App
