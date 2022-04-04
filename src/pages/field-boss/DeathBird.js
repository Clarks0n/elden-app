import React, { useEffect } from 'react';
import Card from '../../components/card/Card';
import DataGridCm from '../../components/data-grid/DataGrid';
import { useSelector, useDispatch } from 'react-redux';
import LoadPanel from 'devextreme-react/load-panel';
import { getData } from '../../store/actions/DeathBird';

const DeathBird = () => {
    const dispatch = useDispatch();

    const [dataSource] = useSelector((state) => [
        state.deathBird.dataSource
    ]);

    useEffect(() => {
        dispatch(getData());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    if(dataSource.length !== 0)
    return (
        <Card title="Death Bird">
            <h5>Combat Information (only appear at night)</h5>
            <div className="flex-container">
                <div className="flex-item-left">
                    <fieldset>
                        <legend>Absorptions </legend>
                        <ul>
                            <li> Weak spot: Head </li>
                            <li> Phy (Sta): 10 </li>
                            <li> Phy (Sla): 10 </li>
                            <li> Phy (Str): -40 </li>
                            <li> Phy (Thr): 35 </li>
                            <li> Magic: 20      </li>
                            <li> Fire: 20       </li>
                            <li> Lightning: 40 </li>
                            <li> Holy: -40</li>
                        </ul>
                    </fieldset>
                </div>

                <div className="flex-item-right">
                    <fieldset>
                        <legend>Resistances </legend>
                        <ul>
                            <li> Poison : Immune</li>
                            <li> Scarlet Rot: 252</li>
                            <li> Hemmorhage: Immune </li>
                            <li> Frostbite: Immune </li>
                            <li> Death: Immune    </li>
                        </ul>
                    </fieldset>
                </div>
            </div>

            <DataGridCm 
                dataSource={dataSource}
                dataName="DeathBird"
            />
        </Card>
    )
    return (
        <LoadPanel visible={true} />
    )
}

export default DeathBird;