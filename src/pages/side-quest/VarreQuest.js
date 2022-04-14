import React, { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import DataGridManual from '../../components/data-grid/DataGridManual';
import LoadPanel from 'devextreme-react/load-panel';
import AsyncStorage from '@react-native-async-storage/async-storage';

const VarreQuest = () => {
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('objVarre').then((value) => {
            setDataSource(JSON.parse(value));
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(dataSource.length !== 0)
    return (
        <Card title="Varre Side Quest">
            <DataGridManual 
                dataSource={dataSource}
                dataName="objVarre"
            />
        </Card>
    )
     return (
        <LoadPanel visible={true} />
    )
};


export default VarreQuest;

/*
const SideQuest = () => {
  return (
    <Card title="Side Quest">
        <table className="table-responsive">
            <tbody>
                <tr>
                    <th>Area Entered</th>
                    <th>Quest</th>
                </tr>
                <tr>
                    <td>Limgrave</td>
                    <td>
                        <p>White Faced Varre</p>
                        <ul>
                            <li>The First Step Grace</li>
                            <li>After Accessing Roundtable </li>
                        </ul>
                        <p>Renna</p>
                        <ul>
                            <li>Church Of Elleh at night (After getting torrent)</li>
                        </ul>
                        <p>Roderika</p>
                        <ul>
                            <li>Stormhill shack (give chrysalid memento from storm castle)</li>
                        </ul>
                        <p>Boc the seamster</p>
                        <ul>
                            <li>South of Agheel Lake North Site of Grace</li>
                            <li>Coastal Cave</li>
                        </ul>
                        <p>D Hunter of the dead </p>
                        <ul>
                            <li>North-East Limgrave near Saintsbridge</li>
                            <li>Summonwater Village (defeat tibia mariner)</li>
                        </ul>
                        <p>Yura </p>
                        <ul>
                            <li> South-East part of the Lake in Limgrave </li>
                            <li>North part of the Lake in Limgrave. Up the stream </li>
                            <li> Murkwater Cave </li>
                        </ul>
                        <p>Sellen </p>
                        <ul>
                            <li> Waypoint Ruins </li>
                        </ul>
                        <p>Patches</p>
                        <ul>
                            <li>Murkwater Cave</li>
                        </ul>
                        <p>Iron Fist Alexander</p>
                        <ul>
                            <li>Cliff above/near the Saintsbridge Site of Grace</li>
                        </ul>
                        <p>Blaidd</p>
                        <ul>
                            <li>Mistwood ruins</li>
                            <li>Get snap finger gesture from merchant kale </li>
                            <li>Forlorn Hound Evergaol</li>
                        </ul>
                        <p>Kenneth</p>
                        <ul>
                            <li>Ruin on the Path from Limgrave going to Mistwood</li>
                            <li>Fort Haight </li>
                        </ul>
                        <p>Bernahl</p>
                        <ul>
                            <li>Warmaster Schack</li>
                        </ul>
                        <p>Gurranq</p>
                        <ul>
                            <li>Bestial Sanctum </li>
                        </ul>
                        <p>Rogier</p>
                        <ul>
                            <li>Summoning him during the fight with Margit could trigger an interaction </li>
                            <li>Stromveil Castle</li>
                            <li>Roundtable hold </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Weeping Peninsula</td>
                    <td>
                        <p>Irina</p>
                        <ul>
                            <li>Bridge of sacrifice</li>
                        </ul>
                        <p>Edgar</p>
                        <ul>
                            <li>Castle Morne</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Stormveil Castle</td>
                    <td>
                        <p>White Faced Varre</p>
                        <ul>
                            <li>First step site of grace , talk after beating godrick</li>
                        </ul>
                        <p>Gatekeeper Gostoc</p>
                        <ul>
                            <li>Godrick site of grace,talk after beating godrick</li>
                        </ul>
                        <p>Nephelli</p>
                        <ul>
                            <li>From the Secluded Cell Grace move towards the main gate, past the troll and into a side room. Stormveil Castle</li>
                            <li>Summon her for the fight against Godrick (optional)</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Liurnia of the lakes</td>
                    <td>
                        <p>Edgar</p>
                        <ul>
                            <li>Revenger's Shack (complete irina quest)</li>
                        </ul>
                        <p>Boc the seamster</p>
                        <ul>
                            <li> Church of Vows, quest item needed is here </li>
                            <li> Lake-Facing Cliffs Site of Grace</li>
                            <li> East Raya Lucaria Gate Site of Grace </li>
                        </ul>
                        <p>Hyetta</p>
                        <ul>
                            <li>Lake-Facing Cliffs Site of Grace (Only appear if Irna's Quest is completed) </li>
                            <li>Purified Ruins</li>
                            <li>Bellum Church</li>
                            <li>Gate Town Bridge Grace of Site</li>
                        </ul>
                        <p>Thops</p>
                        <ul>
                            <li>Church of Irith ( give academy glintstone key) </li>
                            <li>Raya Lucaria Academy( Outside clasroom grace)</li>
                        </ul>
                        <p>Patches</p>
                        <ul>
                            <li>Scenic Isle, close to the Laskyar Ruins Grace </li>
                        </ul>
                        <p>Rya</p>
                        <ul>
                            <li>Scenic Isle, close to the Laskyar Ruins Grace </li>
                        </ul>
                        <p>White faced varre</p>
                        <ul>
                            <li>Rose Church </li>
                            <li>Use bloody finger invasion 3 times  </li>
                            <li>Soak lord favor with blood Maiden corpse in the Church of Inhibition </li>
                        </ul>
                        <p>Jarbairn</p>
                        <ul>
                            <li> Jarburg, South of the Carian Study Hall</li>
                        </ul>
                        <p>Alexander</p>
                        <ul>
                            <li>South of the Carian Study Hall (need oil to free him)</li>
                        </ul>
                        <p>Diallos</p>
                        <ul>
                            <li>North and slightly West of the Academy Gate Town Site of Grace in Northern Liurnia</li>
                        </ul>
                        <p>Yura</p>
                        <ul>
                            <li>Raya Lucaria, requesting aid from the player in the form of a Red Summon Sign on the bridge north of the Main Gate Grace.</li>
                        </ul>
                        <p>Lattena</p>
                        <ul>
                            <li>Slumbering Wolf’s Shack</li>
                        </ul>
                        <p>Albus</p>
                        <ul>
                            <li>Village of the Albinaurics</li>
                        </ul>
                        <p>Nephelli </p>
                        <ul>
                            <li>Village of the Albinaurics</li>
                            <li>Summon Nepheli in the fight against the OmenKiller(optional)</li>
                            <li>Roundtable hold</li>
                        </ul>
                        <p>Ranni</p>
                        <ul>
                            <li>Ranni's rise</li>
                        </ul>
                        <p>Seluvis</p>
                        <ul>
                            <li>Seluvis's rise</li>
                            <li>Don't progress ranni quest otherwise he's dead</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Siofra River</td>
                    <td>
                        <p>Blaidd (must start ranni questline)</p>
                        <ul>
                            <li>standing at the edge of a cliff near a wind jump-point for your mount</li>
                        </ul>
                    </td>
                </tr>
                   <tr>
                    <td>Caelid South</td>
                    <td>
                        <p>Gowry</p>
                        <ul>
                            <li>Gowry Shack</li>
                        </ul>
                        <p>Iron fist alexander</p>
                        <ul>
                            <li>Redmane Castle</li>
                            <li>South of the Carian Study Hall, in Liurnia East.</li>
                            <li>Gael Tunnel</li>
                            <li>Chamber Outside the Plaza Site of Grace</li>
                        </ul>
                        <p>Millicent</p>
                        <ul>
                            <li>Church of the plague</li>
                            <li>Gowry Shack</li>
                        </ul>
                        <p>Great jar</p>
                        <ul>
                            <li>Entering Caelid from Siofra River you will encounter Great Jar</li>
                            <li>Summon great jar warrior x3</li>
                        </ul>
                        <p>Blaidd</p>
                        <ul>
                            <li>Redmane castle</li>
                        </ul>
                        <ul>
                            <li>Redmane castle</li>
                        </ul>
                        <p>witch hunter jerren</p>
                        <ul>
                            <li>Redmane castle (after getting selen primal glintstone)</li>
                        </ul>
                        <p>Sellen</p>
                        <ul>
                            <li>Waypoint ruins after defeating radahn and after getting azur comet</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Altus Plateau</td>
                    <td>
                        <p>Blackguard boggard</p>
                        <ul>
                            <li>North area of the Outer moat of Leyndell</li>
                        </ul>
                        <p>Boc the seamster</p>
                        <ul>
                            <li>East Capital Rampart Site of Grace</li>
                        </ul>
                        <p>Bro corhyn (tell him where goldmask location)</p>
                        <ul>
                            <li>North of the Altus Highway Junction Grace,Near the West Capital Rampart </li>
                        </ul>
                        <p>Dung Eater (give seedbed curse to progress questline)</p>
                        <ul>
                            <li>Roundtable hold</li>
                        </ul>
                        <p>Millicent</p>
                        <ul>
                            <li>Erdtree Gazing Hill</li>
                            <li>Windmill Heights Grace</li>
                        </ul>
                        <p>Yura</p>
                        <ul>
                            <li>Second Church of Marika</li>
                        </ul>
                        <p>Nephelli</p>
                        <ul>
                            <li>Limgrave throne room after defeating morgott</li>
                        </ul>
                        <p>Goldmask (corhyn questline)</p>
                        <ul>
                            <li>Portal near the Forest Spanning Greatbridge Site of Grace</li>
                            <li>Near the West Capital Rampart</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Mt.Gelmir</td>
                    <td> 
                        <p>Sellen</p>
                        <ul>
                            <li>After get azur comet</li>
                        </ul>
                        <p>Iron Fist Alexander</p>
                        <ul>
                            <li>Seethewater Terminus</li>
                        </ul>
                        <p>Patches</p>
                        <ul>
                            <li>Volcano manor</li>
                            <li>Shaded Castle (after killing rykard)</li>
                        </ul>
                        <p>Diallos and bernahl</p>
                        <ul>
                            <li>Volcano manor</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Mountaintops of the giants</td>
                    <td>
                        <p>Bro Corhyn and Goldmask</p>
                        <ul>
                            <li>South of stargazer ruins(at bridge)</li>
                        </ul>
                        <p>Millicent</p>
                        <ul>
                            <li>Ancient Snow Valley Ruins Site of Grace</li>
                        </ul>
                        <p>Yura</p>
                        <ul>
                            <li>Zabor ruins site of grace</li>
                        </ul>
                        <p>Jar bairn and diallos</p>
                        <ul>
                            <li>Jarburg</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Ainsel River Main and Nokron</td>
                    <td>
                        <p>Minitature Ranni</p>
                        <ul>
                            <li>Nokstella Site of Grace (talk to at site of grace)</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Deeproot Depths</td>
                    <td>
                        <p>Fia</p>
                        <ul>
                            <li>Talest part of the root</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Consecrated Snowfield</td>
                    <td>
                        <p>Latenna</p>
                        <ul>
                            <li>Apostate Derelict</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Brace of Haligtree</td>
                    <td>
                        <p>Millicent</p>
                        <ul>
                            <li>Prayer Room site of grace</li>
                            <li>Defeat putrid avatar near sewer and then reload</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Crumbling Farum Azula</td>
                    <td>
                        <p>Iron Fist Alexander</p>
                        <ul>
                            <li>Dragon Temple Altar Site of Grace</li>
                        </ul>
                        <p>Bernahl (volcano manor quest)</p>
                        <ul>
                            <li>Great Bridge Site of Grace</li>
                        </ul>
                        <p>Jar Bairn</p>
                        <ul>
                            <li>Jarburg</li>
                        </ul>
                        <p>Diallos</p>
                        <ul>
                            <li>Jarburg</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>City of Ash</td>
                    <td>
                        <p>Brother Corhyn</p>
                        <ul>
                            <li>Spiral Spear statue</li>
                        </ul>
                        <p>Goldmask</p>
                        <ul>
                            <li>Erdtree Sanctuary</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </Card>
  )
}
*/

// export default SideQuest;