import General from './pages/general/General';
import NightCavalry from './pages/field-boss/NightCavalry';
import DeathBird from './pages/field-boss/DeathBird';
import BellHunter from './pages/field-boss/BellHunter';
import BellBearing from './pages/misc-item/BellBearing';
import CrystalTear from './pages/misc-item/CrystalTear';
import WhetBlade from './pages/misc-item/WhetBlade';
import Painting from './pages/misc-item/Painting';
import SeedbedCurse from './pages/misc-item/SeedbedCurse';
import AshesOfWar from './pages/ashes-of-war/AshesOfWar';
import Magic from './pages/magic/Magic';
import SacredTear from './pages/misc-item/SacredTear';
import NotableArma from './pages/notable-armamemt/NotableArma';
import SideQuest from './pages/side-quest/SideQuest';

const path = [
    '/varre','/boc','/roderika','/d-hunter','/gurranq','/thops','/hyetta','/kenneth',
    '/ranni','/alexander','/blaidd','/fia','/sellen','/gowry','/corhyn','/nepheli',
    '/seluvis','/yura','/bernahl','/patches','/rya','/dung-eater','/millicent',
    '/boggart','/latenna','/ensha','/rogier','/diallos','/tanith'
  ];


const comp = [ 
    <SideQuest name="Varre" /> , 
    <SideQuest name="Boc" />,
    <SideQuest name="Roderika" />,
    <SideQuest name="dHunter" />,
    <SideQuest name="Gurranq" />,
    <SideQuest name="Thops" />,
    <SideQuest name="Hyetta" />,
    <SideQuest name="Kenneth" />,
    <SideQuest name="Ranni" />,
    <SideQuest name="Alexander" />,
    <SideQuest name="Blaidd" />,
    <SideQuest name="Fia" />,
    <SideQuest name="Sellen" />,
    <SideQuest name="Gowry" />,
    <SideQuest name="Corhyn" />,
    <SideQuest name="Nepheli" />,
    <SideQuest name="Seluvis" />,
    <SideQuest name="Yura" />,
    <SideQuest name="Bernahl" />,
    <SideQuest name="Patches" />,
    <SideQuest name="Rya" />,
    <SideQuest name="DungEater" />,
    <SideQuest name="Millicent" />,
    <SideQuest name="Boggart" />,
    <SideQuest name="Latenna" />,
    <SideQuest name="Ensha" />,
    <SideQuest name="Rogier" />,
    <SideQuest name="Diallos" />,
    <SideQuest name="Tanith" />,
  ];

let sideQuestArr = new Array(path.length);

for (var i = 0; i < sideQuestArr.length; i++) {
  sideQuestArr[i] = [path[i],comp[i]]
};

let sideQuestObj = sideQuestArr.map((item) => {
   return {path: item[0], component: item[1]}
});


let routes = [
  {
    path: '/',
    component: <General />
  },
  {
    path: '/night-cavalry',
    component: <NightCavalry />
  },
  {
    path: '/death-bird',
    component: <DeathBird />
  },
  {
    path: '/bell-hunter',
    component: <BellHunter />
  },
  {
    path: '/bell-bearing',
    component: <BellBearing />
  },
  {
    path: '/crystal-tear',
    component: <CrystalTear />
  },
  {
    path: '/whetblade',
    component: <WhetBlade />
  },
  {
    path: '/painting',
    component: <Painting />
  },
  {
    path: '/seedbed-curse',
    component: <SeedbedCurse />
  },
  {
    path: '/ashes-of-war',
    component: <AshesOfWar />
  },
  {
    path: '/magic',
    component: <Magic />
  },
  {
    path: '/sacred-tear',
    component: <SacredTear />
  },
  {
    path: '/notable-armament',
    component: <NotableArma />
  },
];

routes = [...routes,...sideQuestObj];

export default routes;

