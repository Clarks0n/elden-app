let arr = [
    ['Crimson Amber Medallion',`
        Can be bought from the Nomadic Merchant at the eastern side of Weeping Peninsula, for er runes 13 300 Runes. Map Link <br/>
        +1 Variation: Can be found in Volcano Manor. Go to the prison church site of grace, go out and through the little town as if you were progressing through the manor as normal, and use a Stonesword Key to go through the fog gate. A big moving saw enemy is there but you can easily run up the stairs to the level above, where the talisman is on a dead body. <br/>
        +2 Variation: Can be found in Leyndell, Capital of Ash. Just south of the site of grace drop down the open sewer grate to the beam below`],
    ['Cerulean Amber Medallion',
        `Lakeside Crystal Cave after defeating the Bloodhound Knight. See the Location on the Elden Ring Map here <br/>
        +1 Variation: Castle Sol: Found on a corpse hanging by a wooden ledge above the southern walls of the castle. This area is accessed by climbing a ladder behind the church in the southeast and following the walls west. Beware the very powerful dual sword knight guarding the area. He can teleport behind you and perform very long combos <br/>
        +2 Variation: Lunar Estate Ruins: Found in a treasure chest in an underground room northwest of the ruins. Look for an Imp Statue pressed up against the wall. This requires 1 Stonesword Key. The stairs are also concealed by an illusory floor. Simply hit the floor next to the Imp Statue to reveal the stairs `],
    ['Viridian Amber Medallion',
        `Dropped by Miranda the Blighted Bloom in Tombsward Cave. Elden Ring Interactive <br/>
        +1 Variant can be found in Altus Plauteau, south of the Outer Wall Battleground (around -93, 104) Site of Grace. You should hear Margit whisper, "I see you, Tarnished..." to you before appearing on the road. Defeat him again and it will drop.  Elden Ring interactive <br/>
        +2 Variant is in Haligtree. The closest site of grace is the Haligtree Town Plaza. Run to the roof with the Summoning Snail, jump to the building on the right (it's lower), immediately turn around and jump inside the building. There will be a chest with the medallion and some mushroom people. Elden Ring Interactive 
        `
    ],
    [
        'Arsenal Charm',
        `Looted off a body inside the room where the Many Armed Key Master is in the wine cellar of the Stormveil Castle in Stormhill <br/>
        +1 Variant: Within Altus Tunnel located in the Altus Plateau, upon reaching a massive chamber you will want to drop down onto a platform below and then climb up the tree root to a higher platform where the charm will be waiting on a body <br/>`
    ]
];

let arrName = [
    'Crimson Amber Medallion',
    'Cerulean Amber Medallion',
    'Viridian Amber Medallion',
    'Arsenal Charm',
    'Great-Jar Arsenal',
    'Erdtree Favor',
    'Radagon Scarseal',
    'Radagon Soreseal',
    'Starscourge Heirloom',
    'Prosthesis Wearer Heirloom',
    'Stargazer Heirloom',
    'Two Finger Heirloom',
    'Silver Scarab',
    'Gold Scarab',
    'Moon of Nokstella',
    'Green Turtle Talisman',
    'Stalwart Horn Charm',
    'Immunizing Horn Charm',
    'Clarifying Horn Charm',
    'Price of Death Pustule',
    'Mottled Necklace',
    'Bull Goat Talisman',
    'Marika Scarseal',
    'Marika Soreseal',
    'Warrior Jar Shard',
    'Shard of Alexander',
    'Millicent Prothesis',
    'Magic Scorpion Charm',
    'Lightning Scrorpion Charm',
    'Fire Scorpion Charm',
    'Sacred Scorpion Charm',
    'Red Feathered Branchsword',
    'Ritual Sword Talisman'
    ];

// console.log(arr)

let obj = arr.map((item, i) =>{ 
    return (
        {id: i, name: item[0], location: item[1], done: false}
    )
});


