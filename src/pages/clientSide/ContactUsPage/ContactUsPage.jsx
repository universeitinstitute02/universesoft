import { Helmet } from "react-helmet-async";
import ContactUs from "../../../components/clientSide/ContactUsComponent/ContactUs/ContactUs";


const ContactUsPage = () => {
    window.scrollTo(0, 0);
    return (
        <div className="">
            <Helmet>
                <title>Soft Tech | Contact Us</title>
            </Helmet>
            <ContactUs></ContactUs>

            
        </div>
    );
};

export default ContactUsPage;