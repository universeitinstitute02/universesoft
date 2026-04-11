import {
    createBrowserRouter,
} from "react-router-dom";
import ServicePage from "../components/clientSide/ServiceComponent/Service/Service";
import MainLayout from "../layout/MainLayout";
import AddUser from "../pages/adminSide/AddUser/AddUser";
import AboutUsPage from "../pages/clientSide/aboutUsPage/AboutUsPage";
import CareerDetailsPage from "../pages/clientSide/CareerDetailsPage/CareerDetailsPage";
import CareerPage from "../pages/clientSide/CareerPage/CareerPage";
import ContactUsPage from "../pages/clientSide/ContactUsPage/ContactUsPage";
import HomePage from "../pages/clientSide/homePage/HomePage";
import LoginPage from "../pages/clientSide/LoginPage/LoginPage";
import RegisterPage from "../pages/clientSide/RegisterPage/RegisterPage";
import ServiceDetailsPage from "../pages/clientSide/ServiceDetailsPage/ServiceDetailsPage";
import DashboardLayout from "../layout/DashboardLayout";
import PortfolioPage from "../pages/clientSide/portfolioPage/PortfolioPage";
import AdminRegistration from "../pages/adminSide/admin-registration/AdminRegistration";
import AdminLoginPage from "../pages/adminSide/admin-login/AdminLoginPage";
import AddServicePage from "../pages/adminSide/servicePage/addServicePage/AddServicePage";
import ManageServicePage from "../pages/adminSide/servicePage/manageServicePage/ManageServicePage";
import AddCareerPage from "../pages/adminSide/Career/AddCareerPage";
import ManageCareerPage from "../pages/adminSide/Career/ManageCareerPage";
import AddProductPage from "../pages/adminSide/Product/AddProductPage";
import ManageProductPage from "../pages/adminSide/Product/ManageProductPage";
import UpdateServicePage from "../pages/adminSide/servicePage/UpdateServicePage";
import DashboardPage from "../pages/adminSide/dashboard/DashboardPage";

