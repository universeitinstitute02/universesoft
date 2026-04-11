
import { Helmet } from 'react-helmet-async';
import JobCard from '../JobCard/JobCard';


const CareerPage = () => {
    window.scrollTo(0, 0);
    return (
        <div className=''>
            <Helmet>
                <title>Soft Tech | Career</title>
            </Helmet>
            <div className='max-w-[700px] mx-auto ' >
            <JobCard></JobCard>
            </div>
        </div>
    );
};

export default CareerPage;