import { Helmet } from "react-helmet-async";
import Login from "../../../components/clientSide/Login/Login"


const LoginPage = () => {
    return (
        <div className="mt-12">
            <Helmet>
                <title>Soft Tech | Login</title>
            </Helmet>
            <Login></Login>
            

            
        </div>
    );
};

export default LoginPage;