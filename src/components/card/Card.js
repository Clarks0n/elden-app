import React from 'react';
import './Card.scss';

const Card = ({title, children}) => {
  return (
    <>
        <h2 className={'content-block'}>{title}</h2>
        <div className={'content-block'}>
            <div className={'dx-card responsive-paddings'}>
                {children}
            </div>
        </div>
    </>
  )
}

export default Card