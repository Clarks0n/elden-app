import React, { useEffect } from 'react';
import Card from '../../components/card/Card';
import DataGridCm from '../../components/data-grid/DataGrid';
import { useSelector, useDispatch } from 'react-redux';
import LoadPanel from 'devextreme-react/load-panel';
import { getData } from '../../store/actions/Magic';

const Magic = () => {
    const dispatch = useDispatch();

    const [dataSource] = useSelector((state) => [
        state.magic.dataSource
    ]);

    useEffect(() => {
        dispatch(getData());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    if(dataSource.length !== 0)
    return (
        <Card title="Magic">
            <DataGridCm 
                dataSource={dataSource}
            />
        </Card>
    )
    return (
        <LoadPanel visible={true} />
    )
}

export default Magic;