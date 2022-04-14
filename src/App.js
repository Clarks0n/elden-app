import 'devextreme/dist/css/dx.common.css';
// import './themes/generated/theme.base.css';
// import './themes/generated/theme.additional.css';
import './themes/generated/dx.material.base.css';
import './themes/generated/dx.material.additional.css';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { BrowserRouter  as Router, Routes, Route  } from 'react-router-dom';
import './dx-styles.scss';
// import LoadPanel from 'devextreme-react/load-panel';
import { NavigationProvider } from './contexts/navigation';
// import { AuthProvider, useAuth } from './contexts/auth';
import { useScreenSizeClass } from './utils/media-query';
// import Content from './Content';
// import UnauthenticatedContent from './UnauthenticatedContent';
// import appInfo from './app-info';
import routes from './app-routes';
import { SideNavOuterToolbar as SideNavBarLayout } from './layouts';

//data
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setVarre, setBoc, setRoderika, setdHunter, setThops, setHyetta, setKenneth, setRanni, setAlexander, setBlaidd, setFia, setSellen, setGowry, setCorhyn, setNepheli, setSeluvis, setYura, setBernahl, setPatches, setRya, setDungEater, setMillicent, setBoggart,setLatenna , setRogier, setDiallos , setTanith} from './data/SideQuest';


function App() {
  // const { user, loading } = useAuth();

  // if (loading) {
  //   return <LoadPanel visible={true} />;
  // }

  // if (user) {
  //   return <Content />;
  // }

  // return <UnauthenticatedContent />;

  /* Clearing the async storage
  const clearAsyncStorage  = async() => {
    console.log("AA")
    AsyncStorage.clear();
  };

  useEffect(() => {
  
    return () => {
      clearAsyncStorage();
    }
  }, []);
  */

  function getObj(objName,funcName) {
    if(AsyncStorage.getItem(objName).value === undefined) {
      funcName();
    };
  };

  useEffect(() => {
    /*
    if(AsyncStorage.getItem('objVarre').value === undefined) {
      setVarre();
    };
    */
    getObj('objVarre', setVarre);
    getObj('objBoc', setBoc);
    getObj('objRoderika', setRoderika );
    getObj('objdHunter', setdHunter);
    getObj('objThops', setThops); 
    getObj('objHyetta', setHyetta); 
    getObj('objKenneth',setKenneth ); 
    getObj('objRanni', setRanni);
    getObj('objAlexander',setAlexander );
    getObj('objBlaidd',setBlaidd);
    getObj('objFia', setFia);
    getObj('objSellen', setSellen);
    getObj('objGowry',setGowry );
    getObj('objCorhyn', setCorhyn);
    getObj('objNepheli',setNepheli );
    getObj('objSeluvis', setSeluvis);
    getObj('objYura',setYura );
    getObj('objBernahl', setBernahl);
    getObj('objPatches', setPatches);
    getObj('objRya', setRya);
    getObj('objDungEater', setDungEater);
    getObj('objMillicent',setMillicent);
    getObj('objBoggart',setBoggart );
    getObj('objLatenna',setLatenna );  
    getObj('objRogier',setRogier );
    getObj('objDiallos', setDiallos);  
    getObj('objTanith',setTanith );
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <SideNavBarLayout title="Elden Ring">
      <Routes>
        {routes.map(({path, component}) => (
          <Route
            key={path} 
            path={path}
            element={component}
          />
        ))}
          <Route path="*" element={(
          <div>
            <h2>Oops the path not exist</h2>
          </div>
        )} />
      </Routes>
      {/* <Footer>
        Copyright © 2011-{new Date().getFullYear()} {appInfo.title} Inc.
        <br />
        All trademarks or registered trademarks are property of their
        respective owners.
      </Footer> */}
    </SideNavBarLayout>
  )
};


export default function Root() {
  const screenSizeClass = useScreenSizeClass();

  return (
    <Router>
      {/* <AuthProvider> */}
        <NavigationProvider>
          <div className={`app ${screenSizeClass}`}>
            <App />
          </div>
        </NavigationProvider>
      {/* </AuthProvider> */}
    </Router>
  );
}
