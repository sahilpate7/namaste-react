import React, {useContext, useState} from "react";
import {LOGO_URL} from "../utils/constants";
import {Link} from "react-router";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    const {loggedInUser} = useContext(UserContext);

    // subscribe to the store using selector

    const cart = useSelector((store) => store.cart.items);

    return (
        <header className="py-4 bg-[#ff5200]  text-white shadow-xl">
            <div className={'max-w-7xl mx-auto flex w-full justify-between items-center px-4'}>
                <div className="logo-container">
                    <Link to={"/"}>
                        <img src={LOGO_URL} className="w-30"  alt={'logo'}/>
                    </Link>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <ul className="navbar-nav flex gap-x-5">
                        <li className="nav-item">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact">Contact</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/grocery/">Grocery</Link>
                        </li>
                        <li className={'nav-item'}>
                            <button
                                onClick={() => btnName === 'Login' ? setBtnName("Logout") : setBtnName("Login")}
                            >
                                {btnName}
                            </button>
                        </li>
                        <li>
                            <span>{loggedInUser}</span>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart">Cart ({cart.length})</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;