import 'devextreme/dist/css/dx.common.css';
import './themes/generated/theme.base.css';
import './themes/generated/theme.additional.css';
import React from 'react';
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

function App() {
  // const { user, loading } = useAuth();

  // if (loading) {
  //   return <LoadPanel visible={true} />;
  // }

  // if (user) {
  //   return <Content />;
  // }

  // return <UnauthenticatedContent />;

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
