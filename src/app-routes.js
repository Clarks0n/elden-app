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

const routes = [
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
  }
];

export default routes;

