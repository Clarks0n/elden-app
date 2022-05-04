import React from 'react';
import { Popup } from 'devextreme-react/popup';
import TextBox from 'devextreme-react/text-box';
import Button from 'devextreme-react/button';
import { Validator, RequiredRule } from 'devextreme-react/validator';

const RegisterChar = ({visible, hidePopup, name,handleName, submitValue}) => {
    const styleObj = {
        marginLeft: "9em",
        marginTop: "3em"
    };

    return (
        <>
            <Popup
                visible={visible}
                onHiding={hidePopup}
                dragEnabled={false}
                closeOnOutsideClick={false}
                showCloseButton={true}
                showTitle={true}
                title="Register Char"
                container=".dx-viewport"
                width={400}
                height={280}
            >
                <div className="dx-field">
                    <div className="dx-field-label">Char Name</div>
                    <div className="dx-field-value">
                        <TextBox
                            value={name}
                            onValueChanged={e => handleName(e)}                
                        >
                            <Validator>
							    <RequiredRule /> 
							</Validator>
                        </TextBox>
                    </div>
                </div>

                <div className="dx-field">
                    <Button
                        onClick={submitValue}    
                        stylingMode="contained"
                        style={styleObj}  
                    >
                        Submit
                    </Button>
                </div>
   
            </Popup>
        </>
  )
}

export default RegisterChar