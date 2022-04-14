import AsyncStorage from '@react-native-async-storage/async-storage';

function Mapper(data) {
  let output = data.map((item,i) => (
    {id: i, step: item, done: false }
  ))

  return output;
};

function setObj(objname, objdata) {
    AsyncStorage.setItem(objname, JSON.stringify(objdata));
};

let varreData = [
    `Exhaust Varre's dialogue at The First Step Site of Grace`,
    `Exhaust everyone's dialogue at the Roundtable Hold`,
    `Defeat Godrick the Grafted`,
    `Exhaust Enia's dialogue at the Roundtable Hold`,
    `Exhaust Varre's dialogue at The First Step Site of Grace`,
    `Exhaust Varre's dialogue at Rose Church. He'll give you Festering Bloody Finger (x5). Use them to perform 3 invasions (success/failure has no impact)`,
    `Exhaust Varre's dialogue at The First Step Site of Grace`,
    `Soak the Lord of Blood’s Favor in the blood of a maiden to turn it into the Bloodied, Find the dead maiden in the Chapel of Anticipation`,
    `Give Varre the Bloodied Lord of Blood’s Favor. He'll give you a resusable Bloody Finger, and the Pureblood Knight's Medal`,
    `He'll invade 3 times in the blood swamp, kill him to get his armor set`,
    `Use the red sign near the Mausoleum Dynasty Midpoint Site of Grace to duel him`
];

const objVarre = varreData.map((item, i) => (
    {id: i, step: item, done: false }
));

export const setVarre = () => {
    AsyncStorage.setItem('objVarre', JSON.stringify(objVarre));
};

let bocData = [
    `Free Boc from his tree form in Limgrave. Can be found south of the Agheel Lake North grace`,
    `Talk to Boc at the Coastal Cave. Defeat the boss of the cave and return to him`,
    `Give Boc his sewing tools`,
    `Boc will move to the Lake-Facing Cliffs Site of Grace, at Liurnia of the Lakes`,
    `Boc will move to the East Raya Lucaria Gate site of grace. You can give him a Golden Needle`,
    `Boc will move to the Altus Highway Junction site of grace`,
    `Boc will move to the East Capital Rampart site of grace.`, 
    `Boc will voice his desire to be rebirthed by Rennala. Two choices to proceed`,
    `Give him a Larval Tear. Upon resting, Boc will appear next to Rennala. Resting again, will make him die`,
    `Perform the "You're Beautiful" Prattling Pate in front of him, then discuss it (unknown if quest continues after this)`
];

const objBoc = bocData.map((item, i) => (
    {id: i, step: item, done: false }
));

export const setBoc = () => {
    AsyncStorage.setItem('objBoc', JSON.stringify(objBoc));
};

let roderikaData = [
    `Exhaust her dialogue at Stormhill Shack in Limgrave`,
    `Obtain Chrysalids' Memento from Stormveil Castle (will move to roundtable if reaching liurnia regardless given memento or not)`,
    `Give her the memento`,
    `Talk to her and Smithing Master Hewg several times in Roundtable Hold. He will take her as his apprentice`,
    `Return to where you found the Chrysalids' Memento to find the Crimson Hood`
];

const objRoderika = Mapper(roderikaData);

export const setRoderika = () => {
    AsyncStorage.setItem('objRoderika', JSON.stringify(objRoderika));
};

let dHunterData = [
    `Talk to him in Stormhill, pàst the Saintsbridge`,
    `Defeat a Tibia Mariner boss`,
    `Obtain the map to Bestial Sanctum`,
    `He will appear in the Roundtable Hold, sitting in a chair. He will sell some spells to you`,
    `Give him the Weathered Dagger you get from Fia's questline. Reloading the area will open the door on the right side of the Hold. D's questline ends here`
];

const objdHunter = Mapper(dHunterData);

export const setdHunter = () => {
    setObj('objdHunter', objdHunter)
};

