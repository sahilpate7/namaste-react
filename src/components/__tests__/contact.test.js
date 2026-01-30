import {render, screen} from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom'

// Function to run before all tests
// beforeAll(()=>{
//     console.log('before all')
// });
//
// beforeEach(()=>{
//     console.log('before each')
// })
//
// afterEach(()=>{
//     console.log('after each')
// });
//
// afterAll(()=>{
//     console.log('after all')
// });

describe('Contact Us Component', () => {
    test('should load contact us component', () => {
        render(<Contact />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    })

    test('should load button inside contact us component', () => {
        render(<Contact />);
        const button = screen.getByText('Submit');
        expect(button).toBeInTheDocument();
    })

    test('should load input inside contact us component', () => {
        render(<Contact />);
        const input = screen.getByPlaceholderText('Name')
        expect(input).toBeInTheDocument();
    })

    test('should load 2 input inside contact us component', () => {
        render(<Contact />);
        const inputs = screen.getAllByRole('textbox')
        expect(inputs).toHaveLength(2);
    })
})
