import React from "react";
import ReactDOM from "react-dom/client"

//Header
//Body
//Footer


function Card(){
    return(
        <div style={{border:"2px solid black",padding:"10px"}}>
            <img src="" height="200px" width="200px"/>
            <div style={{textAlign:"center"}}>
                <h2>T-Shirts</h2>
                <h1>40-80%Off</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
    )

}
function App(){
    return(
        // Header
        //Body

        <div>
            <Card />
        </div>



        //Footer
    )
}

const Root=ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App />);