import React from "react";
import ReactDOM from "react-dom/client"

const element1=<h1>Hello coder Army</h1>

//JSX: JS expression (Output lakke de)
//JSX: Statement (unko aap nhi le skte h)

let obj={
    name:"Rohit Sah",
    age:50
}




//Result produce hona chaiye: string,number , array
function  Greet(props) {
    return <h2>Ram Ram Bhaiya ji {props.name}</h2>
}


const element2=<Greet name="Rohit" />
//<Greet />: function call

const Root=ReactDOM.createRoot(document.getElementById('root'));
Root.render(element2);