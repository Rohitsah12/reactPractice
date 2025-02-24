export default function GroceryCard({ groceryData }) {
    return (
        <div className="flex flex-col">
                <a href={groceryData?.action?.link}>
                    <img 
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/${groceryData?.imageId}`} 
                        alt={groceryData?.name || "Grocery item"} 
                        className="w-40 h-50"
                    />
                </a>
                <h2>
                    {groceryData?.action?.text}
                </h2>
        </div>

    );
}
