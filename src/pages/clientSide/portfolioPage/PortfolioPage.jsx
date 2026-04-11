import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const PortfolioPage = () => {

  window.scrollTo(0, 0);

  useEffect(() => {
    AOS.init({
      delay: 300,
      duration: 1000
    })
  })

  const axiosPublic = useAxiosPublic();
  const { data: portfolios = {} } = useQuery({
    queryKey: ['portfolios'],
    queryFn: async () => {
      const res = await axiosPublic.get('/get-all-portfolio');
      return res.data;
    }
  })

  const projects = portfolios?.data;

  return (
    <>
      <Helmet>
        <title>SoftTech | Portfolio</title>
      </Helmet>
      <div className="w-10/12 mb-20 mx-auto ">
        <p className="text-2xl font-bold text-center py-5 text-universe_primary">
          PORTFOLIO
        </p>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-8">
          {
            projects?.map(portfolio =>
              <div key={portfolio._id} data-aos="zoom-out-right" className=" shadow-2xl border rounded-lg p-5">
                <div>
                  <img
                    src={portfolio?.img}
                    alt=""
                  />
                </div>
                <div>
                  <p className="font-bold text-2xl my-4">{ portfolio?.title }</p>
                </div>
                <div className=" flex justify-end">
                  <Link target="_blank" to={portfolio?.live_link}>
                    <button className="bg-universe_primary font-bold text-white p-5 text-xl rounded-lg">
                      Live Link
                    </button>
                  </Link>
                </div>
              </div>)
          }





        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
