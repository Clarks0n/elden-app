import React from 'react';
import Card from '../../components/card/Card';

const General = () => {
    const parryFrame = [
        'Bucker Parry: 8/11',
        'Parry+Small shield:  11/11',
        'Parry+Medium Shield:  12/5',
        'Parry+dagger:  12/9',
        'Parry+fist:  13/5',
        'Parry+claws:  13/5',
        'Parry+curved swords:  12/5',
        'Parry+thrusting sword:  13/5 ',
        'Stormwall + small shield:  11/11',
        'Stormwall + medium shield:  11/11 ',
        'Carian Retaliation + small shield:  8/14',
        'Carian Retaliation + medium shield:  8/14 ',
        'Golden Parry + small shield:  8/14',
        'Golden Parry + medium shield:  8/14',
        'Thops Barrier + small shield:  13/9',
        'Thops Barrier + medium shield:  13/9',
    ];


  return (
    <Card title="General Info">
        <b>Best Stagger (Very Slow)</b>
        <ul>
            <li>Great Spear / GreatAxe / Great Hammer / Collosal Weapon</li>
        </ul>
        <b> Mediocre Stagger </b>
        <ul>
            <li>Greatsword / Halberd / Whips / Curved Greatsword</li>
        </ul>
        <b>Aside from above, everything else has bad stagger but fast </b>
        <br/>
        <br/>

        <b>Best Weight / Stability Small Shield</b>
        <ul>
            <li>Iron Round Shield, 3 - 41 </li>
        </ul>
        <br/>

        <b>Best Weight / Stability Medium Shield</b>
        <ul>
            <li>Beast Crest Heater Shield, 3.5 - 51 </li>
            <li>Scorpion Kite Shield, 4.5 - 52</li>
            <li>Blue Gold Kite Shield, 5 - 53</li>
        </ul>
        <br/>

        <b>Best Weight / Stability Great Shield</b>
        <ul>
            <li>Eclipse Crest Great Shield, 15 - 67</li>
            <li>Golden Great Shield, 17 - 70 </li>
            <li>Haligtree Crest Great Shield, 18.5 - 71</li>
        </ul>

        <b>Start of Parry Frames / Active of parry frames</b>
        <ul>
            {parryFrame.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </Card>
  )
}

export default General