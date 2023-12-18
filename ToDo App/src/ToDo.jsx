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
    const date = new Date()
    const [new_task, setNew_task] = useState("")

    const addTaskHandler = () =>{
        const newTask = {
            id: Math.random().toString(36).substring(7),
            text: new_task,
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
                        {"Dodano "+date.getHours()+":"+date.getMinutes()+" "+date.getDate()+"/"+date.getMonth()+
                            "/"+date.getFullYear()}<br/>
                        <button style={{marginRight:"35px",background:"03045e"}} 
                            onClick={()=>removeTasksHandler(task.id)}>  usuń Zadanie</button>
                        {task.text}
                    </li>))
                }

            </ul>
            <input type="text" value={new_task} onChange={e => setNew_task(e.target.value)} style={{marginBottom: "10px", borderRadius: 5, height: 20, width: 300}} /><br/>
            <button onClick={addTaskHandler}>  Dodaj nowe zadanie  </button>
        </div>
    )
}
export default ToDo;