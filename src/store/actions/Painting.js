import { createSlice } from "@reduxjs/toolkit";
import { data } from '../../data/Painting';

const initialStateValue = { 
    dataSource: data
};

export const paintingSlice = createSlice({
    name: 'painting',
    initialState: initialStateValue,
    reducers: {
        getData: (state) => {
            // eslint-disable-next-line no-self-assign
            state.dataSource = state.dataSource;
        },
        updateData: (state,action) => {
            let dataSource = state.dataSource;
            let payload = action.payload;
            let payloadArr = [];
            payloadArr.push(payload)

            let newData = dataSource.map(obj => payloadArr.find(o => o.id === obj.id) || obj);

            state.dataSource = newData;
        },
        resetData: (state) => {
            state.dataSource = [];
        }
    }
});

export const { getData, resetData, updateData } = paintingSlice.actions;

export default paintingSlice.reducer;