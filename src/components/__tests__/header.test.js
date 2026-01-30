import {render, screen, fireEvent} from "@testing-library/react";
import Header from "../Header";
import {Provider} from "react-redux";
import appStore from "../../utils/appStore";
import {BrowserRouter} from "react-router-dom";

describe('Header', () => {
    it('should render header component with a login button', () =>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );

        const loginButton = screen.getByText('Login');
        expect(loginButton).toBeInTheDocument();
    })
    it('should render header component with a cart items', () =>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );

        // Match exact text
        const cartItems = screen.getByText('Cart (0)');

        // Match text
        // const cartItems = screen.getByText(/Cart/);
        expect(cartItems).toBeInTheDocument();
    })
    it('should change login button to logout on click', () =>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );

       const loginButton = screen.getByRole('button', {name: /Login/i});
       fireEvent.click(loginButton);
       const logoutButton = screen.getByRole('button', {name: /Logout/i});
       expect(logoutButton).toBeInTheDocument()
    })
})