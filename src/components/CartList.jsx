import React from 'react'
import {CDN_URL} from "../utils/constants";
import {useDispatch} from "react-redux";
import {addItem, removeItem} from "../utils/cartSlice";

const CartList = ({items}) => {
    const dispatch = useDispatch();
    const handleClick = (item) => {
        dispatch(removeItem(item));
    }
    return (
        <ul>
            {items?.map((item) => (
                <li key={item.card.info.id} className={'mb-4 border-b-2 border-b-gray-200 pb-4 last:border-none'}>
                    <div className={'flex justify-between align-top gap-10'}>
                        <div className={'max-w-[150px] w-full text-center relative'}>
                            <img src={CDN_URL + item.card.info.imageId} width={150} className={'rounded-lg aspect-square object-cover'}/>
                        </div>
                        <div className={'info '}>
                            <span className={"text-md font-medium"}>{item.card.info.name}</span><br/>
                            <span className={'font-bold'}>₹
                                {
                                    item.card.info.price
                                        ? item.card.info.price/100
                                        : item.card.info.defaultPrice/100
                                }
                            </span>
                        </div>
                        <div>
                            <button className={'border inline-block border-black bg-black text-white px-2 py-1 rounded cursor-pointer '} onClick={()=>

                                handleClick(item)
                            }>
                                Remove
                            </button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default CartList;