// import toolkit
import { configureStore } from "@reduxjs/toolkit";

// import persist
import {combineReducers} from 'redux';
// import storage from 'redux-persist/lib/storage'; // if using web --- default to local storage if web
import AsyncStorage from '@react-native-async-storage/async-storage'; // if using react native --- default to local storage if web
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

// import reducer
import NightCavalryReducer from "./actions/NightCavalry";
import DeathBirdReducer from "./actions/DeathBird";
import BellHunterReducer from './actions/BellHunter';
import BellBearingReducer from './actions/BellBearing';
import CrystalTearReducer from './actions/CrystalTear';
import WhetBladeReducer from './actions/WhetBlade';
import PaintingReducer from "./actions/Painting";
import SeedbedReducer from "./actions/SeedbedCurse";
import AshesOfWarReducer from './actions/AshesOfWar';
import MagicReducer from './actions/Magic';

const rootReducer = combineReducers({
  nightCavalry: NightCavalryReducer,
  deathBird: DeathBirdReducer,
  bellHunter: BellHunterReducer,
  bellBearing: BellBearingReducer,
  crystalTear: CrystalTearReducer,
  whetBlade: WhetBladeReducer,
  painting: PaintingReducer,
  seedbed: SeedbedReducer,
  ashesOfWar: AshesOfWarReducer,
  magic: MagicReducer
});

// persist config obj
// blacklist a store attribute using it's reducer name. Blacklisted attributes will not persist. (I did not find a way to blacklist specific values)
const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
//   blacklist: ['age'], //blacklisting a store attribute name, will not persist that store attribute.
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // middleware option needs to be provided for avoiding the error. ref: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;