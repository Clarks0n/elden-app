import React, { useEffect } from 'react';
import Card from '../../components/card/Card';
import DataGridCm from '../../components/data-grid/DataGrid';
import { useSelector, useDispatch } from 'react-redux';
import LoadPanel from 'devextreme-react/load-panel';
import { getData } from '../../store/actions/WhetBlade';

const WhetBlade = () => {
    const dispatch = useDispatch();

    const [dataSource] = useSelector((state) => [
        state.whetBlade.dataSource
    ]);

    useEffect(() => {
        dispatch(getData());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    if(dataSource.length !== 0)
    return (
        <Card title="Crystal Tear">
            <DataGridCm 
                dataSource={dataSource}
            />
        </Card>
    )
    return (
        <LoadPanel visible={true} />
    )
}

export default WhetBlade;