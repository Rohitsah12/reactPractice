import FoodCart from "./FoodCart"

const foodItems=[
    {id:1,food:'Pizza',Price:"200"},
    {id:2,food:'Pasta',Price:"200"},
    {id:3,food:'Momos',Price:"200"},
    {id:4,food:'Kabab',Price:"200"},
    {id:5,food:'Chicken',Price:"200"},
    {id:6,food:'Paneer',Price:"200"},
    {id:7,food:'Burger',Price:"200"},
    {id:8,food:'Poha',Price:"200"},
    {id:9,food:'Rice ',Price:"200"},
    {id:10,food:'Dal',Price:"200"},
]


export default function Card(){

    
    return(
        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"20px"}}>
            {foodItems.map((value)=>{
                return  (
                    <div key={value.id}>
                        <FoodCart value={value}/>
                    </div>
                )
            })}
        </div>
    )
}