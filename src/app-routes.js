import Home from './pages/home/home';
import NightCavalry from './pages/field-boss/NightCavalry';

const routes = [
  {
    path: '/',
    component: <Home />
  },
  {
    path: '/night-cavalry',
    component: <NightCavalry />
  }
];

export default routes;

