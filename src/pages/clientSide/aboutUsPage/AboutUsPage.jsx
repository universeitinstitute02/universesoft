
import Banner from '../../../components/clientSide/Banner/Banner';
import About from '../../../components/clientSide/About/About';
import Blogs from '../../../components/clientSide/Blogs/Blogs';
import BluePage from '../../../components/clientSide/BluePage/BluePage';
import { Helmet } from 'react-helmet-async';
import WhatWeDo from '../../../components/clientSide/WhatWeDo/WhatWeDo';
import History from '../../../components/clientSide/History/History';
import Mission from '../../../components/clientSide/Mission/Mission';
import Partners from './Partners/Partners';
import Awards from './Awards/Awards';
import News from './News/News';
import HelpPage from './HelpPage/HelpPage';
import SlidePage from './SlidePage/SlidePage';

const AboutUsPage = () => {
    window.scrollTo(0, 0);
    return (
        <div className='mt-12'>
            <Helmet>
                <title>SoftTech | About Us</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
            <Blogs></Blogs>
            <BluePage></BluePage>
            <WhatWeDo></WhatWeDo>
            <History></History>
            <Mission></Mission>
            <Partners></Partners>
            <Awards></Awards>
            <News></News>
            {/* <HelpPage></HelpPage> */}
            <SlidePage></SlidePage>
            
        </div>
    );
};

export default AboutUsPage;