import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import ItemList from "./ItemList";
import {clearCart} from "../utils/cartSlice";
import CartList from "./CartList";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className={'text-center max-w-7xl mx-auto w-full px-4 mb-20'}>
            <h1 className={'font-bold text-2xl pt-10 pb-2'}>Cart</h1>
            <button className={'p-2 m-2 bg-black text-white rounded cursor-pointer'} onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length === 0 && <h2>Cart is empty, add items to the cart!</h2>}
            <div className={'pt-10 max-w-4xl w-full mx-auto'}>
                <CartList items={cartItems} />
            </div>
        </div>
    )
}
export default Cart;
