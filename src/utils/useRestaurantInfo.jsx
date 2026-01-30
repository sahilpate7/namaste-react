import {useEffect, useState} from "react";
import {MENU_API} from "./constants";

const useRestaurantInfo = (resId) => {
    const [restaurantsInfo, setRestaurantsInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        try {
            const response = await fetch(MENU_API+resId);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            if (!data) {
                throw new Error("Empty response body");
            }
            setRestaurantsInfo(data?.data);
        } catch (error) {
            console.log(error);
        }
    }
    return restaurantsInfo;
}

export default useRestaurantInfo;