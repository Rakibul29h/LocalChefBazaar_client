import React from 'react';
import MenuItem from '../../../components/DashBoard/Sidebar/MenuItem/MenuItem';
import { BsGraphUp } from 'react-icons/bs'
import { FaUserCog, FaUserTag } from 'react-icons/fa';

const AdminMenu = () => {
    return (
        <>
              <MenuItem icon={FaUserCog} label='Manage User' address='manageUser' />
              <MenuItem icon={FaUserTag} label='ManageRequest' address='manageRequest' />
               <MenuItem
                icon={BsGraphUp}
                label='Statistics'
                address='/dashboard/statistics'
              />
              
        </>
    );
};

export default AdminMenu;