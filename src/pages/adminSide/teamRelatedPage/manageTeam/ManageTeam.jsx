import React from 'react';
import UploadDataForm from './UploadDataForm';
import TeamTable from './TeamTable';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const ManageTeam = () => {
    const axiosPublic = useAxiosPublic();
    const { data: teamMembers = {}, refetch } = useQuery({
        queryKey: ['teamMembers'],
        queryFn: async () => {
            const res = await axiosPublic.get('/member');
            return res.data;
        }
    });

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("is confirmed")
                axiosPublic.delete(`/member/${id}`)
                    .then(res => {
                        if (res) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Member has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })

            }
        });
    }

    return (
        <div>
            <Helmet>
                <title>Dashboard | Manage Team</title>
            </Helmet>
            <UploadDataForm refetch={refetch} />
            
        </div>
    );
};

export default ManageTeam;
