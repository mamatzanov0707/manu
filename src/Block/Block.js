import React from 'react';
import Exception from "../page/Exception/Exception";
import Happy from "../page/Happy/Happy";
import Hero from '../page/Hero/Hero';

const Block = () => {
    return (
        <div>
            <Hero/>
            <Exception/>
            <Happy/>
        </div>
    );
};

export default Block;
