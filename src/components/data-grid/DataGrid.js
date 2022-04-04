import React from 'react';
import { DataGrid, Column, Pager, Paging, FilterRow, Editing, LoadPanel }  from 'devextreme-react/data-grid';
import { useDispatch } from 'react-redux';
import { updateData as updateCavalry} from '../../store/actions/NightCavalry';
import { updateData as updateAshes} from '../../store/actions/AshesOfWar';
import { updateData as updateBearing} from '../../store/actions/BellBearing';
import { updateData as updateHunter} from '../../store/actions/BellHunter';
import { updateData as updateCrystal} from '../../store/actions/CrystalTear';
import { updateData as updateDeathBird} from '../../store/actions/DeathBird';
import { updateData as updateMagic} from '../../store/actions/Magic';
import { updateData as updatePainting} from '../../store/actions/Painting';
import { updateData as updateSeedbed} from '../../store/actions/SeedbedCurse';
import { updateData as updateWhetblade} from '../../store/actions/WhetBlade';

const DataGridCm = ({dataSource, dataName}) => {
  const dispatch = useDispatch(); 

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

  const onRowUpdating = (e) => {
    const oldData = e.oldData;
    const newData = e.newData;

    let data = {...oldData,...newData};

    switch (dataName) {
      case 'AshesOfWar':
        e.cancel = dispatch(updateAshes(data));
        break;
      case 'NightCavalry':
        e.cancel = dispatch(updateCavalry(data));
        break;
      case 'BellHunter':
        e.cancel = dispatch(updateHunter(data));
        break;
      case 'BellBearing':
        e.cancel = dispatch(updateBearing(data));
        break;
      case 'CrystalTear':
        e.cancel = dispatch(updateCrystal(data));
        break;
      case 'DeathBird':
        e.cancel = dispatch(updateDeathBird(data));
        break;
      case 'Magic':
        e.cancel = dispatch(updateMagic(data));
        break;
      case 'Painting':
        e.cancel = dispatch(updatePainting(data));
        break;
      case 'SeedbedCurse':
        e.cancel = dispatch(updateSeedbed(data));
        break;
      case 'Whetblade':
        e.cancel = dispatch(updateWhetblade(data));
      default:
        break;
    }

    // e.cancel = dispatch(updateData(data));
  };

  return (
    <DataGrid
        dataSource={dataSource}
        keyExpr="id"
        showBorders={true}
        rowAlternationEnabled={true}
        // onRowUpdating={onRowUpdating.bind(this,dataName)}
        onRowUpdating={onRowUpdating}
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

export default DataGridCm;