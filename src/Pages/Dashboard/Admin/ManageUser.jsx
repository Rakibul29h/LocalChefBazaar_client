import React from 'react';
import ManageUserTable from '../../../components/DashBoard/Table/ManageUserTable';
import { Helmet } from 'react-helmet-async';

const ManageUser = () => {
    return (
        <div>
                  <Helmet>
        <title>Manage user</title>
      </Helmet>
            <h2 className='text-2xl font-semibold md:text-3xl '>Manage Users</h2>
            <div className='mt-10'>

            <ManageUserTable></ManageUserTable>
            </div>
        </div>
    );
};

export default ManageUser;