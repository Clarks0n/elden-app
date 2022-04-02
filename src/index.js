import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';

// REDUX // not using persist
// import store from './store/rootReducer';

// REDUX-PERSIST
import store, {persistor} from './store/Store';
import {PersistGate} from 'redux-persist/integration/react';

// loading for redux persist until ready
// const LoadingMarkup = () => (
//   <View
//     style={{
//       flex: 1,
//       justifyContent: 'center',
//     }}>
//     <ActivityIndicator size="large" color="#0000ff" />
//   </View>
// );

// Normal
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// Using toolkit, not using redux persist
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// Using toolkit and redux persist
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate 
        // loading={<LoadingMarkup />} 
        persistor={persistor}
      >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
