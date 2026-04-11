import React from 'react';
import ProductTab from './ProductTab';
import { Helmet } from 'react-helmet-async';

const ProductPage = () => {
    return (
        <div className=''>
            <Helmet>
                <title>SoftTech | Products</title>
            </Helmet>
            <h1 className='text-center text-3xl md:text-4xl font-semibold uppercase mt-4'>Our Projects</h1>
            
            <ProductTab></ProductTab>
        </div>
    );
};

export default ProductPage;