import OurTeamPage from "../pages/clientSide/ourTeamPage/OurTeamPage";
import ProductUpdatePage from "../pages/adminSide/Product/ProductUpdatePage";
import CompanyProfilePage from "../pages/clientSide/companyProfilePage/CompanyProfilePage";
import AllApplication from "../components/adminSide/Application/AllApplication";
import GetSingleApplication from "../components/adminSide/Application/GetSingleApplication";
import ApplicationPage from "../pages/clientSide/CareerDetailsPage/ApplicationPage";
import UpdateCareerPage from "../pages/adminSide/Career/UpdateCareerPage";
import ProductDetailsPage from "../pages/clientSide/productDetailsPage/ProductDetailsPage";
import PrivateRoutes from "./PrivateRoutes";
import RequestDemo from "../pages/clientSide/productDetailsPage/RequestDemo";
import ManageTeam from "../pages/adminSide/teamRelatedPage/manageTeam/ManageTeam";
import UpdateMember from "../pages/adminSide/teamRelatedPage/updateMember/UpdateMember";
import CreatePortfolioPage from './../pages/adminSide/portfolioPage/CreatePortfolioPage';
import AllPortfolioPage from "../pages/adminSide/portfolioPage/AllPortfolioPage";
import UpdatePortfolioPage from "../pages/adminSide/portfolioPage/UpdatePortfolioPage";
import AddBlogPage from './../pages/adminSide/blog-page/AddBlogPage';
import ManageBlogPage from "../pages/adminSide/blog-page/ManageBlogPage";
import BlogPage from "../pages/clientSide/blogRelatedPages/BlogPage";
import Blogdetails from "../pages/clientSide/blogRelatedPages/Blogdetails";
import BlogUpdatePage from "../pages/adminSide/blog-page/BlogUpdatePage";
import ProductPage from "../pages/clientSide/productPage/ProductPage";
import CategoryCreateForm from "../pages/adminSide/category-page/CategoryCreateForm";
import ManageCategoryPage from './../pages/adminSide/category-page/ManageCategoryPage';
import CategoryUpdatePage from "../pages/adminSide/category-page/CategoryUpdatePage";
import Info from "../pages/adminSide/representativeRelatedPage/info/Info";
import Client from "../pages/adminSide/representativeRelatedPage/client/Client";
import PaymentHistory from "../pages/adminSide/representativeRelatedPage/payment/PaymentHistory";
import Training from "../pages/adminSide/representativeRelatedPage/training/Training";
import Refers from "../pages/adminSide/representativeRelatedPage/refers/Refers";
import ProfileRep from "../pages/adminSide/representativeRelatedPage/profile/ProfileRep";
import AccountRep from "../pages/adminSide/representativeRelatedPage/accountsRep/AccountRep";
import AddClient from "../pages/adminSide/representativeRelatedPage/client/addClient/AddClient";
import ClientList from "../pages/adminSide/representativeRelatedPage/client/list/ClientList";
import DueClientList from "../pages/adminSide/representativeRelatedPage/client/list/DueClientList";
import ClientSupport from "../pages/adminSide/representativeRelatedPage/client/list/ClientSupport";
import RepresentativeLogin from "../components/clientSide/Login/RepresentativeLogin";
import RepresentativeRegister from "../components/clientSide/Register/RepresentativeRegister";
import StepTwoRegister from "../components/clientSide/Register/StepTwoRegister";
import StepThreeRegister from "../components/clientSide/Register/StepThreeRegister";
import PrivateRoute from "./PrivateRoutes";
import RepDashboard from "../components/representative/RepDashboard";
import RepresentativeTable from "../components/representative/RepresentativeTable";
import ManageUser from "../pages/adminSide/manage-user/ManageUser";
import AdminProfile from "../pages/adminSide/manage-user/AdminProfile";
import AddAdmin from "../pages/adminSide/manage-user/AddAdmin";
import AddRepresentative from "../pages/adminSide/representativeRelatedPage/addRep/AddRepresentative";
import ManageTeamTable from "../pages/adminSide/teamRelatedPage/manageTeamTable/ManageTeamTable";
import Profile from "../pages/adminSide/dashboard/DashboardLandingPage";
import UserProfile from "../pages/adminSide/manage-user/UserProfile";
import AddAccountInfo from "../pages/adminSide/representativeRelatedPage/accountsRep/AddAccountInfo";
import UpdateAccountInfoForm from "../pages/adminSide/representativeRelatedPage/accountsRep/UpdateAccountInfoForm";
import AddClientAdmin from "../pages/clientSide/client/AddClientAdmin";
import AllClientAdmin from "../pages/clientSide/client/AllClientAdmin";
import UpdateClientAdmin from "../pages/clientSide/client/UpdateClientAdmin";
import ClientProfileByAdmin from "../pages/clientSide/client/ClientProfileByAdmin";
import ClientLogin from "../pages/clientSide/client/ClientLogin";
import AddSessionVideo from "../pages/adminSide/sessionVideo/AddSessionVideo";
import AddProductVideo from "../pages/adminSide/productVideo/AddProductVideo";
import ProductVideoUpdate from "../pages/adminSide/productVideo/ProductVideoUpdate";
import SessionVideoTable from "../pages/adminSide/sessionVideo/SessionVideoTable";
import SessionUpdateVideo from "../pages/adminSide/sessionVideo/SessionUpdateVideo";
import ProductVideoTable from "../pages/adminSide/productVideo/ProductVideoTable";
import ProductVideo from "../pages/adminSide/representativeRelatedPage/productVideo/ProductVideo";
import SendUpportMsg from "../pages/clientSide/support/SendUpportMsg";
import ShowAllMessages from "../pages/clientSide/support/ShowAllMessages";
import MessageDetails from "../pages/clientSide/support/MessageDetails";
import CEOSpeech from "../pages/clientSide/ceoSpeech/CEOSpeech";
import AddProductRequest from "../pages/adminSide/representativeRelatedPage/productRequest/AddProductRequest";
import MyProductRequest from "../pages/adminSide/representativeRelatedPage/productRequest/MyProductRequest";
import AllProductRequest from "../pages/adminSide/productRequest/AllProductRequest";
import ClientProductList from "../pages/adminSide/clientRelatedPages/productList/ClientProductList";
import Payment from "../pages/adminSide/clientRelatedPages/payment/Payment";
import TransactionList from "../pages/adminSide/clientRelatedPages/transaction/TransactionList";
import TransactionTableAdmin from "../pages/adminSide/payment/TransactionTableAdmin";
import ProductCategoryAdd from "../components/adminSide/product-category/ProductCategoryAdd";
import ProductCategoryManage from "../components/adminSide/product-category/ProductCategoryManage";
import PriceUpdate from "../components/adminSide/product-category/PriceUpdate";
import ProductCategoryDetails from "../components/adminSide/product-category/ProductCategoryDetails";





