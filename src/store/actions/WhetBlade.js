import { createSlice } from "@reduxjs/toolkit";
import { data } from '../../data/WhetBlade';

const initialStateValue = { 
    dataSource: data
};

export const whetBladeSlice = createSlice({
    name: 'whetBlade',
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

export const { getData, resetData, updateData } = whetBladeSlice.actions;

export default whetBladeSlice.reducer;