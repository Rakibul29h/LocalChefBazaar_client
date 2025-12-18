import React from 'react';
import MenuItem from '../../../components/DashBoard/Sidebar/MenuItem/MenuItem';
import { FaRegRectangleList } from "react-icons/fa6";
import { MdNoMeals } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";

const ChefMenu = ({setActive}) => {
    return (
        <div>
            <MenuItem
                icon={MdNoMeals}
                label='Create Meals'
                address='/dashboard/createMeals'
                 onClick={()=>setActive(false)}
              />
             <MenuItem
                icon={MdRestaurantMenu }
                label='My Meals'
                address='/dashboard/myMeals'
                 onClick={()=>setActive(false)}
              />
             <MenuItem
                icon={FaRegRectangleList}
                label='Order Requests'
                address='/dashboard/orders'
                 onClick={()=>setActive(false)}
              />
        </div>
    );
};

export default ChefMenu;