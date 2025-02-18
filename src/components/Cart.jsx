import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import ItemList from "./ItemList";
import {clearCart} from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className={'text-center p-5'}>
            <h1 className={'font-bold text-xl'}>Cart</h1>
            <button className={'p-2 m-2 bg-black text-white rounded cursor-pointer'} onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length === 0 && <h2>Cart is empty, add items to the cart!</h2>}
            <div>
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}
export default Cart;
