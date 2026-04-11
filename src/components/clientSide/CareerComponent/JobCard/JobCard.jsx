import { ImLocation2 } from "react-icons/im";
import { CiBookmark } from "react-icons/ci";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoMdClock } from "react-icons/io";




import { Link } from "react-router-dom";
import careerStore from './../../../../api-request/carrer-api/carrerApi';
import { useEffect } from "react";


const JobCard = ({job}) => {
    const {allCareersData,allCareersDataApi} = careerStore();

    useEffect(()=>{
        (async () => {
            await allCareersDataApi();
        })();
    },[]);

    console.log(allCareersData);
  

    return (
        <div>
            {
                allCareersData && allCareersData.map((item,i)=>{
                    return (
                        <div key={i} >
                            <Link to={`/career/${item?.["_id"]}`} >
                            <div className="border-y border-gray-400 hover:bg-slate-200 duration-75 px-2 cursor-pointer py-4">
                            <div className="flex items-center justify-between">
                                <h1 className="text-text_primari text-3xl font-semibold">{item?.jobTitle}</h1>
                                <CiBookmark />
                            </div>
                            <div className="flex items-center text-sm gap-2 pt-2">
                                <ImLocation2 className="text-text_blue"/>
                                <p className="text-gray-900 ">Workplace : {item?.workplace}</p>
                            </div>
                            <div className="flex items-center text-sm gap-2 ">
                                <IoMdClock  className="text-text_blue"/>
                                <p className="text-gray-900 ">{item?.status }</p>
                            </div>
                            <div className="flex items-center text-sm gap-2">
                         
                                <AiFillDollarCircle className="text-text_blue"/>
                                <p className="text-gray-900 ">Salary: {item?.salary}</p>
                            </div>
                            <p className="text-gray-900 py-3">{item?.edu.substring(0, 40)}...</p>
                            <div className="badge badge-ghost">13 days ago</div>
                        </div>

            
            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
};



export default JobCard;