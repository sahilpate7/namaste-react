import {act} from "react-dom/test-utils";
import {fireEvent, render} from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MENU_MOCK_DATA from '../mocks/menuMockData.json';

global.fetch = jest.fn(()=>Promise.resolve({json: ()=>Promise.resolve(MENU_MOCK_DATA)}))

describe('Cart test cases', ()=>{
    it('should load Restaurant menu component', async ()=>{
        await act(async ()=> render(<RestaurantMenu/>))

        const accordionHeader = screen.getByText('Biryani (5)');

        fireEvent.click(accordionHeader);

        expect(screen.getAllByTestId("food-item")).toHaveLength(5);

        const addButton = screen.getAllByRole('button', {name: /Add +/i});
        fireEvent.click(addButton[0]);

        expect(screen.getByText('Cart (1)')).toBeInTheDocument();

    })
})