let thopsData = [
    'Talk to him at Church of Irith, in Liurnia of the Lakes',
    'Obtain the second Academy Glintstone Key. Found inside the Raya Lucaria Academy',
    `Return to the Church of Irith and give him the key. Reload to find he has gone. You will find a Teardrop Scarab that drops an Ash of War: Thops's Barrier instead`,
    `Find his corpse just outside the room with the Schoolhouse Classroom Site of Grace, within the Raya Lucaria Academy, to obtain Thops Barrier, Thops's Bell Bearing and Academy Glintstone Staff`
];

const objThops = Mapper(thopsData);

export const setThops = () => {
    setObj('objThops', objThops)
};

let hyettaData = [
    `Talk to her at Lake-Facing Cliffs Site of Grace`,
    `Giver her Shabriri Grapes. Rewards you with the As You Wish Gesture`,
    `Find her in the western side of the Purified Ruins. She asks for another Shabriri Grape`,
    `Found a little north of the Gate Town Bridge site of grace. She asks for another Shabriri Grape`,
    `Moves to Bellum Church and ask for a Fingerprint Grape`,
   `Defeat Festering Fingerprint Vyke near the Church of Inhibition for Fingerprint Grape, give it to Hyetta`,
    `Final location is the Frenzied Flame Proscription. Accepting the three fingers flame she becomes your finger maiden, replacing Melina`
];

const objHyetta = Mapper(hyettaData);

export const setHyetta = () => {
    setObj('objHyetta', objHyetta)
};

let kennethData = [
    `Meet him in the northern area of Mistwood and exhaust his dialogue`,
    `Liberate Fort Haight`,
    `Return to him for your reward: Erdsteel Dagger`,
    `Accept his Accord`,
    `Exhaust his dialogue at Fort Haight`,
    `Defeat Godrick and proceed with Nepheli Loux's questline. Instead of giving her Seluvis's potion, give her the Stormhawk King and exhaust her dialogue. (The Stormhawk King can be found at the Chapel of Anticipation upon return)`,
    `Travel to Godrick's grace and rest at it. Kenneth and Nepheli can then be found inside the throne room`,
    `Morgott must be defeated before he will appear in throne room`
];

const objKenneth = Mapper(kennethData);

export const setKenneth = () => {
    setObj('objKenneth', objKenneth)
};

let ranniData = [
    `When you first get access to Torrent, going to the Church of Elleh at night to meet Renna/Ranni`,
    `Meet Ranni in Ranni's Rise`,
    `Have her agree to let you serve her. This may require the Black Knifeprint`,
    `Talk to Blaidd, Iji, and Seluvis before returning to talk to Ranni`,
    `Find Blaidd in the Siofra River area`,
    `Talk to Selvius to gain Seluvis's Introduction, and take the item to Sellen in Waypoint Ruins`,
    `Defeat Starscourge Radahn, this will lead to a falling star crashing into a field south of Mistwood`,
    `Drop down into the resulting crater and navigate to Nokron
    Reach Night's Sacred Ground and collect the Fingerslayer Blade`,
    `Return the Fingerslayer Blade to Ranni and collect the Carian Inverted Statue`,
    `Go to the Carian Study Hall, and use the statue to reach the top of the Divine Tower of Liurnia
    Acquire the Cursemark of Death from the body`,
    `At Ainsel River Main collect Miniature Ranni
    Rest at the Ainsel River Main grace site and speak with Ranni, she'll task you with defeating the Baleful Shadow`,
    `Travel along the Ainsel River until you reach Nokstella`,
    `Defeat Baleful Shadow for Discarded Palace Key`,
    `Unlock chest in Raya Lucaria Grand Library next to Rennala for Dark Moon Ring`,
   ` With the ring, travel back to the Lake of Rot in the Ainsel River area, continuing to the Grand Cloister`,
    `Using the coffin in the Grand Cloister, access and defeat Astel`,
    `Continue to the Moonlight Altar, past Glintstone Dragon Adula, and enter the Cathedral of Manus Celes`,
    `Use the Dark Moon Ring on the Miniature Ranni to revive Ranni for Dark Moon Greatsword`,
    `If you return to Ranni's Chamber, after achieving the Age of Stars ending, there is additional dialogue with Miniature Ranni`
];

