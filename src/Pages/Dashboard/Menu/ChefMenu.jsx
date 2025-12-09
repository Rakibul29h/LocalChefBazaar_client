import React from 'react';
import MenuItem from '../../../components/DashBoard/Sidebar/MenuItem/MenuItem';
import { FaRegRectangleList } from "react-icons/fa6";
import { MdNoMeals } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";

const ChefMenu = () => {
    return (
        <div>
            <MenuItem
                icon={MdNoMeals}
                label='Create Meals'
                address='/dashboard/createMeals'
              />
             <MenuItem
                icon={MdRestaurantMenu }
                label='My Meals'
                address='/dashboard/myMeals'
              />
             <MenuItem
                icon={FaRegRectangleList}
                label='Orders'
                address='/dashboard/myOrders'
              />
        </div>
    );
};

export default ChefMenu;