import React from 'react';
import Sidebar from '../../components/DashBoard/Sidebar/Sidebar';
import { Outlet } from 'react-router';
import { Helmet } from 'react-helmet-async';


const DashBoardLayout = () => {

        
    return (
         <div className='relative min-h-screen md:flex'>
             <Helmet>
                      <title>DashBoard - LocalChefBazaar</title>
                    </Helmet>
      <Sidebar />
  
       <div className='flex-1  md:ml-64'>
        <div className='p-5'>
         
          <Outlet />
        </div>
      </div>
    </div>
    );
};

export default DashBoardLayout;