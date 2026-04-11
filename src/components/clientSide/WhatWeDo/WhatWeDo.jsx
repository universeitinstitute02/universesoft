import React from 'react';
import Solutions from './Solutions/Solutions';


const WhatWeDo = () => {
    return (
        <div className='my-20'>
            <h1 className='text-center text-3xl md:text-4xl font-semibold uppercase mb-4'>What we <span className='underline text-blue-900'>do</span></h1>
            <p className='text-center mx-3 mb-28 text-xl xl:mx-52'>Universe Soft Tech is constantly working to help you with the best possible service. You don't need to look elsewhere if you try Universe Soft Tech services. We focus on customer satisfaction and we believe in quality service.</p>
            <Solutions></Solutions>
        </div>

        


    );
};

export default WhatWeDo;
