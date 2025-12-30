import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

const BookSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addBooks: (state, action) => {
            const existingItem = state.items.find(
                item => item.id === action.payload.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },

        removeBook: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload
            );
        },

        increaseQty: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item) item.quantity += 1;
        },

        decreaseQty: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item && item.quantity > 1) item.quantity -= 1;
        }
    }
});

export const {
    addBooks,
    removeBook,
    increaseQty,
    decreaseQty
} = BookSlice.actions;

export default BookSlice.reducer;
