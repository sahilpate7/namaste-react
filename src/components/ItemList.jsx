import React from 'react'
import {CDN_URL} from "../utils/constants";
import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlice";

const ItemList = ({items}) => {
    const dispatch = useDispatch();
    const handleClick = (item) => {
        dispatch(addItem(item));
    }
    return (
        <div>
            {items?.map((item) => (
                <div key={item.card.info.id} className={'mb-4 border-b-2 border-b-gray-200 pb-4 last:border-none'}>
                    <div className={'flex justify-between align-top gap-10'}>
                        <div className={'info '}>
                            <span className={"text-md font-medium"}>{item.card.info.name}</span><br/>
                            <span className={'font-bold'}>₹
                                {
                                    item.card.info.price
                                        ? item.card.info.price/100
                                        : item.card.info.defaultPrice/100
                                }
                            </span>
                            <p className={"text-sm"}>{item.card.info.description}</p>

                        </div>
                        <div className={'max-w-[150px] w-full text-center relative'}>
                            <img src={CDN_URL + item.card.info.imageId} width={150} className={'rounded-lg aspect-square object-cover'}/>
                            <button className={'w-full border border-black bg-black text-white px-2 py-1 rounded cursor-pointer absolute bottom-0 left-1/2 transform -translate-x-1/2'} onClick={()=>handleClick(item)}>Add +</button>
                        </div>
                    </div>
                    <div className={"mb-2"}>


                    </div>

                </div>
            ))}
        </div>
    )
}

export default ItemList;