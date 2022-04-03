import React, { useEffect } from 'react';
import Card from '../../components/card/Card';
import DataGridCm from '../../components/data-grid/DataGrid';
import { useSelector, useDispatch } from 'react-redux';
import LoadPanel from 'devextreme-react/load-panel';
import { getData } from '../../store/actions/BellBearing';

const BellBearing = () => {
    const dispatch = useDispatch();

    const [dataSource] = useSelector((state) => [
        state.bellBearing.dataSource
    ]);

    useEffect(() => {
        dispatch(getData());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    if(dataSource.length !== 0)
    return (
        <Card title="Bell Bearing">
            <p>Merchant bell can bet get by killing the merchant</p>
            <p>Npc bell can bet get by killing the npc or when they died from progressing sidequest</p>
        
            <DataGridCm 
                dataSource={dataSource}
            />
        </Card>
    )
    return (
        <LoadPanel visible={true} />
    )
}

export default BellBearing;