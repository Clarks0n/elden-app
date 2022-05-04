import React from 'react';
import { useState } from 'react';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import Button from 'devextreme-react/button';
// import UserPanel from '../user-panel/user-panel';
import './header.scss';
// import { Template } from 'devextreme-react/core/template';
import notify from 'devextreme/ui/notify';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RegisterChar from '../register-char/RegisterChar';


export default function Header({ menuToggleEnabled, title, toggleMenu }) {
  const [visible,setVisible] = useState(false);
  const [name,setName] = useState('');
  const [charList, setCharList] = useState([]);

  const clearAsyncStorage = async() => {
    AsyncStorage.clear();

    notify('Data Cleared', 'success', 2500)
  };

  const showPopup = () => {
    setVisible(true);
  };

  const hidePopup = () => {
    setVisible(false);
    setName('');
  };

  const handleName = (e) => {
    setName(e.value);
  }; 

  const submitValue = (e) => {
    const validations = e.validationGroup.validate();

    if(validations.isValid) {
			let value =  AsyncStorage.getItem('charList');

			value.then((item) => {
				let parsed = JSON.parse(item);

				if(parsed === null) {
					let a = [];
					a.push(name);
					const jsonValue = JSON.stringify(a);
    			AsyncStorage.setItem('charList', jsonValue);
				} else {
					parsed.push(name);
					const jsonValue = JSON.stringify(parsed);
    			AsyncStorage.setItem('charList', jsonValue);
				};
			})

      notify('Char Created', 'success', 2500);
    };
  };

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
			
        {/* Register Char
					<Item 
          location={'before'}
          cssClass={'register-char'}
        >
          <Button 
            onClick={showPopup}
            height={'100%'}
            stylingMode={'text'}
          >
            Register Char
          </Button>
        </Item>

				Title Char
         <Item
          location={'center'}
          cssClass={'header-title'}
          text={title}
          visible={true}
        /> 
				*/}

        {/* Clear data */}
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
      <RegisterChar 
        visible={visible}
        hidePopup={hidePopup}
        name={name}
        handleName={handleName}
        submitValue={submitValue}
      />
    </header>
)}

