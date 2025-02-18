import {useParams} from "react-router";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const [showIndex, setShowIndex] = useState(null);
    const restaurantsInfo = useRestaurantInfo(resId);
    // console.log(restaurantsInfo);
    if (!restaurantsInfo) return null;

    const {name} = restaurantsInfo?.cards[2]?.card?.card?.info;
    // const {itemCards} = restaurantsInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = restaurantsInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
        )
    // console.log(category);

    return (
        <div className='text-center max-w-7xl mx-auto w-full px-4'>
            <h1 className={"font-bold text-2xl mb-4 py-10"}>{name}</h1>
            {categories.map((category,index) => (
                <RestaurantCategory
                    data={category?.card?.card}
                    showItems={index === showIndex}
                    setShowIndex={()=>setShowIndex(index)}
                />
            ))}
        </div>
    )
};

export default RestaurantMenu;