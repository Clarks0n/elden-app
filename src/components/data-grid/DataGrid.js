import React from 'react';
import { DataGrid, Column, Pager, Paging, FilterRow, Editing, LoadPanel }  from 'devextreme-react/data-grid';
import { useDispatch } from 'react-redux';
import { updateData } from '../../store/actions/NightCavalry';

const DataGridCm = ({dataSource}) => {
  const dispatch = useDispatch(); 
  let newObj, keys, columnArr = null;

  if(dataSource.length !== 0) {
    newObj = dataSource[0];
    keys = Object.keys(newObj);
    columnArr = keys.filter((item) => {
      return item !== "id"
    })
  };


  const onRowUpdating = (e) => {
    const oldData = e.oldData;
    const newData = e.newData;

    let data = {...oldData,...newData};

    e.cancel = dispatch(updateData(data));
  };

  return (
    <DataGrid
        dataSource={dataSource}
        keyExpr="id"
        showBorders={true}
        rowAlternationEnabled={true}
        onRowUpdating={onRowUpdating}
    >
      <Editing
        mode="batch"
        allowUpdating={true}
      />
      <LoadPanel enabled={true} />
      <Paging defaultPageSize={10} />
      <Pager showPageSizeSelector={true} showInfo={true} />
      <FilterRow visible={true} />
      {columnArr.map((item,i) => {
        return (
          item === 'done' ?
          <Column key={i} dataField={item} allowEditing={true} />
          :
          <Column key={i} dataField={item} allowEditing={false} />
        )
      })}
    </DataGrid>
  )
};

export default DataGridCm;