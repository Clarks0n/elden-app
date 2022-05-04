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
            // state.dataSource = data;
            // eslint-disable-next-line no-self-assign
            state.dataSource = state.dataSource;

        //           let a = AsyncStorage.getItem(`persist:root`).then((val) => {
        // console.log(JSON.parse(val).nightCavalry)
    //   })
           
        },
        updateData: (state,action) => {
            let dataSource = state.dataSource;
            let payload = action.payload;
            let payloadArr = [];
            payloadArr.push(payload)

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

export const { getData, resetData, updateData } = nightCavalrySlice.actions;

export default nightCavalrySlice.reducer;


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