import React from 'react';
import ManageRequestTable from '../../../components/DashBoard/Table/ManageRequestTable';

const ManageRequest = () => {
    return (
        <div>
             <h2 className='text-2xl font-semibold md:text-3xl '>Manage Requst</h2>
            <div className='mt-10'>

            <ManageRequestTable></ManageRequestTable>
            </div>
        </div>
    );
};

export default ManageRequest;