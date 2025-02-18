import {useEffect, useState} from "react";
import {MENU_API} from "./constants";

const useRestaurantInfo = (resId) => {
    const [restaurantsInfo, setRestaurantsInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);

        const json = await data.json();
        setRestaurantsInfo(json?.data);
    }
    return restaurantsInfo;
}

export default useRestaurantInfo;