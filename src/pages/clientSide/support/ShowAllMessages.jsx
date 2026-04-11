import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import MessageTable from './MessageTable';

const ShowAllMessages = () => {

    const adminToken = localStorage.getItem("admin_token");
    const config = {
        headers: {
            Authorization: adminToken,
        },
    };

    const axiosPublic = useAxiosPublic();
    const { data: allMessages = [] ,isLoading,refetch} = useQuery({
        queryKey: ['allMessages'],
        queryFn: async (req, res) => {
            res = await axiosPublic.get('/support', config);
            return res.data.data;
        }
    })

    console.log(allMessages);
    return (
        <div>
            This is all message
            <MessageTable refetch = {refetch} isLoading = {isLoading} allMessages={allMessages}></MessageTable>
        </div>
    );
};

export default ShowAllMessages;