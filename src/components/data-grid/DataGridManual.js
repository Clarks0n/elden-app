import React from 'react';
import { DataGrid, Column, Pager, Paging, FilterRow, Editing, LoadPanel }  from 'devextreme-react/data-grid';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DataGridManual = ({dataSource, dataName}) => {
  let newObj, keys, columnArr = null;

  if(dataSource.length !== 0) {
    newObj = dataSource[0];
    keys = Object.keys(newObj);
    columnArr = keys.filter((item) => {
      return item !== "id"
    })
  };

  // const customizeValueText = (e) => {
  //   return e.valueText.replaceAll("<br />","\n");
  // };

  const onRowUpdating = (dataName,dataSource,e) => {
    const oldData = e.oldData;
    const newData = e.newData;

    let data = {...oldData,...newData};
    let payloadArr = [];
    payloadArr.push(data);

    let newDataSource = dataSource.map(obj => payloadArr.find(o => o.id === obj.id) || obj);

    AsyncStorage.setItem(`${dataName}`, JSON.stringify(newDataSource));
   
  };

  return (
    <DataGrid
        dataSource={dataSource}
        keyExpr="id"
        showBorders={true}
        rowAlternationEnabled={true}
        onRowUpdating={onRowUpdating.bind(this,dataName,dataSource)}
        // onRowUpdating={onRowUpdating}
        // columnAutoWidth={true}
        columnHidingEnabled={false}
        wordWrapEnabled={true}
    >
      <Editing
        mode="batch"
        allowUpdating={true}
      />
      <LoadPanel enabled={true} />
      <Paging defaultPageSize={30} />
      <Pager showPageSizeSelector={true} showInfo={true} />
      <FilterRow visible={true} />
      {columnArr.map((item,i) => {
        return (
          item === 'done' ?
          <Column key={i} dataField={item} allowEditing={true} />
          :
          <Column key={i} dataField={item} allowEditing={false} 
            encodeHtml={false}
            // customizeText={customizeValueText}
          />
        )
      })}
    </DataGrid>
  )
};

export default DataGridManual;