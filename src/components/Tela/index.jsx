import React from 'react';
import './index.css';

export default (props)=>{

    return(
        <div className="tela">
            {props.children}
        </div>
    )
}