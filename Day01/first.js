//Create clement through js


const React={
    createElement: function(tag,styles,children){
        const element=document.createElement(tag);
        element.innerText=children;
        for(let key in styles){
            element.style[key]=styles[key];
        }
        return element;
    }
}


const header1=React.createElement('h1',{fontSize:"30px",backgroundColor:"blue",color:"white"},"Hello coder army");
const header2=React.createElement('h1',{fontSize:"25px",backgroundColor:"black",color:"white"},"Kaise h aap sbb log");


// const header1 = document.createElement('h1');
// header1.innerText="Hello Coder Army"; 
// header1.style.backgroundColor="blue";
// header1.style.fontSize="30px";
// header1.style.color="white";




// const header2 = document.createElement('h1');
// header2.innerText="Kaise h aap sbb log";
// header2.style.backgroundColor="black";
// header2.style.fontSize="30px";
// header2.style.color="white";

const ReactDOM={
    render: function(element,root){
        root.append(element);
    }
}

// const root=document.getElementById("root")
// root.append(header1);
// root.append(header2); 

ReactDOM.render(header1,document.getElementById("root"));
ReactDOM.render(header2,document.getElementById("root"));


