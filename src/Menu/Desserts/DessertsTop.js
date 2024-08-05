import React, {useState} from 'react';
import './DessertsTop.scss'
import {Desserts} from "../../Fake Backend/Desserts";

const DessertsTop = () => {
    return (
        <div id='top'>
            <div className="container">
                <div className='top'>
                    {
                        Desserts.map((el) => (
                            <div className='top--fake'>
                                <img src={el.img} alt=""/>
                                <h3>{el.name}</h3>
                                <h4>${el.price}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default DessertsTop;