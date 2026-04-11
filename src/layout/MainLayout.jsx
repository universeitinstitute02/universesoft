
import { Outlet } from 'react-router-dom';
import UpdatedNavbar from '../components/clientSide/Navbar/UpdatedNavbar';
import UpdatedFooter from '../components/clientSide/Footer/UpdatedFooter';
import Navbar from '../components/clientSide/Navbar/Navbar';

const MainLayout = () => {
    return (
        <>
            {/* <Navbar></Navbar> */}
            <UpdatedNavbar></UpdatedNavbar>
            <Outlet></Outlet>
            <UpdatedFooter></UpdatedFooter>
            {/* <Footer></Footer> */}
        </>
    );
};

export default MainLayout;