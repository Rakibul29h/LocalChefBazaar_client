import { Heart, MessageSquare, ShoppingBag } from 'lucide-react';
import React from 'react';
import MenuItem from '../../../components/DashBoard/Sidebar/MenuItem/MenuItem';

const CustomerMenu = ({setActive}) => {
    return (
        <div>
             <MenuItem
                icon={ShoppingBag}
                label='My Orders'
                address='/dashboard/myOrders'
                onClick={()=>setActive(false)}
              />
             <MenuItem
                icon={MessageSquare}
                label='My Reviews'
                address='/dashboard/myReviews'
                 onClick={()=>setActive(false)}
              />
             <MenuItem
                icon={Heart}
                label='Favorite Meals'
                address='/dashboard/favorite'
                 onClick={()=>setActive(false)}
              />
        </div>
    );
};

export default CustomerMenu;