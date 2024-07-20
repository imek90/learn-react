import { useState } from 'react';
import './App.css';



function App() {

 const [weather, setWeather] = useState("Today is a hot day");
 const [season, setSeason] = useState("summer");
//  console.log(state);
//  console.log(typeof setWeather);

  // React has a concept of state, state is the data and information that is needed for a component, we 
  // can display that data on the webpage as well.
  // React has special method to create the state of a component.

  // When we have normal let, const variables. and we later on update these variables, React does not track those changes.

  // let weather = "today is a hot day";
  // console.log("outside click function: " ,weather);
  
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>{weather}</h2>
      <h2>{season}</h2>
      {/* We only pass the reference of the function, we don't put prenthesis because if we put parenthesis the function
      would be called right away.  */}
      {/* We have written an anonymous arrow function, an arrow funtion without any name is called
      annonymous arrow function. Annonymous functions don't get called right away, they wait for the click, that's why
      we use them. */}
      {/* <button onClick={()=> {
        handleclick("Michael")
      } }>SignUp</button> */}

      <button onClick={ ()=>{
          setWeather("It's a cloudy day wohoooo...");
      }}>Change The Weather</button>

      <button onClick={ ()=>{
         setSeason("spring");
      }}>Change The Season</button>
    </div>
  );
}

export default App;
