import { useState } from 'react'
import './App.css'

function App() {
  const [Counter, setCounter] = useState(0);
  const [Points, setPoints] = useState(0);
  const listOfQuestions = ["","Nazwa aktualnej stolicy Polski","Największym (powierzchniowo) państwem na świecie jest...",
  "Imię i nazwisko człowieka uznanego za odkrywcę Ameryki","Jak się mówi poprawnie: Lubuskie, czy Lubelskie?",
  "Wyspa, na której żyją Kangury?","Jaka jest poprawa forma: Arktyka, Antarktyka, czy Antarktyda?"];

  const listOfAnswers = ["","warszawa","rosja","krzysztof kolumb","oba","australia","wszystkie"];

  const [Question, setQuestion] = useState(listOfQuestions[Counter]);
  const [Answer, setAnswer] = useState(listOfAnswers[Counter]);

  function showTime(){
    setCounter(1);
    setQuestion(listOfQuestions[Counter]);
    setPoints(0);
    let answer_here = document.getElementById("answer_box").value = "";
    let pytanie_here = document.getElementById("pytanie").innerHTML = Question;
  }
  function nextQuestion(){
    answer_here = document.getElementById("answer_box").value;
    console.log(Counter);
    if (answer_here.toLowerCase() == Answer){
      setPoints(Points + 1);
      setCounter(Counter + 1);
      setQuestion(listOfQuestions[Counter]);
      setAnswer(listOfAnswers[Counter]);
      let pytanie_here = document.getElementById("pytanie").innerHTML = Question;
      answer_here = document.getElementById("answer_box").value = "";
    }
    else{
      setCounter(Counter + 1);
      setQuestion(listOfQuestions[Counter]);
      setAnswer(listOfAnswers[Counter]);
      let pytanie_here = document.getElementById("pytanie").innerHTML = Question;
      let answer_here = document.getElementById("answer_box").value = "";
    }
  }
  return (
    <section id='all'>
      <h2>Points:{Points}</h2>
      <h1 id="pytanie">{Question}</h1>
      <form>
        <input id='answer_box' type='text'/>
        <br/>
        <input id="submit_answer" type='button' value="Dalej" onClick={nextQuestion}/>
        <input id="startOrReset" type='button' value="Start/Reset" onClick={showTime}/>
      </form>

    </section>
  );
}

export default App;
