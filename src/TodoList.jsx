import { useState } from "react";

export default function TodoList(){
    let[todos,setTodos] = useState(["Add in this list"]);
     let [newTodo,setNewTodo] = useState(""); //this new variable tracks the input ,,,kon se new element aa rahe hai
     
     let addNewTask = () => {
        setTodos([...todos,newTodo]);  //isse page or UI par todo add ho rahah hai
        setNewTodo("");
     }

     let updateTodovalue = (event) => {
        setNewTodo(event.target.value);  //target ek attribute hia.. target se input value ko track kar raha hai 
     };

    return (
        <div>
            {/* //onchange ek handler jo event triggr karta hai */}
            <input placeholder="Add a Task" value={newTodo} onChange={updateTodovalue}></input>    
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>
            <h4>Todo List !</h4>
            <ul>
                 
                    {todos.map((todo) => (
                        <li>{todo}</li>
                    ))}
                 
            </ul>

        </div>
    );
}
