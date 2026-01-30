import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers:{
        addItem : (state, action) => {
            state.items.push(action.payload);
        },
        removeItem : (state, action) => {
            // state.items.splice(state.items.indexOf(action.payload), 1);
            state.items.pop();
            // const index = state.items.findIndex(item => item.id === action.payload.id);
            // console.log(index, action.payload.id);
            // if (index !== -1) {
            //     state.items.splice(index, 1);
            // }
        },
        clearCart: (state, action) => {
            state.items.length = 0;
        },
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;