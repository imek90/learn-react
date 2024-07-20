function Title(props){
    // Destructure assignment in Javascript
    // on the following line we are Object destrucring 
    // const props = {titleText, username};
    const {titleText, username} = props;
    // props can be dynamic values or data .
    // Dynamic mean the data that is not the same always.
    console.log(props)

    // There is a concept of Props in React.
    // props is a short form of properties.
    // Props are data that can be passed from parent component to child component.
    // props can be any type of data , i.e. numbers, strings, boolean, obejcts, array, and even functions can be 
    // passed as props.
    // Todos for Sohaib 
    return(
        <div>
            <h1>{"to dos for " + username}</h1>
            <h1>{titleText}</h1>
        </div>
    );
}

export default Title;