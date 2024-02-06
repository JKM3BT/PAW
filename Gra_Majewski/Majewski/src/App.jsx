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
    answer_here = document.getElementById("answer_box").innerHTML = "";
  } 

  function next(){
    answer_here = document.getElementById("answer_box").value;
    if (answer_here == answer){
      setPoints(points+1);
      i++;
      setQuestion(listOfQuestions[i]);
      setAnswer(listOfAnswers[i]);
      pytanie_here = document.getElementById("pytanie").innerHTML = question;
    }
    else{
      i++;
      setQuestion(listOfQuestions[i]);
      pytanie_here = document.getElementById("pytanie").innerHTML = question;
    }
    return i
  }
  
  return (
    <section id='all'>
      <h2>Points:{points}</h2>
      <h1 id="pytanie">{question}</h1>
      <form>
        <input id='answer_box' type='text'/>
        <br/>
        <input id="submit_answer" type='button' value="Dalej" onClick={next}/>
        <input id="startOrReset" type='button' value="Start/Reset" onClick={showTime}/>
      </form>

    </section>
  )
}

export default App
