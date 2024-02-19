import { useState } from 'react'
import './App.css'
import Photo from './Photo';

function App() {
  const [Counter, setCounter] = useState(0);
  const [Points, setPoints] = useState(0);
  const [Locked, setLocked] = useState(true);
  const [ButtonText, setButtonText] = useState("Start")
  const listOfQuestions = ["Pytanie i odpowiedź","Nazwa aktualnej stolicy Polski","Największym (powierzchniowo) państwem na świecie jest...",
  "Imię i nazwisko człowieka uznanego za odkrywcę Ameryki","Jak się mówi poprawnie: Lubuskie, czy Lubelskie?",
  "Wyspa, na której żyją Kangury?","Jaka jest poprawa forma: Arktyka, Antarktyka, czy Antarktyda?"];

  const listOfAnswers = ["","warszawa","rosja","krzysztof kolumb","oba","australia","wszystkie"];

  function Start_Reset(){
    let no = document.getElementById("start").style.display = 'none';
    let end = document.getElementById("end").style.display = "none";
    let continue_show = document.getElementById("next").style.display = 'block';
    let input_show = document.getElementById("answer_box").style.display = 'block';
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
    setLocked(true);
  }
  function Incorrect(){
    setCounter(Counter+1);
    let question_change = document.getElementById("pytanie").innerHTML = listOfQuestions[Counter];
    let answer_reset = document.getElementById("answer_box").value = "";
    setLocked(true);
  }
  function Verify(){
    let no = document.getElementById("start");
    if(Counter == 6){
      let end = document.getElementById("end").style.display = "block";
      let odp = document.getElementById("pytanie").innerHTML = "Poprawne odpowiedzi to: "+listOfAnswers.slice(1,7);
      no.style.display = 'block';
      setButtonText("Reset");
      let input_hide = document.getElementById("answer_box").style.display = 'none';
      let answer_reset = document.getElementById("answer_box").value = "";
      let no_continue = document.getElementById("next").style.display = 'none';
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
      <Photo counter={Counter}/>
      <h2 id="pytanie" style={{textTransform:'capitalize'}}>{listOfQuestions[Counter]}</h2>
      <form>
        <input id='answer_box' type='text' onKeyDown={function(Event){
          if(Event.key === "Enter"){
            Event.preventDefault();
            document.getElementById("next").click();
          }
        }} style={{display:'none'}} onChange={() => setLocked(false)}/>

        <br/>
        <button type='button' id='start' onMouseDown={Start_Reset} onMouseUp={Start_Reset}>{ButtonText}</button>
        <br/>
        <button type='button' id="end"  onClick={function(){window.close()}} style={{display:"none"}}>Koniec</button>
        <br/>
        <button type='button' id='next' onClick={Verify} style={{display:'none'}} disabled={Locked}>Dalej</button>
      </form>
      <h2 id='points'>Points:  {Points}</h2>

    </section>
  );
}

export default App;