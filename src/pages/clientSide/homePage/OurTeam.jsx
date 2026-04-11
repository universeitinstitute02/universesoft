import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, FreeMode, Autoplay } from "swiper/modules";
import TeamCard from "../ourTeamPage/TeamCard";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const OurTeam = () => {
  window.scrollTo(0, 0);

  const axiosPublic = useAxiosPublic();
  const { data: teams = [] } = useQuery({
    queryKey: ['teams'],
    queryFn: async () => {
      const res = await axiosPublic.get('/member');
      return res.data.data;
    }
  });

  const CEO = teams.find(member => member.email === "golamkibriya32@gmail.com");
  const otherMembers = teams.filter(member => member.email !== "golamkibriya32@gmail.com");

  return (
    <div className="my-aos-element my-5">
      <div className="container mx-auto">
        <div className="py-10 text-center">
          <h2 className="lg:text-5xl text-2xl font-bold">The Visionary Team</h2>
          <p className="lg:text-xl pt-5">
            Meet the Innovators Behind Our Cutting-Edge Solutions
          </p>
        </div>

        {/* CEO Card */}
        <TeamCard member={CEO}></TeamCard>

        <div className="lg:pb-20 mt-10">
          <Swiper
            spaceBetween={10}
            freeMode={true}
            navigation={true}
            autoplay={{
              delay: 0,               // No delay for a continuous movement
              disableOnInteraction: false, // Keeps moving even when user interacts
              pauseOnMouseEnter: true  // Pauses when user hovers over
            }}
            speed={5000}               // Speed of the transition (lower means faster)
            loop={true}                // Keeps looping the slides
            modules={[FreeMode, Pagination, Navigation, Autoplay]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,  // Reduced space for closer cards on tablet view
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,  // Closer cards for desktop view
              },
            }}
          >
            {otherMembers?.map(member => (
              <SwiperSlide key={member._id}>
                <TeamCard member={member}></TeamCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
