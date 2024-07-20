import { useState } from "react";

function App (){
    let fruits = ["apple", "banana", "mango", "blueberry", "plumb"];
     
    //forEach works only on arrays. It takes a function as an argument and passes each element from an array 
    //into that function to be used, the function is called as many times as there are elements in the array.
    // forEach method does not return anything

   const  newFruits =  fruits.forEach((fruit) => {
        console.log(fruit);
    });
    console.log("newFruits");
    console.log(newFruits);

    // MAp method is same in nature as of forEach but it returns a new array , we can store that array in a variable 
    // and can use it. Also we can use map method to perform any kind of operation on each array element
    const  mappedFruits =  fruits.map((fruit) => {
        console.log(fruit);
        return fruit.toUpperCase();
    });

    const newMappedFruits = fruits.map((fruit)=>{
        return fruit + "s";
    });

    const ages = [10, 15, 20, 30, 40, 50, 60];
    const modifyNumbers = ages.map((number)=>{
        return number / 3;
    });
    const newAgesAdults = ages.filter((age)=>{
        // filter is used to filter out the array elements based on a condition
        // elements which satisfies the condition or passes the condition test , they are kept in the array
        // and the elements which fails to satisfy the conditon are filtered out.
        return age > 18;
    });
    console.log(newAgesAdults);
    console.log(modifyNumbers);
    console.log(newMappedFruits);
    console.log("mappedFruits");
    console.log(mappedFruits);
    let [counter, setCounter] = useState(1);
     let [toDos, setToDos] = useState(["laundry", "dishes", "learn react", "excersize"]);
    //  Higher Order Array Methods
    //  map, forEach, filter
    let person = {
        name : "michael",
        profession : "react developer"
    }

    // map is a Higher order Arrayh method
    // map is only available on arrays
    // map is used to loop thorugh the array elements

    return(
        <div>
            <h1>My Todos for Today</h1>
           
                {
                    toDos.map((todo, index)=> (
                                <h2>{todo + "  " +  index}</h2>
                    ))
                   
                }
           
            {/* <h2>{counter}</h2>
            <button onClick={()=>{setCounter(++counter)}}>increment counter</button>
            <button onClick={()=>{setCounter(--counter)}}>decrement counter</button>       */}
        </div>

    );
}
export default App;