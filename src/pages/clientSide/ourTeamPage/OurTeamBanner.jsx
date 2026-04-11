import React from "react";

const OurTeamBanner = () => {
  return (
    <div>
      <div className="relative flex items-center justify-center h-screen bg-black ">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dj2edy2rg/image/upload/v1725970183/pexels-padrinan-3785927_cjbsgh.jpg')", // Replace with the actual image URL
          }}
        ></div>

        {/* Text Container */}
        <div className="relative z-10 text-white text-center space-y-4">
          {/* First Line - "Built On" */}
          <p className="text-2xl font-semibold tracking-wider uppercase">
            Built On
          </p>

          {/* Second Line - "TEAMWORK" */}
          <p
            className="text-6xl lg:text-8xl font-bold tracking-tight"
            style={{
              letterSpacing: "2px",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
              transform: "skewX(-5deg)", // Optional for slight slant effect
            }}
          >
            TEAMWORK
          </p>

          {/* Third Line - "& a passion for quality" */}
          <p className="text-lg lg:text-xl tracking-wide uppercase">
            & A Passion For Quality
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeamBanner;
