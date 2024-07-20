import { useState } from "react";
import Title from "./components/Title";
import EventList from "./components/EventList";


function App (){

    const [showTitle, setShowTitle] = useState(true);
    const [showToDos, setShowToDos] = useState(true);

    const [toDos, setToDos] = useState([
        {
            id:"1",
            title:"learn react"
        },
        {
            id:"2",
            title:"excersize"
        },
        {
            id:"3",
            title:"make bed"
        }
    ]);

    function deleteToDo(id){
       const filteredToDos = toDos.filter((todo) => {
            return todo.id != id;
        });
        setToDos(filteredToDos);
    }



    return (
        <div>
            {showTitle && <Title titleText = "My To dos for Today!" username = "Joe" />}

            {!showTitle && <button onClick={()=>setShowTitle(true)}>Show Title</button>}
            {showTitle && <button onClick={()=>setShowTitle(false)}>Hide Title</button>}
            {/* <Title titleText = "My To dos for next week!" username = "sohaib" /> */}


{/* 
            {showToDos && toDos.map((todo)=>(
            <div key={todo.id}>
                <h1>{todo.id + ". " + todo.title}</h1>
                <button onClick={()=>{deleteToDo(todo.id)}}>Delete Me</button>  
            </div>      
            ))} */}

            {showToDos && <EventList toDos={toDos} deleteToDo={deleteToDo} />}

            {!showToDos && <button onClick={()=>setShowToDos(true)}>Show To Dos</button>}
            {showToDos  && <button onClick={()=>setShowToDos(false)}>Hide To Dos</button>}
        </div>
    );
}

export default App;