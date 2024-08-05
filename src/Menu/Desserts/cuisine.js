import React from 'react';
import {Desserts} from "../../Fake Backend/Desserts";
import {easternCuisine} from "../../Fake Backend/Eastern cuisine";

const Cuisine = () => {
    return (
        <div id='top'>
            <div className="container">
                <div className='top'>
                    {
                        easternCuisine.map((el) => (
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

export default Cuisine;