const objRanni = Mapper(ranniData);

export const setRanni = () => {
    setObj('objRanni', objRanni)
};

let alexanderData = [
    `Alexander can be found in Northern Stormhill`,
    `After that he can be found at Gael Tunnel second entrace from limgrave`,
    `He can be found at Redmane Castle, preparing to enter the festival, alongside Blaidd`,
    `After killing Starscourge Radahn, Alexander moves to Starscourge Radahn grace`,
    `South of Carian Study Hall Alexander, stuck in another hole. Use one or more oil pots and then heavy attacks to free him`,
    `In Seethewater Terminus, behind the Magma Wyrm, you can find Alexander bathing in the lava.`,
    `Alexander can be summoned to battle the Fire Giant at Mountaintops of the Giants`,
    `At Crumbling Farum Azula, Alexander can be found on a large flat span of ruins and challenges player. Drops Shard of Alexander as well as Warrior Jar Shard`,
];

const objAlexander = Mapper(alexanderData);

export const setAlexander = () => {
    setObj('objAlexander', objAlexander)
};

let blaiddData = [
    `Once you enter Mistwood, you will hear a wolf howling`,
    `Return to Merchant Kalé and ask him about it. He will teach you the Finger Snap gesture`,
    `Return to Mistwood and use this gesture after hearing the howl to summon Blaidd`,
    `Talk to him when you find him, and he will announce that he is looking for a man named "Darriwil"`,
    `Head to the Forlorn Hound Evergaol to fight Darriwil. Blaidd will make an appearance as a summon and after the fight is over, talk to him to receive Somber Smithing Stone (2)`,
    `Exhaust his dialog. He mentions a blacksmith (Iji)` ,
    `Meet Iji and mention "Blaidd sent them" to unlock Carian Filigreed Crest to purchase`,
    `Renna will request you to meet him at Siofra River. Enter the Siofra River Well and find Blaidd, exhaust his dialog`,
    `He explains that after opening the way to Nokron he has been given another task`,
    `Return to where you first met gim to find a message. Speak to War Counselor Iji and head to the Forlorn Hound Evergaol to free Blaidd. Go back to War Counselor Iji and talk to him`,
    `After completing Ranni's questline Blaidd is at Ranni's Rise, enraged and hostile. Kill him for his armor and greatsword`
];

const objBlaidd = Mapper(blaiddData);

export const setBlaidd = () => {
    setObj('objBlaidd', objBlaidd)
};

let fiaData = [
    `Talk to Fia after defeating Godrick the Grafted. She only talks only while holding you, so you have no choice but to accept her hug in order to start her quest`,
   `Obtain the Black Knifeprint from the Black Knife Catacombs and return to the Roundtable Hold to give it to Sorcerer Rogier. Talk to Fia, reload the area and talk to Rogier again`,
    `Reach Altus Plateau and activate the Grand lift of Dectus. When you talk to her after this she will give you a dagger`,
    `Give the dagger to D in Roundtable Hold`,
    `Reload Roundtable Hold and go to newly unlocked area near blacksmith. Exhaust her dialogue`,
    `Head to Deeproot Depths and go to the Prince of Death's Throne Grace and talk to her. When she asks if you came to kill her, ask for an embrace`,
    `Give her the Cursemark of Death which you can get from Ranni's Questline`,
    `Exhaust her dialog and reload the area. She allows you to enter a dream and fight Lichdragon Fortissax`,
    `Killing Lichdragon Fortissax and returning will allow you to loot the Mending Rune of The Death-Prince where she lies along with Fia's Hood and Fia's Robe`
];

const objFia = Mapper(fiaData);

export const setFia = () => {
    setObj('objFia', objFia)
};

