import React from 'react';
import Sidebar from '../../components/DashBoard/Sidebar/Sidebar';
import { Outlet } from 'react-router';
import useAxiosSecure from '../../hooks/useSecureAxios';

const DashBoardLayout = () => {

    const axiosSecure=useAxiosSecure();
    axiosSecure.get("/xyz")
    .then(res=>{
      console.log(res);
    })
    return (
         <div className='relative min-h-screen md:flex'>
            
      <Sidebar />
  
       {/*<div className='flex-1  md:ml-64'>
        <div className='p-5'>
         
          <Outlet />
        </div>
      </div> */}
    </div>
    );
};

export default DashBoardLayout;