const router = createBrowserRouter([

    // FrontEnd routes 
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/about-us",
                element: <AboutUsPage></AboutUsPage>
            },
            {
                path: '/contact-us',
                element: <ContactUsPage></ContactUsPage>
            },
            {
                path: '/ceo-speech',
                element: <CEOSpeech/>
            },

            {
                path: '/career',
                element: <CareerPage></CareerPage>
            },
            {
                path: '/career/:id',
                element: <CareerDetailsPage></CareerDetailsPage>,
            },
            {
                path: '/apply-job/:id',
                element: <ApplicationPage></ApplicationPage>,
            },
            {
                path: '/services',
                element: <ServicePage></ServicePage>
            },
            {
                path: '/serviceDetails/:id',
                element: <ServiceDetailsPage></ServiceDetailsPage>
            },
            {
                path: '/products',
                element: <ProductPage></ProductPage>
            },
            {
                path: '/productsDetails/:id',
                element: <ProductDetailsPage></ProductDetailsPage>
            },

            {
                path: "/login",
                element: <LoginPage></LoginPage>
            },


            {
                path: '/register',
                element: <RegisterPage></RegisterPage>
            },
            {
                path: '/portfolio',
                element: <PortfolioPage></PortfolioPage>
            },



            {
                path: "/our-team",
                element: <OurTeamPage></OurTeamPage>
            },
            {
                path: "/company-profile",
                element: <CompanyProfilePage></CompanyProfilePage>
            },
            {
                path: "/request-demo",
                element: <RequestDemo></RequestDemo>
            },
            {
                path: "/blogs",
                element: <BlogPage></BlogPage>
            },
            {
                path: "/blogDetails/:id",
                element: <Blogdetails></Blogdetails>
            },


            // representative login routes 

            {
                path: "/representative-login",
                element: <RepresentativeLogin></RepresentativeLogin>
            },

            // representative register routes

            {
                path: "/representative-register",
                element: <RepresentativeRegister></RepresentativeRegister>
            },
            {
                path: "/upload-information",
                element: <StepTwoRegister></StepTwoRegister>
            },
            {
                path: "/representative/step-three",
                element: <StepThreeRegister></StepThreeRegister>
            },



        ]
    },

    // Dashboard routes 

    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <PrivateRoute>
                    <Profile />
                </PrivateRoute>
            },
            {
                path: "admin-dashboard",
                element: <PrivateRoute role={"admin"}><DashboardPage></DashboardPage></PrivateRoute>
            },
            {
                path: "add-service",
                element: <PrivateRoute role={"admin"}><AddServicePage></AddServicePage></PrivateRoute>
            },
            {
                path: "manage-service",
                element: <PrivateRoute role={"admin"}> <ManageServicePage></ManageServicePage> </PrivateRoute>
            },
            {
                path: "update-service/:id",
                element: <PrivateRoute role={"admin"}> <UpdateServicePage></UpdateServicePage> </PrivateRoute>
            },
            {
                path: "add-career",
                element: <PrivateRoute role={"admin"}> <AddCareerPage></AddCareerPage> </PrivateRoute>
            },
            {
                path: "career-update/:id",
                element: <PrivateRoute role={"admin"}><UpdateCareerPage></UpdateCareerPage></PrivateRoute>
            },
            {
                path: "manage-career",
                element: <PrivateRoute role={"admin"}><ManageCareerPage></ManageCareerPage> </PrivateRoute>
            },
            {
                path: "add-product",
                element: <PrivateRoute role={"admin"}> <AddProductPage></AddProductPage> </PrivateRoute>
            },
            {
                path: "application",
                element: <PrivateRoute role={"admin"}><AllApplication></AllApplication></PrivateRoute>
            },
            {
                path: "getSingleApplication/:id",
                element: <PrivateRoute role={"admin"}><GetSingleApplication></GetSingleApplication></PrivateRoute>
            },
            {
                path: "manage-product",
                element: <PrivateRoute role={"admin"} ><ManageProductPage></ManageProductPage></PrivateRoute>
            },
            {
                path: "/dashboard/product/update/:id",
                element: <PrivateRoute role={"admin"} ><ProductUpdatePage></ProductUpdatePage></PrivateRoute>
            },
            {
                path: "/dashboard/add-team",
                element: <PrivateRoute role={"admin"}><ManageTeam></ManageTeam></PrivateRoute>
            },

            {
                path: "/dashboard/manage-team",
                element: <PrivateRoute role={"admin"}><ManageTeamTable></ManageTeamTable></PrivateRoute>
            },
            {
                path: "/dashboard/update/:id",
                element: <PrivateRoute role={"admin"}><UpdateMember></UpdateMember></PrivateRoute>
            },
            {
                path: "create-portfolio",
                element: <PrivateRoute role={"admin"}><CreatePortfolioPage></CreatePortfolioPage></PrivateRoute>
            }, {
                path: "manage-portfolio",
                element: <PrivateRoute role={"admin"}><AllPortfolioPage></AllPortfolioPage></PrivateRoute>
            },
            {
                path: "portfolio-update/:id",
                element: <PrivateRoute role={"admin"}><UpdatePortfolioPage></UpdatePortfolioPage></PrivateRoute>
            },
            {
                path: "add-blog",
                element: <PrivateRoute role={"admin"} ><AddBlogPage></AddBlogPage></PrivateRoute>
            },
            {
                path: "manage-blog",
                element: <PrivateRoute role={"admin"}><ManageBlogPage></ManageBlogPage></PrivateRoute>
            },
            {
                path: "blog-update/:id",
                element: <PrivateRoute role={"admin"}><BlogUpdatePage></BlogUpdatePage></PrivateRoute>
            },
            {
                path: "create/category",
                element: <PrivateRoute role={"admin"}><CategoryCreateForm></CategoryCreateForm></PrivateRoute>
            },
            {
                path: "manage-category",
                element: <PrivateRoute role={"admin"}><ManageCategoryPage></ManageCategoryPage></PrivateRoute>
            },
            {
                path: "category-update/:id",
                element: <PrivateRoute role={"admin"}><CategoryUpdatePage></CategoryUpdatePage></PrivateRoute>
            },

            {
                path: "manage-representative",
                element: <PrivateRoute role={"admin"}><RepresentativeTable></RepresentativeTable></PrivateRoute>
            },
            {
                path: "manage-user",
                element: <PrivateRoute role={"admin"} ><ManageUser></ManageUser></PrivateRoute>
            },
            {
                path: "admin-profile/:id",
                element: <PrivateRoute role={"admin"} > <AdminProfile></AdminProfile> </PrivateRoute>
            },

            {
                path: "add-admin",
                element: <PrivateRoute role={"admin"} > <AddAdmin></AddAdmin> </PrivateRoute>
            },
            {
                path: "user-profile/:id",
                element: <PrivateRoute role={"admin"} > <UserProfile></UserProfile> </PrivateRoute>
            },

            {
                path: "add-client-admin",
                element: <PrivateRoute role={"admin"} > <AddClientAdmin></AddClientAdmin> </PrivateRoute>
            },

            {
                path: "manage-client",
                element: <PrivateRoute role={"admin"} > <AllClientAdmin></AllClientAdmin> </PrivateRoute>
            },

            {
                path: "update-client-admin/:id",
                element: <PrivateRoute role={"admin"} > <UpdateClientAdmin></UpdateClientAdmin> </PrivateRoute>
            },

            {
                path: "client-profile/:id",
                element: <PrivateRoute role={"admin"} > <ClientProfileByAdmin></ClientProfileByAdmin> </PrivateRoute>
            },

            {
                path: "add-product-video",
                element: <PrivateRoute role={"admin"} > <AddProductVideo /></PrivateRoute>
            },
            {
                path: "product-video-update/:id",
                element: <PrivateRoute role={"admin"} > <ProductVideoUpdate></ProductVideoUpdate> </PrivateRoute>
            },
            {
                path: "session-video-update/:id",
                element: <PrivateRoute role={"admin"} > <SessionUpdateVideo></SessionUpdateVideo> </PrivateRoute>
            },

            {
                path: "add-session-video",
                element: <PrivateRoute role={"admin"} ><AddSessionVideo /></PrivateRoute>
            },
            // product category add

            {
                path : "product-category-add",
                element : <PrivateRoute role={"admin"}><ProductCategoryAdd></ProductCategoryAdd></PrivateRoute>
            },
            {
                path : "manage-product-category",
                element : <PrivateRoute role={"admin"}> <ProductCategoryManage></ProductCategoryManage> </PrivateRoute>
            },
            {
                path : "product-price-update/:id",
                element : <PrivateRoute role={"admin"}> <PriceUpdate></PriceUpdate> </PrivateRoute>
            },
            {
                path : "category-details/:id",
                element : <PrivateRoute role={"admin"}> <ProductCategoryDetails></ProductCategoryDetails> </PrivateRoute>
            },


            // Rrepresentative related routes
            {
                path: "add-representative",
                element: <AddRepresentative></AddRepresentative>
            },

            {
                path: "/dashboard",
                element: <RepDashboard></RepDashboard>
            },
            {
                path: "info",
                element: <Info></Info>
            },
            {
                path: "client",
                element: <Client></Client>
            },
            {
                path: "payment",
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: "product-video",
                element: <AddProductVideo></AddProductVideo>
            },
            {
                path: "show-product-video",
                element: <ProductVideo/>
            },
            {
                path: "training",
                element: <Training></Training>
            },
            {
                path: "refers",
                element: <Refers></Refers>
            },
            {
                path: "rep-profile/:id",
                element: <ProfileRep></ProfileRep>
            },
            {
                path: "account-rep",
                element: <AccountRep></AccountRep>
            },

            {
                path: "add-rep-account-info",
                element: <AddAccountInfo />
            },

            {
                path: "update-rep-account-info/:id",
                element: <UpdateAccountInfoForm></UpdateAccountInfoForm>
            },
            

            // client related routes 
            {
                path: "add-client",
                element: <AddClient></AddClient>
            },
            {
                path: "client-list",
                element: <ClientList></ClientList>
            },
            {
                path: "due-client-list",
                element: <DueClientList></DueClientList>
            },
            {
                path: "client-support",
                element: <ClientSupport></ClientSupport>
            },

            {
                path: "send-message",
                element: <SendUpportMsg></SendUpportMsg>
            },
            {
                path: "show-supporting-message",
                element: <ShowAllMessages/>
            },
            {
                path: "message-details/:id",
                element: <MessageDetails></MessageDetails>
            },
            {
                path: "client-transaction",
                element: <TransactionList/>
            },
            // product request related routes
            {
                path: "add-product-reqeust",
                element: <AddProductRequest/>
            },
            {
                path: "my-product-request",
                element: <MyProductRequest/>
            },
            // For admin side 
            {
                path: "all-product-reqeust",
                element: <AllProductRequest/>
            },
            // Client dashboard related routes 
            {
                path: "client-product-list",
                element: <ClientProductList/>
            },
            {
                path: "payment/:id",
                element: <Payment/>
            },
            {
                path: "transaction-table-admin",
                element: <TransactionTableAdmin/>
            }
        ]
    },






    {
        path: "/admin-registration",
        element: <AdminRegistration></AdminRegistration>
    },


    // client login routes

    {
        path: "/client-login",
        element: <ClientLogin></ClientLogin>
    }


]);

export default router;