import React, {useContext, useEffect, useState} from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import Loader from "./Loader";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.997962586037627&lng=73.8123814613063&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json();
        const newRestaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurants(newRestaurants);
        setFilterRestaurants(newRestaurants);
    }

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (
            <h1>Looks like you are offline! Please check your internet connection</h1>
        )
    }

    const {loggedInUser, setUserName} = useContext(UserContext);

    return !restaurants?.length ? <Loader /> : (
        <div className={'body max-w-7xl mx-auto w-full px-4 mb-20'}>
            <div className={'search py-10'}>
                <div className={'text-center'}>
                    <input
                        className={'border border-gray-300 rounded-xl py-2 px-2 mr-5 max-w-sm w-full text-sm'}
                        data-testid="search-input"
                        type={'text'}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder={'Search your favorite restaurants...'}
                    />
                    <button
                        className={'rounded-xl py-2 px-4 bg-black text-white text-sm cursor-pointer mr-5'}
                        type="button"
                        onClick={()=>{
                            const filterList = restaurants.filter(
                                (item) => item.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilterRestaurants(filterList);
                        }}
                    >
                        Search
                    </button>
                    <button
                        className={'rounded-xl py-2 px-4 bg-black text-white text-sm cursor-pointer'}
                        onClick={() => {
                            const filterList = restaurants.filter((item) => item.info.avgRating > 4.5);
                            setFilterRestaurants(filterList);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className={'hidden'}>
                <div>
                    <input className={'border border-black'} value={loggedInUser} onChange={(e)=> setUserName(e.target.value)} />
                </div>
            </div>
            <div className="grid grid-cols-5 gap-5  mt-10">
                {filterRestaurants.map((restaurant) => (
                    restaurant.info.avgRating > 4.9 ?
                    <RestaurantCardPromoted restData={restaurant} key={restaurant.info.id} />
                    :
                    <RestaurantCard restData={restaurant} key={restaurant.info.id} />
                ))}
            </div>
        </div>
    );
}

export default Body;