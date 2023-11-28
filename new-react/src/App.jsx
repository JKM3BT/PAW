import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Welcome from './Welcome';
import MyCard from './MyCard';
import MyDate from './MyDate';

function App() {
  //const [dataFromChild, setDataFromChild] = useState(null)
  const[start,setStart] = useState(false);

  return (
    <>
      {
        !start && <Welcome onButtonClick={()=> setStart(true)}/>
      }
      {
        start && <MyCard><MyDate/></MyCard>
      }
    </>
  )
}

export default App;
