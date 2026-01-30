import {fireEvent, render, screen} from "@testing-library/react";
import Body from "../Body";
import {act} from "react-dom/test-utils";
import {BrowserRouter} from "react-router-dom";
import '@testing-library/jest-dom'
import MOCK_DATA from '../mocks/mockResList.json'

global.fetch = jest.fn(()=>{
    return Promise.resolve({json: ()=>Promise.resolve(MOCK_DATA)})
})

describe('Search test cases', () => {
    it("Should search restaurant list for burger input", async ()=>{
        await act(async ()=>
            render(
                <BrowserRouter>
                    <Body/>
                </BrowserRouter>
            )
        )

        const cardsBeforeSearch = screen.getAllByTestId('restaurant-card');
        expect(cardsBeforeSearch.length).toBeGreaterThanOrEqual(10);

        const searchButton = screen.getByRole('button', {name: /Search/i});

        const searchInput = screen.getByTestId('search-input');

        fireEvent.change(searchInput, {target: {value: 'Burger'}});
        fireEvent.click(searchButton);
        const cardAfterSearch = screen.getAllByTestId('restaurant-card');
        expect(cardAfterSearch.length).toBeGreaterThanOrEqual(1);
        // expect(cardAfterSearch.length).toBe(1);
        // expect(cardAfterSearch).toHaveLength(1);
    })

    it("Should render top rated restaurants", async ()=>{
        await act(async ()=>
            render(
                <BrowserRouter>
                    <Body/>
                </BrowserRouter>
            )
        )

        // const restaurantList = screen.getAllByTestId('restaurant-card');
        const topRatedButton = screen.getByRole('button', {name: /Top Rated Restaurants/i});
        fireEvent.click(topRatedButton);
        const topRatedRestaurants = screen.getAllByTestId('restaurant-card');
        expect(topRatedRestaurants.length).toBeGreaterThanOrEqual(4);

    })

});