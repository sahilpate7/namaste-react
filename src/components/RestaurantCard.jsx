import React from "react";
import {CDN_URL} from "../utils/constants";
import {Link} from "react-router";

const RestaurantCard = ({restData}) => {
    const {name,cloudinaryImageId, areaName, cuisines,id } = restData?.info;
    return (
        <div className="p-2 rounded-xl bg-gray-100 hover:shadow-xl transition" >
            <Link to={"/restaurants/"+id}>
                <img
                    src={CDN_URL + cloudinaryImageId}
                    className={'aspect-square object-cover rounded-xl mb-4'}
                    alt={'res-logo'}
                    height={"200px"}
                />
                <h3 className={'font-bold text-xl mb-2'}>{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{areaName}</h4>
                <h4>38 minutes</h4>
            </Link>
        </div>
    )
}

// Higher order component

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;