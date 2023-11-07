import { useState } from "react";

const tasks = [
    {id:1, text:"Zadanie 1", completed: false},
    {id:2, text:"Zadanie 2", completed: true},
    {id:3, text:"Zadanie 3", completed: false},
]
const ToDo = () =>{
    const [toDos, setToDos] = useState(tasks);

    const removeTasksHandler = (taksId)=>{
        setToDos(
            toDos.filter(task => {
                return task.id !== taksId;
            })
        )
    }

    const addTaskHandler = ()=>{
        const newTask = {
            id: Math.random().toString(36).substring(7),
            text: "zupełnie nowe zadanie",
            completed: false,
        }

        setToDos([...toDos,newTask])
    }
  
    return(
        <div>
            <h1>Jestem ToDo</h1>
            <ul>
                {
                toDos.map( task =>(
                    <li style={{color:"#023047", fontsize:"19px", marginbottom:"10px"}} key={task.id}> 
                        {task.text}
                        <button style={{marginRight:"10px",background:"03045e"}} 
                            onClick={()=>removeTasksHandler(task.id)}>  usuń Zadanie{task.id} </button>
                    </li>))
                }

            </ul>

            <button onClick={addTaskHandler}>  Dodaj nowe zadanie  </button>
        </div>
    )
}
export default ToDo;