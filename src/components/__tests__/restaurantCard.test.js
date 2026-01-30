import {render, screen} from "@testing-library/react";
import RestaurantCard, {withPromotedLabel} from "../RestaurantCard";
import MOCK_DATA from '../mocks/resCardMock.json'
import PROMOTED_MOCK_DATA from '../mocks/resCardPromotedMock.json'
import {BrowserRouter} from "react-router-dom";
const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

describe('restaurantCard test cases', () => {
    it('should render Restaurant Card component with props data ', () => {
        render(
            <BrowserRouter>
                <RestaurantCard restData={MOCK_DATA}/>
            </BrowserRouter>
        )

        const name = screen.getByText('Burger King')

        expect(name).toBeInTheDocument();
    });

    // High order component
    it('should render Restaurant Card component with promoted label ', () => {
        render(
            <BrowserRouter>
               <RestaurantCardPromoted restData={PROMOTED_MOCK_DATA}/>
            </BrowserRouter>
        )

        const promoted = screen.getByText('Promoted')
        expect(promoted).toBeInTheDocument();
    })
});