let sellenData = [
    `Find her at Waypoint Ruins in Limgrave. Accept to study under her teaching, exhaust all dialogues`,
    `Return to Sorceress Sellen. She tasks you to find another Sorcerer and gives you a key for an arcane ward`,
    `Go to Sellia Hideaway and open the Warded door in the second pit. Interact with the Sorcerer inside`,
    `After defeating Starscourge Radahn return to her, exhaust dialog.` ,
    `Go to the Redmane Castle throne room and exhaust dialogue with Witch-Hunter Jerren, if you haven't already.`,
    `Find Primeval Sorcerer Azur and interact with him, near the Hermit Village.`,
    `Meet her at the Witchbane Ruins for Primevil Glintstone.`,
    `Return to Witchbane Ruins and you'll find Witch-Hunter Jerren. Exhaust his dialogue again until he mention's Sellen possibly moving to a new body.`,
    `Go to Three Sisters and hit the illusory floor in the center of the ruins, northeast of Ranni's Rise. Inside is another illusory wall to the left of Selvius's message on the floor.`,
    `Interact with the Sellen puppet behind the illusory wall and give over the Primevil Glintstone.`,
   `Travel to Raya Lucaria Grand Library grace. Outside of the Library you'll find two summon signs.`,
    `white sign: you'll help Sellen kill Jerren, awarding: Jerren's armor drop, Glintstone Kris and Shard Spiral added to Sellen's shop, after transform Witch's Glintstone Crown <br/>
    red sign: you'll help Jerren kill Sellen, awarding Witch's Glintstone Crown and her bell bearing. Talk to Jerren after reloading the area near the summon signs for Ancient Dragon Smithing Stone`,
    `If you chose to help Sorceress Sellen, after exhausting her dialogue in the Grand Library and reloading the area, Sellen will be in the body of an Arcane Sphere of Faces. You can find her crown near the Grand Library Site of Grace.`
];

const objSellen = Mapper(sellenData);

export const setSellen = () => {
    setObj('objSellen', objSellen)
};

let gowryData = [
    `Talk to Gowry in Gowry's Shack and he will ask you to find an Unalloyed Gold Needle.`,
    `Defeat Commander O'Neil located in the Swamp of Aeonia for Unalloyed Gold Needle.`,
    `Return to him, exhaust his dialogue and reload the area.`,
    `Take the needle to Millicent at the Church of the Plague and reload the area. Exhaust her dialogue and reload the area again.`,
    `Return to Gowry's Shack and Millicent will be standing there, exhaust her dialogue.`,
    `Reload the area and Gowry will be back at his shack.`,
    `Won't sell insect needles until you confront him about his true form, or kill him after finishing Millicent's quest line for his bell-bearing.`
];

const objGowry = Mapper(gowryData);

export const setGowry = () => {
    setObj('objGowry', objGowry)
};

let corhynData = [
    `Exhaust his dialogue at Roundtable Hold.`,
    `After reaching the Altus Plateu or defeating Mad Tongue Alberich and collecting the Cipher Pata, he will tell you he is going on a journey to find the Goldmask.`,
    `After reloading, he appears just north of the Altus Highway Junction site of grace, exhaust his dialogue. `,
    `On the north side of Altus Plateau there is a broken bridge, go here and interact with Goldmask.`,
    `Return to Brother Corhyn  and exhaust his dialogue telling him you found the Goldmask.`,
    `Reload the area and Corhyn will be next to the Goldmask on the bridge, exhaust dialogue. `,
    `After Defeating Godfrey, First Elden Lord (Golden Shade) he will move to the colosseum at Leyndell, exhaust his dialogue.`,
   `Get the incantation Law of Regression (requires 33 INT, boostable). Head west from Erdtree sanctuary grace until you see a white message saying "Regression" facing a statue. Cast Law of Regression on the message while facing the statue. New message appears. Read it and return to Brother Coryhn.`,
    `Brother Coryhn and Goldmask will move to the bridge south of Stargazers Ruins. Exhaust his dialogue.`,
    `After killing Fire Giant and Beast Clergyman in Crumbling Farum Azula he can be found at Capital of Ash grace.`,
    `Continuing south, below the elevator, there's a new path that leads to a dead Goldmask. His corpse drops the Mending Rune of Perfect Order.`,
    `If looted a second time, after reloading the area, the player will find Goldmask's Rags, Gold Bracelets, and the Gold Waistwrap.`,
   `Brother Corhyn may have additional dialogue after the Perfect Order ending.`
];

