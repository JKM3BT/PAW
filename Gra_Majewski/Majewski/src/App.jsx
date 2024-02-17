import { useState } from 'react'
import './App.css'

function App() {
  const [Counter, setCounter] = useState(0);
  const [Points, setPoints] = useState(0);
  const listOfQuestions = ["","Nazwa aktualnej stolicy Polski","Największym (powierzchniowo) państwem na świecie jest...",
  "Imię i nazwisko człowieka uznanego za odkrywcę Ameryki","Jak się mówi poprawnie: Lubuskie, czy Lubelskie?",
  "Wyspa, na której żyją Kangury?","Jaka jest poprawa forma: Arktyka, Antarktyka, czy Antarktyda?"];

  const listOfAnswers = ["","warszawa","rosja","krzysztof kolumb","oba","australia","wszystkie"];

  function Start_Reset(){
    setCounter(1);
    setPoints(0);
    let question_change = document.getElementById("pytanie").innerHTML = listOfQuestions[Counter];
    let answer_reset = document.getElementById("answer_box").value = "";

  }
  function Correct(){
    setPoints(Points+1);
    setCounter(Counter+1);
    let question_change = document.getElementById("pytanie").innerHTML = listOfQuestions[Counter];
    let answer_reset = document.getElementById("answer_box").value = "";
  }
  function Incorrect(){
    setCounter(Counter+1);
    let question_change = document.getElementById("pytanie").innerHTML = listOfQuestions[Counter];
    let answer_reset = document.getElementById("answer_box").value = "";
  }
  function Verify(){
    if(Counter == 6){
      let odp = document.getElementById("pytanie").innerHTML = "Poprawne odpowiedzi to: "+listOfAnswers.slice(1,7);
    } else {
      let answerVerify = document.getElementById("answer_box").value;
      if(answerVerify.toLowerCase() == listOfAnswers[Counter]){
        Correct();
      } else {
        Incorrect();
      }
    }
  }
  return (
    <section id='all'>
      <h2>Points:{Points}</h2>
      <h1 id="pytanie">{listOfQuestions[Counter]}</h1>
      <form>
        <input id='answer_box' type='text'/>
        <br/>
        <button type='button' id='next' className='button' onClick={Verify}>dalej</button>
        <br/>
        <button type='button' className='button' onMouseDown={Start_Reset} onMouseUp={Start_Reset}>Start</button>
      </form>

    </section>
  );
}

export default App;
