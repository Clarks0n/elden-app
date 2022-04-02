import { createSlice } from "@reduxjs/toolkit";
import { data } from '../../data/NightCavalry';

const initialStateValue = { 
    dataSource: data
};

export const nightCavalrySlice = createSlice({
    name: 'nightCavalry',
    initialState: initialStateValue,
    reducers: {
        getData: (state) => {
            state.dataSource = state.dataSource;
        },
        updateData: (state,action) => {
            let dataSource = state.dataSource;
            let payload = action.payload;
            let payloadArr = [];
            payloadArr.push(payload)

            let newData = dataSource.map(obj => payloadArr.find(o => o.id === obj.id) || obj);

            console.log(newData)
            state.dataSource = newData;
        },
        resetData: (state) => {
            state.dataSource = [];
        }
    }
});

export const { getData, resetData, updateData } = nightCavalrySlice.actions;

export default nightCavalrySlice.reducer;