const objCorhyn = Mapper(corhynData);

export const setCorhyn = () => {
    setObj('objCorhyn', objCorhyn)
};

let nepheliData = [
    `Find her in the courtyard near Godricks grace. Exhaust her dialogue she will offer to help fight Godrick.`,
   `After defeating Godrick she will move to the library in Roundtable Hold. 
    Exhaust her dialogue for an Arsenal Charm.`,
    `Give her the Stormhawk King remains from the Chapel of Anticipation.`,
    `Follow Kenneth Haight's questline.`,
    `Travel to Godrick's grace and rest at it. Nepheli and Kenneth can be found in the throne room.`,
    `Margott must be defeated before they will appear in the throne room.<br/>
    Exhaust dialogue to receive reward.`
];

const objNepheli = Mapper(nepheliData);

export const setNepheli = () => {
    setObj('objNepheli', objNepheli)
};

let seluvisData = [
    `Speak to Preceptor Seluvis and receive his quest.`,
    `Find Nepheli at Village of the Albinaurics, exhaust her dialogue and kill Omenkiller nearby.`,
    `Go to Roundtable Hold and find Nepheli downstairs and exhaust her dialogue.`,
    `Go to Gideon Ofnir and ask him about Nepheli, and tell him about the potion <br/>
    Note Do not proceed ranni questline or seluvis will be dead after giving blackknife`,
    `Give potion to Ofnir, Nepheli or Dung Eater to and complete the quest at Seluvis for his reward.`,
    `Note that giving the potion to Nepheli or Dung Eater will end their respective questlines.`
];

const objSeluvis = Mapper(seluvisData);

export const setSeluvis = () => {
    setObj('objSeluvis', objSeluvis)
};

let yuraData = [
    `Meet Bloody Finger Hunter Yura, near the lake of Limgrave, under an overpass. He warns you about Flying Dragon Agheel.`,
    `Once you defeat the Flying Dragon Agheel, talk to him again.`,
   `Approach Murkwater Cave to get invaded by Bloody Finger Nerijus. After defeating the invade with Yura's help he can be found further north of Murkwater Cave.`,
    `Find his Red Summon Sign on a bridge, north of the Main gate Grace in Raya Lucaria. Interact with the Red Sign and help him defeat Bloody Finger Ravenmount Assassin. After the fight he will be standing near the Summon Sign, exhaust his dialogue.`,
   `Find him at Second Church of Marika. Talk to him for Nagakiba and a battle with Eleonora. Winning  will reward Purifying Crystal Tear, Eleonora's Poleblade and one other undefined item.`,
    `After this you can fight him at Zamor Ruins Grace to get his armor set.`
];

const objYura = Mapper(yuraData);

export const setYura = () => {
    setObj('objYura', objYura)
};

let bernahlData = [
    `Join the Volcano Manor and complete two assassination quests for them.`,
   `Speak to Bernahl to recieve the Letter to Bernahl.`,
    `Go to Leyndell and find the red invasion sign. Fight alongside Bernahl for Raging Wolf Set.`,
    `Report back to him at Volcano Manor for  Gelmir's Fury Sorcery.<br/>
    Note: the above steps must be completed before defeating Rykard.`,
    `Defeat Rykard then exhaust Bernahl's dialouge.`,
    `Go to Crumbling Farum Azula to find him as invader. Drops Beast Champion Set, Devourer's Scepter and Blasphemous Claw.`
];

const objBernahl = Mapper(bernahlData);

export const setBernahl = () => {
    setObj('objBernahl', objBernahl)
};

let patchesData = [
    `Find and fight Patches at Murkwater Cave. When he surrenders, forgive him. He will open up shop there.`,
    `After finishing all dialogue, opening some other chest nearby and transport you to Mistwood. As you travel back to Murkwater Cave and talk to Patches. If you Attack Patches you can use Beg for Mercy gesture to end the fight.`,
    `You can find Patches a second time on the Scenic Isle, near the Laskyar Ruins Site of grace, in Liurnia of the Lakes.`,
    `Join the Volcano Manor and complete the first two assassination quests for them. Return to the Manor and speak to everyone there to receive individual requests.`,
   `Reload and speak to Patches to receive the Letter to Patches.`,
    `Go to Ruin-Strewn Precipice and find the red invasion sign. Defeat the target to receive the Bull-Goat Armor Set. Reload the area and he'll reward you with the Magma Whip Candlestick.`,
    `Patches appears in the Shaded Castle. He gives you the Dancer's Castanets. Can be given to Tanith.`
];

