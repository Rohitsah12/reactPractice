import '../app.css'
 
 export default function Card(props) {
    return (
      <div  className='card' style={{border:"2px solid black",padding:"10px"}}>
        <img 
          src="https://blinkstore.in/wp-content/uploads/sites/29/2023/08/man-rnhs-0069.jpg" 
          alt="T-shirt" 
          height="200px" 
          width="200px" 
        />
        <div style={{textAlign:"center"}}>
          <h2>{props.cloth}</h2>
          <h1>{props.offer}</h1>
          <h2>Shop Now</h2>
          <h2>Price: {props.price}</h2>
        </div>
      </div>
    );
  }

