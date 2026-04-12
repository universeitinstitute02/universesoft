import { Outlet } from "react-router-dom";
import UpdatedNavbar from "../components/clientSide/Navbar/UpdatedNavbar";
import UpdatedFooter from "../components/clientSide/Footer/UpdatedFooter";

const MainLayout = () => {
  return (
    <>
      <UpdatedNavbar></UpdatedNavbar>
      <Outlet></Outlet>
      <UpdatedFooter></UpdatedFooter>
      {/* <Footer></Footer> */}
    </>
  );
};

export default MainLayout;