const objPatches = Mapper(patchesData);

export const setPatches = () => {
    setObj('objPatches', objPatches)
};

let ryaData = [
    `Meet her at Liurnia of the Lakes`,
    `Go to Boilprawn Shack.`,
    `Speak to Blackguard Big Boggart, who sells the necklace for runes currency elden ring wiki guide 18 1,000 Runes. Killing him is not recommended, he has a quest line later.`,
    `Return the necklace to Rya to obtain a Volcanic Manor invitation.`,
    `After reaching Altus Plateau you can find Rya at Lux Ruins (if you haven't received both halves of the Dectus Medallion) or at the top of the Grand Lift of Dectus. Talk to her and she will teleport you inside Volcano Manor.<br/>
    NOTE: If she does not appear in either of these locations, try teleporting to the Grand Lift and riding it to the top again to trigger her spawn.`,
   `Complete first part of Tanith's quest and she will move to a new room. Speak to her during her snake form to progress the questline.<br/>
    NOTE: Proceeding Volcano Manor quests up to Rykard makes this quest impossible to continue.`,
    `Return to Rya, where she hints of secret passage. Enter the illusory wall in the room right of hers and reach the grace in Prison Town Church. Return to Zoraya and tell her what you have seen to continue.<br/>
    (OPTIONAL) Speak to Lady Tanith and choose the "Zoraya's troubles" option.
    Defeat Godskin Noble in Temple of Eiglay to get the Serpent's Amnion.
    Give the Serpent's Amnion to Zoraya and she will disappear from the manor.<br/>
    (OPTIONAL) Speaking to Lady Tanith will have the new option "Zoraya's absence". She will give a Tonic of Forgetfulness to give to the upset Zoraya.`,
    `Zoraya has moved to the Legacy Dungeon's interior. If you have fully unlocked the area, you can reach it by taking the wooden elevator next to the Temple of Eiglay, getting off at a hidden doorway just below the lift's highest point, and heading straight through the rooms beyond until you jump across a lava floe.<br/>
    - if the elevator is not yet active, you can reach the lava floe (or unlock the elevator) by jumping off the balcony of the top floor of Temple of Eiglay.<br/>
    - you can also reach this room by taking the wooden elevator to the top, going straight ahead toward the man-serpent with the lava sword, and jumping out the windows on the left.<br/>`,
    `She asks you to kill her and end her pain.
    - if you kill her, she will transform back into a snake and drop Daedicar's Woe.<br/>
    - if you leave her alive and return after killing Rykard, she realizes that you are not willing to kill her. When you reset the area, she is gone and has left Daedicar's Woe and Zoraya's letter in her place.<br/>
    - if you give her the Tonic of Forgetfulness, she simply goes to sleep.`
];

const objRya = Mapper(ryaData);

export const setRya = () => {
    setObj('objRya', objRya)
};

let dungEaterData = [
    `You will find in the Roundtable Hold, after reaching Leyndell, Royal Capital.
    Give him one Seedbed Curse. After he asks you to find his body in sewers of Leyndell and kill him. He gives you the Sewer-Gaol Key.`,
    `Once you find him trapped in cell you can choose to kill him or free him.<br/>
    If you free the Dung Eater a new message will appear in Roundtable Hold suggesting you meet him at the Outer Moat so he can kill you.
    Meet him in proposed location.`,
    `Dung Eater will invade you. Defeating him rewards Furcalling Finger Remedy and Sword of Milos.`,
    `Travel back to Roundtable Hold. Dung Eater will ask you to give his body 5 Seedbed Curses, doing so will allow you to receive the Mending Rune of the Fell Curse to trigger an alternate ending the game, as well as his armor set`
];

