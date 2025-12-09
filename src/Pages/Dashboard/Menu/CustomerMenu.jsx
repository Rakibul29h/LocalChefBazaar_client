import { Heart, MessageSquare, ShoppingBag } from 'lucide-react';
import React from 'react';
import MenuItem from '../../../components/DashBoard/Sidebar/MenuItem/MenuItem';

const CustomerMenu = () => {
    return (
        <div>
             <MenuItem
                icon={ShoppingBag}
                label='My Orders'
                address='/dashboard/myOrders'
              />
             <MenuItem
                icon={MessageSquare}
                label='My Reviews'
                address='/dashboard/myReviews'
              />
             <MenuItem
                icon={Heart}
                label='Favorite Meals'
                address='/dashboard/favorite'
              />
        </div>
    );
};

export default CustomerMenu;