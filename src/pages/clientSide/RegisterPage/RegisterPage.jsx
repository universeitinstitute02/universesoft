import React from 'react';
import Register from '../../../components/clientSide/Register/Register';
import { Helmet } from 'react-helmet-async';

const RegisterPage = () => {
    return (
        <div className='mt-12'>
             <Helmet>
                <title>Soft Tech | Register</title>
            </Helmet>
            <Register></Register>
        </div>
    );
};

export default RegisterPage;