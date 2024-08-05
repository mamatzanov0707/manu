import React from 'react';
import {nationalFoods} from "../../Fake Backend/National Foods";

const Foods = () => {
    return (
        <div id='top'>
            <div className="container">
                <div className='top'>
                    {
                        nationalFoods.map((el) =>(
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

export default Foods;