import { useState } from "react";

function App (){
   
    let [counter, setCounter] = useState(1);
    //  let [toDos, setToDos] = useState(["laundry", "dishes", "learn react", "excersize"]);
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
    //  Higher Order Array Methods
    //  map, forEach, filter
    let person = {
        name : "michael",
        profession : "react developer"
    }

    // map is a Higher order Arrayh method
    // map is only available on arrays
    // map is used to loop thorugh the array elements

const deleteToDo = (id) => {
    console.log({id})
   const filteredTodos =  toDos.filter((todo)=>{
    // return me the todo where the todo.id  is not equal to id
        return todo.id != id;
    });
    setToDos(filteredTodos);

    console.log(filteredTodos)
}

    return(
        <div>
            <h1>My Todos for Today</h1>
           
                {
                     toDos.map((todo)=> (
                        <div key={todo.id} >
                                <h2>{todo.title + "  " +  todo.id}</h2>
                                <button onClick={()=>{
                                    deleteToDo(todo.id);
                                }}>Delete Me</button>
                        </div>
                    ))
                   
                }
           
            {/* <h2>{counter}</h2>
            <button onClick={()=>{setCounter(++counter)}}>increment counter</button>
            <button onClick={()=>{setCounter(--counter)}}>decrement counter</button>       */}
        </div>

    );
}
export default App;