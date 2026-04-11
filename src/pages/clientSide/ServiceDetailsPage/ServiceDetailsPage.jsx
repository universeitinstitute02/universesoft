
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import ServiceBanner from './ServiceBanner';
import ServiceDescriptionSection from './ServiceDescriptionSection';
import ServiceFeatures from './ServiceFeatures';
import { Helmet } from 'react-helmet-async';
import ServiceKeyPoint from './ServiceKeyPoint';
import ServiceFeaturePage from './ServiceFeaturePage';

const ServiceDetailsPage = () => {
    const axiosPublic = useAxiosPublic();
    let { id } = useParams();
    window.scrollTo(0, 0);

    const { data: service = [], isLoading, error } = useQuery({
        queryKey: ['service', id], // Include 'id' in the queryKey for caching purposes
        queryFn: async () => {
            const res = await axiosPublic.get(`/get-service-by-id/${id}`);
            if (!res.data) throw new Error('No data returned');
            return res.data.data;
        }
    });



    const features = service?.feature;
    const key_points = service?.key_point;

    console.log(features);

    return (
        <div className=''>
            <Helmet>
                <title>SoftTech | Services</title>
            </Helmet>
            <div className="">
                <ServiceBanner service={service}></ServiceBanner>
                <ServiceFeatures features={features}></ServiceFeatures>
                
                
                <div className=' container mx-auto mb-10' >
                    <ServiceKeyPoint key_points={key_points}></ServiceKeyPoint>
                </div>
                
            </div>
        </div>
    );
};

export default ServiceDetailsPage;