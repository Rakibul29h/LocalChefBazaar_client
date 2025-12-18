import React from 'react';
import MenuItem from '../../../components/DashBoard/Sidebar/MenuItem/MenuItem';
import { BsGraphUp } from 'react-icons/bs'
import { FaUserCog, FaUserTag } from 'react-icons/fa';

const AdminMenu = ({setActive}) => {
    return (
        <>
              <MenuItem icon={FaUserCog} label='Manage User' address='manageUser' 
               onClick={()=>setActive(false)} />
              <MenuItem icon={FaUserTag} label='ManageRequest' address='manageRequest' 
               onClick={()=>setActive(false)} />
               <MenuItem
                icon={BsGraphUp}
                label='Statistics'
                address='/dashboard/statistics'
                 onClick={()=>setActive(false)} 
              />
              
        </>
    );
};

export default AdminMenu;