import { useState } from "react";
import "./child.css";

const Child = ({childDataHandler}) =>{

    let [userData, setUserData] = useState("");

    function getDataFromUser(event){
        //console.log(event)
        setUserData(event.target.value);

    }
    function dataSender(){
        childDataHandler(userData);
        userData="";
    }
    return(
        <div>
            <h2>Jakie dane chcesz wyslać do rodzica?</h2>
            <input type="text" value={userData} onChange={getDataFromUser}/>
            <button onClick={dataSender}>Wyślij dane</button>
        </div>
    )
}
export default Child;