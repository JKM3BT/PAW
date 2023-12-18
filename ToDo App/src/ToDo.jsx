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

    const addTaskHandler = () =>{
        newtask = ReactDOM.render(document.getElementById('new_task').value)
        const newTask = {
            id: Math.random().toString(36).substring(7),
            text: {newtask},
            completed: false,
        }

        setToDos([...toDos,newTask])
    }
    return(
        <div>
            <h1>ToDo Manager</h1>
            <ul style={{listStyleType: "none"}}>
                {
                toDos.map( task =>(
                    <li style={{color:"#fff", fontsize:"19px", marginbottom:"10px"}} key={task.id}> 
                        <button style={{marginRight:"35px",background:"03045e"}} 
                            onClick={()=>removeTasksHandler(task.id)}>  usuń Zadanie</button>
                        {task.text}
                    </li>))
                }

            </ul>
            <input type="text" style={{marginBottom: "10px", borderRadius: 5, height: 20, width: 300}} id="new_task"/><br/>
            <button onClick={addTaskHandler}>  Dodaj nowe zadanie  </button>
        </div>
    )
}
export default ToDo;