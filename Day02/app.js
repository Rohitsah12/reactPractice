const element=React.createElement("h1",{id:"first",className:"Rahul",style:{backgroundColor:"blue",fontSize:"30px",color:"pink"}},"Hello coder Army");
const element2=React.createElement("h2",{id:"second",className:"Rahul",style:{backgroundColor:"black",fontSize:"30px",color:"pink"}},"Mjaa aaya mujhe");
const root=document.getElementById('root');
// ReactDOM.render(element,root)
const div1=React.createElement("div",{},[element,element2]);

ReactDOM.createRoot(root).render(div1);
// ReactDOM.createRoot(root).render(element2);


{/* <div>
    <div>
        <h1>
            <p></p>
        </h1>
    </div>
</div> */}

// JSX