const objDungEater = Mapper(dungEaterData);

export const setDungEater = () => {
    setObj('objDungEater', objDungEater)
};

let millicentData = [
    `Speak with Gowry in his shack and he tasks you to get Unalloyed Gold Needle dropped by Commander O'Neil.`,
    `Return to Gowry with the needle. He will give you Sellia's Secret.`,
   `Warp to a nearby point and return and he'll give you the repaired needle.`,
    `Light the beacons in Sellia according to Sellia's Secret. Each beacon also opens a barrier with loot.`,
    `Bring the needle to Millicent at the Church of the Plague`,
    `After Millicent uses the needle, rest at the nearby site of grace, then exhaust her dialog. She will gift you the Prosthesis-Wearer Heirloom. Rest again to move her to Gowry's shack.`,
    `Return to Gowry's shack. Millicent is there. Exhaust her dialog. Quit and reload at the shack, this will move Millicent and have Gowry return.`,
    `Millicent moves to north of the Erdtree-Gazing Hill Grace. Give her Valkyrie's Prosthesis. (It can be found in the Shaded Castle)`,
    `After defeating boss of Dominula she will be near the Windmill Heights Grace after reload. Exhaust her dialogue.`,
    `Millicent will move to Ancient Snow Valley Ruins Grace.`,
    `Millicent will move to the Prayer Room Grace. She will not move until player has defeated an Ulcerated Tree Spirit mini-boss just before the Drainage Channel Grace.`,
    `Once player defeats the mini-boss and rests at a Grace, there will be two summon signs near where the mini boss used to be: </br>
        Use the golden summon sign, and help her fight 4 NPC invaders known as Millicent’s Sisters. After the fight, you'll get the Rotten Winged Sword Insignia. <br/>
        Use the red summon sign to challenge her in her world. After the fight, you'll get Millicent's Prosthesis. [ENDS QUESTLINE]`,
   `After invasion, reload the area again and she will be near where her    summoning sign was, laying by the pool of scarlet rot down below.<br/>
        You can kill her to get Millicent's Prosthesis. [ENDS QUESTLINE]<br/>
    Exhaust her dialog, and reload the area. She'll be dead, and you'll be able to loot her corpse for the Unalloyed Gold Needle.`,
    `Kill Malenia, Blade of Miquella.`,
    `In the room where you fight Malenia, use the Unalloyed Gold Needle on the Scarlet Aeonia Malenia left behind. You'll get Miquella’s Needle.`,
    `You can use Miquella's Needle in Crumbling Farum Azula to reverse the Lord of Frenzied Flame Ending.`
];

const objMillicent = Mapper(millicentData);

export const setMillicent = () => {
    setObj('objMillicent', objMillicent)
};

let boggartData = [
    `Boggart is introduced as the thief from Rya's questline.`,
    `Buy the necklace from him for 1,000 Runes.<br/>
    Note: You must initiate the quest from Rya before reaching Volcano Manor or you're unable to progress.`,
    `Buy Boiled Prawns from him. This befriends him and progresses his questline.`,
    `He later moves to Leyndell in the outer moat nearest the Capital Rampart, selling Boiled Crabs.`,
    `At the Leyndell moat, he will warn the player about his time in prison with the Dung Eater.`,
    `If the Dung Eater's questline is at the point where he will be "waiting in the outer moat", and the blackguard is present in Leyndell, exhaust Big Boggart's dialogue here until he says he thinks the Dung Eater is lurking somewhere nearby.
    Then reload the area, and you must interact with the now-wounded blackguard to trigger the invasion.`,
    `A Seedbed Curse will be found on Big Boggart's body at the end of his questline, along with his drops. If you have been invaded by the Dung Eater in the moat before Boggart moves there, you will be unable to get a Seedbed Curse from his body.`
];

const objBoggart = Mapper(boggartData);

export const setBoggart = () => {
    setObj('objBoggart', objBoggart)
};

