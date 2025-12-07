import { ChefHat } from 'lucide-react';
import React from 'react';

const Logo = () => {
    return (
        <div className='flex items-center gap-2'>
             <ChefHat color='#ff6900' strokeWidth={3} size={40} />
             <h3 className='text=xl md:text-2xl font-bold'>LocalChef<span className='text-primary'>Bazaar</span></h3>
        </div>
    );
};

export default Logo;