import React from 'react'
import OurTeam from '../homePage/OurTeam'
import OurTeamBanner from './OurTeamBanner'
import TeamCard from './TeamCard';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const OurTeamPage = () => {
  window.scrollTo(0, 0);
  const teammember = [{}, {}, {}, {}, 2, 4, 2, 4];
  const axiosPublic = useAxiosPublic();
  const { data: teams = [] } = useQuery({
    queryKey: ['teams'],
    queryFn: async () => {
      const res = await axiosPublic.get('/member');
      return res.data.data;
    }
  })

  console.log(teams);
  const CEO = teams.find(member => member.email === "golamkibriya32@gmail.com");

  const otherMembers = teams.filter(member => member.email !== "golamkibriya32@gmail.com");
  return (
    <div>

      <Helmet>
        <title>SoftTech | Team</title>
      </Helmet>
      <div className='mb-20' >
        <p className='text-4xl my-5 text-center font-bold'>Our <span className="text-[#6E34FD] ">Team</span></p>
        <div className="mb-10">
          <TeamCard member={CEO}></TeamCard>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 lg:gap-5 justify-items-center justify-center px-2">
          {
            otherMembers?.map(member => <TeamCard member={member}></TeamCard>)
          }
          
        </div>

      </div>
    </div>
  )
}

export default OurTeamPage
