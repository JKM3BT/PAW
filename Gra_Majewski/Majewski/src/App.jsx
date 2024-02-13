import { useState } from 'react'
import './App.css'

function App() {
  let i = 0;
  const [points, setPoints] = useState(0)
  const listOfQuestions = ["","Nazwa aktualnej stolicy Polski","Największym (powierzchniowo) państwem na świecie jest...",
  "Imię i nazwisko człowieka uznanego za odkrywcę Ameryki","Jak się mówi poprawnie: Lubuskie, czy Lubelskie?",
  "Wyspa, na której żyją Kangury?","Jaka jest poprawa forma: Arktyka, Antarktyka, czy Antarktyda?"];

  const listOfAnswers = ["","warszawa","rosja","krzysztof kolumb","to są dwa różne województwa","australia","wszystkie"];

  const [question, setQuestion] = useState(listOfQuestions[i]);
  const [answer, setAnswer] = useState(listOfAnswers[i]);

  function showTime(){
    i=1;
    setQuestion(listOfQuestions[i]);
    setPoints(0);
    let startAnswer = document.getElementById("answer").innerHTML = "";
    return true;
  }
  
  function nextQuestion(){
    while (showTime == true){
      let userAnswer = document.getElementById("answer").value;
      if ( userAnswer == answer){
        setPoints(points+1);
        i++;
        setQuestion(listOfQuestions[i]);
        setAnswer(listOfAnswers[i]);
        let newPoints = document.getElementById("punkty").innerHTML = "Points:"+points;
        let newQuestion = document.getElementById("pytanie").innerHTML = question;
      }
      else{
        i++;
        setQuestion(listOfQuestions[i]);
        setAnswer(listOfAnswers[i]);
        let newQuestion = document.getElementById("pytanie").innerHTML = question;
      }
    }
  }
  
  return (
    <section id='all'>
      <h2 id='punkty'>Points:{points}</h2>
      <h1 id="pytanie">{question}</h1>
      <form>
        <input id='answer' type='text'/>
        <br/>
        <input id="submit_answer" type='button' value="Sprawdź odpowiedź" onClick={nextQuestion}/>
        <input id="startOrReset" type='button' value="Start/Reset" onClick={showTime}/>
      </form>

    </section>
  )
}

export default App
