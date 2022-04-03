import { createSlice } from "@reduxjs/toolkit";
import { data } from '../../data/BellBearing';

const initialStateValue = { 
    dataSource: data
};

export const bellBearingSlice = createSlice({
    name: 'bellBearing',
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
            payloadArr.push(payload);

            let newData = dataSource.map(
                obj => payloadArr.find(
                    o => o.id === obj.id) || obj
            );

            state.dataSource = newData;

            ////

        },
        resetData: (state) => {
            state.dataSource = [];
        }
    }
});

export const { getData, resetData, updateData } = bellBearingSlice.actions;

export default bellBearingSlice.reducer;


/*
export class List {
    static replace = (object, list) => {
        let newList = [];
        list.forEach(function (item) {
            if (item.id === object.id) {
                newList.push(object);
            } else {
                newList.push(item);
            }
        });
        return newList;
    }
}
*/