import React, { useState } from 'react';
import Sidebar from '../../components/DashBoard/Sidebar/Sidebar';
import { Outlet } from 'react-router';
import { Helmet } from 'react-helmet-async';


const DashBoardLayout = () => {

          const [isActive, setActive] = useState(false);
    return (
         <div className='relative min-h-screen md:flex'>
             <Helmet>
                      <title>DashBoard - LocalChefBazaar</title>
                    </Helmet>
      <Sidebar isActive={isActive} setActive={setActive} />
  
       <div className='flex-1  md:ml-64' onClick={()=>{setActive(false)}}>
        <div className='p-5'>
         
          <Outlet />
        </div>
      </div>
    </div>
    );
};

export default DashBoardLayout;