let latennaData = [
    `Latenna can be found at Slumbering Wolf's Shack`,
    `Latenna's questline revolves around a separate NPC, Albus <br/>
    Speak to Albus for  Haligtree Secret Medallion (Right).`,
    `Return Medallion to Latenna. <br/>
    Promise to take Latenna to Haligtree. She joins and becomes Spirit Ash summon, Latenna the Albinauric She will also hint at the location of the Haligtree Secret Medallion (Left).`,
   `Upon reaching Apostate Derelict, summon Latenna at the foot of the giant Albinauric, rewarding Somber Ancient Dragon Smithing Stone.`
];

const objLatenna = Mapper(latennaData);

export const setLatenna = () => {
    setObj('objLatenna', objLatenna)
};

let rogierData = [
    `First met in Stormveil Castle by the altar of the Chapel`,
    `After defeating Godrick moves to Roundtable Hold. <br/>
    NOTE: Rogier will die if you speak with Ranni before finishing his quest!`,
    `At Stormveil Castle, examine Rogier's bloodstain near the rotting face, in the area where Root Monster spawns.`,
    `Ask Rogier about the face.`,
    `Talk to Fia and allow her to hold you. Exhaust lines "Talk in secret", "Did you know?" and "About the Black Knifeprint".`,
   `Defeat Black Knight Assassin miniboss in Black Knife Catacombs by riding the trap to the upper level for the Black Knifeprint`,
    `Return the Knifeprint to Rogier. Reload the area and he will ask you to look for Ranni.`,
    `Upon talking to Ranni she tells the player to leave. Return to Rogier who suggests becoming Ranni's vassal.`,
    `Ranni allows player to become her vassal. Returing to Rogier results in him falling into a deep slumber.`,
    `Soon after Rogier will die, leaving behind his set and a letter.`
];

const objRogier = Mapper(rogierData);

export const setRogier = () => {
    setObj('objRogier', objRogier)
};

let diallosData = [
    `Exhaust Diallos' dialogue at Roundtable hold.`,
    `Exhaust Diallos' dialogue northwest of the Academy Gate Town Site of Grace in Northern Liurnia atop a sunken roof.`,
    `Exhaust Diallos' dialogue at Roundtable hold.`,
    `Join Volcano Manor, but don't finish its questline since this will cause Diallos to disappear. [ENDS QUESTLINE]`,
    `Exhaust Diallos' dialogue in Volcano Manor's drawing room.`,
    `Finish Volcano Manor's questline, or defeat Rykard.`,
    `After progressing the Jarburg questline he will appear in one of the shacks, tending to Jar Bairn.`,
    `Revisiting Jarburg after sometime will have you find the town damaged; Diallos will be there. Exhaust Diallos' dialogue. Then, exhaust Jar-Bairn's dialogue.`,
    `Rest at a Site of Grace.`,
    `Jar-Bairn will move over Diallos. Rest at a Site of Grace or reload the area.
    Diallos will disappear, leaving Diallos's Mask, Hoslow's Petal Whip, and a Numen's Rune where he was last encountered.`
];

const objDiallos = Mapper(diallosData);

export const setDiallos = () => {
    setObj('objDiallos', objDiallos)
};

let tanithData = [
    `Exhaust dialogue when first encountered in Volcano Manor, to get the Drawing-Room Key.`,
    `Enter the room with Rya, get the letter and go talk to Tanith again where she will tell you to assassinate Old Knight Istvan.`,
    `Invade Istvan at Stormhill and kill him, return to Tanith to get the Magma Shot sorcery.`,
   `Reload the area to find another Letter, this time to assassinate Rileigh the Idle in Altus Plateau.`,
    `Return to Tanith, she will reward you with the Serpentbone Blade.`,
    `Reload the area, talk to her again to be teleported to the entrance of  Rykard's boss fight.`,
    `After beating Rykard, return to Tanith and speak to her again.`,
    `Reload the area, she will now be in Rykard's boss area, feasting on his corpse.
    Killing Tanith rewards you with the Consort's Set.`,
    `After killing her, you will be invaded by her bodyguard, who drops the Aspect of the Crucible: Breath incantation.`
];


const objTanith = Mapper(tanithData);

export const setTanith = () => {
    setObj('objTanith', objTanith)
};











































