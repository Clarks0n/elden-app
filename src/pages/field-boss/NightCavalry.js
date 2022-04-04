import React, { useEffect } from 'react';
import Card from '../../components/card/Card';
import DataGridCm from '../../components/data-grid/DataGrid';
// import { data } from '../../data/NightCavalry';
import { useSelector, useDispatch } from 'react-redux';
import LoadPanel from 'devextreme-react/load-panel';
import { getData } from '../../store/actions/NightCavalry';
// import { data } from '../../data/NightCavalry';

const NightCavalry = () => {
    const dispatch = useDispatch();

    const [dataSource] = useSelector((state) => [
        state.nightCavalry.dataSource
    ]);

    useEffect(() => {
        dispatch(getData());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    if(dataSource.length !== 0)
    return (
        <Card title="Night Cavalry">
            <h5>Combat Information (only appear at night)</h5>
            <div className="flex-container">
                <div className="flex-item-left">
                    <fieldset>
                        <legend>Absorptions </legend>
                        <ul>
                            <li> Phy (Sta): 35 </li>
                            <li> Phy (Sla): 35 </li>
                            <li> Phy (Str): 35 </li>
                            <li> Phy (Thr): 10 </li>
                            <li> Magic: 40      </li>
                            <li> Fire: 40       </li>
                            <li> Lightning: 20 </li>
                            <li> Holy: 40</li>
                        </ul>
                    </fieldset>
                </div>

                <div className="flex-item-right">
                    <fieldset>
                        <legend>Resistances </legend>
                        <ul>
                            <li> Poison : 154</li>
                            <li> Scarlet Rot: 154</li>
                            <li> Hemmorhage: 252 </li>
                            <li> Frostbite: 252 </li>
                            <li> Death: Immune    </li>
                        </ul>
                    </fieldset>
                </div>
            </div>

            <DataGridCm 
                dataSource={dataSource}
                dataName="NightCavalry"
            />
        </Card>
    )
    return (
        <LoadPanel visible={true} />
    )
}

export default NightCavalry;