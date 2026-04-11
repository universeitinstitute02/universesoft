import React from 'react';
import Service from '../../../components/clientSide/ServiceComponent/Service/Service';


const ServicePage = () => {
    return (
        <div className='mt-12'>
            <Helmet>
                <title>Soft Tech | Services</title>
            </Helmet>
          <Service></Service>
            
        </div>
    );
};

export default ServicePage;