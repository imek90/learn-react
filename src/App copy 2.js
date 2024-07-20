import { useState } from "react";

function App (){
   
    let [toDos, setToDos] = useState([
        {
            id:"1",
            title:"Do laundry"
        },
        {
            id:"2",
            title:"Do dishes"
        },
        {
            id:"3",
            title:"Learn react"
        },
        {
            id:"4",
            title:"Excersize"
        },
        {
            id:"5",
            title:"Make Bed"
        }
    ]);

    const deleteToDo = (id)=>{
        const filteredToDos = toDos.filter((todo)=>{
            return todo.id != id;
        });
        setToDos(filteredToDos);
    }


    return(
        <div>
            <h1>My Todos for Today</h1>
           {toDos.map((todo) => (
                <div key={todo.id}>
                    <h2>{todo.title + " " + todo.id}</h2>
                    <button onClick={()=>{deleteToDo(todo.id)}}>Delete Me</button>
                </div>
           ))}
        </div>

    );
}
export default App;