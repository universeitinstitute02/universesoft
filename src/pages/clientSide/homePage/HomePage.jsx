import { Helmet } from "react-helmet-async";
import Banner from "../../../components/clientSide/HomeComponent/Banner/Banner";
import NimuHRM from "../../../components/clientSide/HomeComponent/NimuHRM/NimuHRM";
import NimuSoftProduct from "../../../components/clientSide/HomeComponent/NimuSoftProduct/NimuSoftProduct";
import AtGlance from "../../../components/clientSide/HomeComponent/atglance/AtGlance.jsx";
import Service from "../../../components/clientSide/HomeComponent/Service/Service";
import Technology from "../../../components/clientSide/HomeComponent/Technology/Technology";
import NewsLetter from "../../../components/clientSide/HomeComponent/NewsLetter/NewsLetter";
import { motion } from 'framer-motion'
import AllinOne from "./AllinOne.jsx";
import OurProductsSection from "./OurProductsSection.jsx";
import OurTeam from "./OurTeam.jsx";
import ExpandableCards from "./ExpandableCards.jsx";
import { useEffect } from "react";
import Aos from "aos";
import useAxiosPublic from "../../../hooks/useAxiosPublic.jsx";
import { useQuery } from "@tanstack/react-query";





const HomePage = () => {

    window.scrollTo(0, 0);
    const axiosPublic = useAxiosPublic();

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get('/get-products');
            return res.data.data;
        }
    })

    window.scrollTo(0, 0);
    useEffect(() => {
        Aos.init({ duration: 1000, delay: 100 });
    }, []);

    const scrollAnimationVariants = {
        hidden: { opacity: 0, y: 2 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 50
            }
        }
    };

    return (
        <div className="lg:mt-12">
            <Helmet>
                <title>Soft Tech</title>
            </Helmet>
            <div>
                <Banner></Banner>
            </div>




            <div className="my-aos-element" data-aos="fade-up">
                <AllinOne></AllinOne>
            </div>

            <div>
                <OurProductsSection products={products}></OurProductsSection>
            </div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={scrollAnimationVariants}
                viewport={{ once: true, amount: 0.2 }}>
                <OurTeam></OurTeam>
            </motion.div>



            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={scrollAnimationVariants}
                viewport={{ once: true, amount: 0.2 }}>
                <AtGlance></AtGlance>
            </motion.div>


            <motion.div
                className="lg:block hidden"
                initial="hidden"
                whileInView="visible"
                variants={scrollAnimationVariants}
                viewport={{ once: true, amount: 0.2 }}>
                <ExpandableCards></ExpandableCards>
            </motion.div>



            <div className="">
                <Technology></Technology>
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={scrollAnimationVariants}
                viewport={{ once: true, amount: 0.2 }}>
                <NewsLetter></NewsLetter>
            </motion.div>





        </div>
    );
};

export default HomePage;