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

    const equipLoad = [
        `Light Load: 29.9% of your Max Equip Load and below (ong roll, quick backstep recovery. Increase in roll length is barely noticeable, as is increased backstep recovery speed. No difference in stamina recovery, animation, nor stamina usage from medium load)`,
        `Medium Load: 30% to 69.9% of your Max Equip Load `,
        `Heavy Load: 70% to 100% of your Max Equip Load (Slow and short rolls with next to no iframes. Very long backstep recovery. Stamina regen rate is also penalized by about 20%)`
    ];

    const statCap = [
        `Vig : 40 / 60`,
        `Min : 55 / 60`,
        `End : 50(stam) 25 /60 (equip)`,
        `Str : 20 / 55 / 80`,
        `Dex : 20 / 55 / 80`,
        `Int : 20 / 50 / 80 , 60 / 80 (Sorcery Scaling)`,
        `Fai : 20 / 50 / 80 , 60 / 80 (Incantation Scaling)`,
        `Arc : 20 / 50 / 80 , 30 / 45 (Incantation Scaling)`
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

        <b>Equip Load </b>
        <ul>
            {equipLoad.map((item) => (
                <li>{item}</li>
            ))}
        </ul>

        <b>Stat Cap </b>
        <ul>
            {statCap.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </Card>
  )
}

export default General