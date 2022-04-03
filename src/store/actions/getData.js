import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { 
    dataSource: []
};

export const getDataSlice = createSlice({
    name: 'getData',
    initialState: initialStateValue,
    reducers: {
        getData: (state, action) => {
            // state.dataSource = data;
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

        },
        resetData: (state) => {
            state.dataSource = [];
        }
    }
});

export const { getData, resetData, updateData } = getDataSlice.actions;

export default getDataSlice.reducer;


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
