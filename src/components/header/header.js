import React from 'react';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import Button from 'devextreme-react/button';
// import UserPanel from '../user-panel/user-panel';
import './header.scss';
// import { Template } from 'devextreme-react/core/template';
import notify from 'devextreme/ui/notify';
import AsyncStorage from '@react-native-async-storage/async-storage';

const clearAsyncStorage  = async() => {
  AsyncStorage.clear();

  notify('Data Cleared', 'success', 2500)
};

export default function Header({ menuToggleEnabled, title, toggleMenu }) {


  return (
    <header className={'header-component'}>
      <Toolbar className={'header-toolbar'}>
        <Item
          visible={menuToggleEnabled}
          location={'before'}
          widget={'dxButton'}
          cssClass={'menu-button'}
        >
          <Button icon="menu" stylingMode="text" onClick={toggleMenu} />
        </Item>
        <Item
          location={'before'}
          cssClass={'header-title'}
          text={title}
          visible={!!title}
        />

        <Item
          location={'after'}
          cssClass={'header-title'}
        >
          <Button 
            onClick={clearAsyncStorage}
            height={'100%'}
            stylingMode={'text'}
          >
            Clear Data
          </Button>
        </Item>
        {/* <Item
          location={'after'}
          locateInMenu={'auto'}
          menuItemTemplate={'userPanelTemplate'}
        >
          <Button
            className={'user-button authorization'}
            width={210}
            height={'100%'}
            stylingMode={'text'}
          >
            <UserPanel menuMode={'context'} />
          </Button>
        </Item> */}
        {/* <Template name={'userPanelTemplate'}>
          <UserPanel menuMode={'list'} />
        </Template> */}
      </Toolbar>
    </header>
)}
