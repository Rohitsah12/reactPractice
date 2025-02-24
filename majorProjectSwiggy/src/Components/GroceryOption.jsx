import { GrocerGridCard } from "../utils/Grocery"
import GroceryCard from "./GroceryCard"
export default function GroceryOption(){
    return(
        <div>
            <h1 className="ml-20 font-bold mt-15">Shop groceries on Instamart</h1>
            <div className="w-[80%] container mx-auto flex flex-wrap mt-20 gap-10">
                {
                    GrocerGridCard.map((groceryData)=><GroceryCard  key={groceryData.id} groceryData={groceryData}/>)
                }
            </div>
        </div>
    )
}