
import './app.css'
import Header from './components/Header';
import Card from './components/Card'
import Footer from './components/Footer';
import {useState} from 'react'

const arr = [
  { cloth: "Shirt", offer: "30-70% off", price: 450 },
  { cloth: "Jeans", offer: "25-60% off", price: 800 },
  { cloth: "Jacket", offer: "40-80% off", price: 1200 },
  { cloth: "Sweater", offer: "35-75% off", price: 650 },
  { cloth: "Hoodie", offer: "20-50% off", price: 500 },
  { cloth: "Shorts", offer: "10-40% off", price: 300 },
  { cloth: "Skirt", offer: "15-45% off", price: 350 },
  { cloth: "Blazer", offer: "50-90% off", price: 1500 },
  { cloth: "Pants", offer: "30-60% off", price: 700 },
  { cloth: "Trousers", offer: "20-70% off", price: 750 },
  { cloth: "Trousers", offer: "20-70% off", price: 750 },
];




export function App() {
  let [A,seta]=useState(arr);

  function sortArray(){
    A.sort((a,b)=>a.price-b.price);
    seta([...A]);
    // console.log(A);
  }

  function priceabove500(){
     const B=arr.filter((value)=>value.price>=500)
     seta(B);
  }
  return (
    <>
    <Header />
    <button onClick={sortArray}>Sort by Price</button>
    <button onClick={priceabove500}>FIlter by Price</button>
    <div className='middle' style={{display:"flex",gap:"15px",flexWrap:"wrap"}}>
      {/* <Card cloth="Shirt" offer="30-70% off" />
      <Card cloth="Jeans" offer="25-60% off" />
      <Card cloth="Jacket" offer="40-80% off" />
      <Card cloth="Sweater" offer="35-75% off" />
      <Card cloth="Hoodie" offer="20-50% off" />
      <Card cloth="Shorts" offer="10-40% off" />
      <Card cloth="Skirt" offer="15-45% off" />
      <Card cloth="Blazer" offer="50-90% off" />
      <Card cloth="Pants" offer="30-60% off" />
      <Card cloth="Trousers" offer="20-70% off" /> */}
      {
        A.map((value,index)=><Card key={index} cloth={value.cloth} offer={value.offer} price={value.price}/>)
      }
    </div>
    <Footer />
    </>
  );
}
