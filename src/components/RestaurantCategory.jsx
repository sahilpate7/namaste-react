import React, {useState} from 'react'
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItems,setShowIndex}) => {
    const handleClick = ()=>{
        setShowIndex();
    }
    return (
        <div className="mx-auto  mb-4 bg-gray-50 shadow-lg p-4 max-w-4xl">
            <div className={'flex justify-between mb-2 cursor-pointer'} onClick={handleClick}>
                <span className={'font-bold text-l'}>{data.title} ({data.itemCards.length})</span>
            </div>
            <div className={'text-left'}>
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory;