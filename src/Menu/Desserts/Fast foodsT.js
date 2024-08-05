import React, {useState} from 'react';
import {easternCuisine} from "../../Fake Backend/Eastern cuisine";
import {fastFoods} from "../../Fake Backend/Fast foods";

const FastFoodsT = () => {
    const [fastFood , setFastFood] = useState(false)
    return (
        <div id='top'>
            <div className="container">
                <div className='top'>
                    {
                        fastFoods.map((el) => (
                            <div className='top--fake'>
                                <div style={{
                                    display: fastFood ? 'block' : 'none'}}>
                                   <div  style={{
                                       width:'500px',
                                       height:"300px",
                                       background:'#000'
                                   }}>
                                       <img src={el.img} alt=""/>
                                   </div>
                                    <h3 onClick={() => setFastFood(!fastFood)} style={{
                                        fontSize:"19px",
                                        color:'#fff'
                                    }}>x</h3>
                                </div>
                               <button onClick={() => setFastFood(!fastFood)}>
                                   <img src={el.img} alt=""/>
                               </button>
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

export default FastFoodsT;