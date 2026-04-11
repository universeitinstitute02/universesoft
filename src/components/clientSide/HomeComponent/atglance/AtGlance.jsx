// import React from "react"
// import { PiNotePencilBold } from "react-icons/pi";
// import CountUp from "react-countup";

// const AtGlance = () => {
//   const countUpRef = React.useRef(null);
//   return (
//     <div className="container mx-auto lg:pt-3 text-center">
//       <h1 className=" text-2xl font-semibold">Universe Soft Tech</h1>
//       <h1 className="font-bold text-text_primari text-3xl lg:text-5xl">At a Glance</h1>

//       <div className="grid grid-cols-2 lg:grid-cols-6  my-5 justify-between w-11/12 gap-1 lg:gap-5 lg:space-y-0  mx-auto">

//         <div className="shadow-lg px-12 p-5 flex flex-col  justify-center items-center space-y-4 border rounded-lg  ">
//           <div ref={countUpRef} />
//           {/* <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725701757/Universe%20Soft%20Tech/Homepage/At%20a%20glance/xogrfzbhpixjz7jyc7vb.png" alt="" className="w-14" /> */}
//           <span className="text-xs lg:text-2xl  font-bold">
//             <CountUp className="" end={50} duration={10} /> +
//           </span>
//           <p className="text-xl font-medium">Projects</p>
//         </div>

//         <div className="shadow-lg px-12 p-5 flex flex-col  justify-center items-center space-y-4 border rounded-lg  ">
//           <div ref={countUpRef} />
//           {/* <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725701870/Universe%20Soft%20Tech/Homepage/At%20a%20glance/p5t4rciw9zg26pihildc.png" alt="" className="w-14" /> */}
//           <span className="text-xs lg:text-2xl  font-bold">
//             <CountUp className="" end={40} duration={10} /> +
//           </span>
//           <p className="text-xl font-medium">Projects</p>
//         </div>
       
//         <div className="shadow-lg px-12 p-5 flex flex-col  justify-center items-center space-y-4 border rounded-lg">
//           <div ref={countUpRef} />
//           {/* <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725702021/Universe%20Soft%20Tech/Homepage/At%20a%20glance/e4fukoxe7edxuakm3qqe.png" alt="" className="w-14" /> */}
//           <span className="text-xs lg:text-2xl  font-bold">
//             <CountUp className="" end={100} duration={7} /> +
//           </span>
//           <p className="text-xl font-medium">Projects</p>
//         </div>

//         <div className="shadow-lg px-12 p-5 flex flex-col  justify-center items-center space-y-4 border rounded-lg">
//           <div ref={countUpRef} />
//           {/* <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725702143/Universe%20Soft%20Tech/Homepage/At%20a%20glance/et782fty0y6dandxpcui.png" alt="" className="w-14" /> */}
//           <span className="text-xs lg:text-2xl  font-bold">
//             <CountUp className="" end={100} duration={7} /> +
//           </span>
//           <p className="text-xl font-medium">Projects</p>
//         </div>


//         <div className="shadow-lg px-12 p-5 flex flex-col  justify-center items-center space-y-4 border rounded-lg">
//           <div ref={countUpRef} />
//           {/* <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725702256/Universe%20Soft%20Tech/Homepage/At%20a%20glance/aavusxbfoy5xpth5dlrh.png" alt="" className="w-14" /> */}
//           <span className="text-xs lg:text-2xl  font-bold">
//             <CountUp className="" end={100} duration={5} /> +
//           </span>
//           <p className="text-xl font-medium">Projects</p>
//         </div>

//         <div className="shadow-lg px-12 p-5 flex flex-col  justify-center items-center space-y-4 border rounded-lg">
//           <div ref={countUpRef} />
//           {/* <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725702470/Universe%20Soft%20Tech/Homepage/At%20a%20glance/gzutc6q7h4mpafew0hvx.png" alt="" className="w-14" /> */}
//           <span className="text-xs lg:text-2xl  font-bold">
//             <CountUp className="" end={10} duration={9} />k +
//           </span>
//           <p className="text-xl font-medium">Projects</p>
//         </div>


//       </div>




//     </div>
//   )
// };

// export default AtGlance


import CountUp from "react-countup";

// Stats data — add icons/labels properly
const stats = [
    { end: 50,  suffix: '+',  label: 'Projects Delivered' },
    { end: 40,  suffix: '+',  label: 'Happy Clients'       },
    { end: 100, suffix: '+',  label: 'Team Members'        },
    { end: 100, suffix: '+',  label: 'Deployments'         },
    { end: 100, suffix: '+',  label: 'Support Tickets'     },
    { end: 10,  suffix: 'k+', label: 'Users Served'        },
];

const AtGlance = () => {
    return (
        <section className="py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-10">
                    <p className="text-sm text-gray-500 mb-1">Universe Soft Tech</p>
                    <h2 className="text-2xl lg:text-4xl font-semibold text-gray-900">
                        At a <span className="text-blue-600">Glance</span>
                    </h2>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                        >
                            <p className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-1">
                                <CountUp end={stat.end} duration={6} />{stat.suffix}
                            </p>
                            <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AtGlance;