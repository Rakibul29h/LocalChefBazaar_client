import React from 'react';
import ManageUserTable from '../../../components/DashBoard/Table/ManageUserTable';

const ManageUser = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold md:text-3xl '>Manage Users</h2>
            <div className='mt-10'>

            <ManageUserTable></ManageUserTable>
            </div>
        </div>
    );
};

export default ManageUser;