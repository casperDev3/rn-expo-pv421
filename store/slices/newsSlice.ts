import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// interface INewsSlice {
//     state: {
//         saved: number[]
//     }
// }

const newsSlice = createSlice({
    name: "news",
    initialState: {
        saved: []
    },
    reducers: {
        addSaved: (state, action: PayloadAction<number>) => {
            // @ts-ignore
            state.saved.push(action.payload);
        },
        removeSaved: (state, action: PayloadAction<number>) => {
            // delete by id
            state.saved = state.saved.filter(id => id !== action.payload);
        }
    }
})

export const {addSaved, removeSaved} = newsSlice.actions;
export default newsSlice.reducer;