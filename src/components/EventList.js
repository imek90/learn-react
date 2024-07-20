function EventList(props){

    const {toDos, deleteToDo} = props;

    return(
        <div>
            <ol>
                {toDos.map((todo, i)=>(
                    // Keys are helpful for React itself. If we use unique keys, react is then able to differentiate betwen 
                    // the children of a List
                    <div key={i}>
                        <li>{todo.title}</li>
                        <button onClick={()=>{deleteToDo(todo.id)}}>Delete Me</button>    
                    </div>
                ))}
            </ol>
        </div>
    );
}
export default EventList;