import React, { useEffect, useState } from 'react';
import SectionTitle from '../SharedStyle/SectionTitle';

import MenuItem from '../Pages/MenuItem/MenuItem';
import useMenu from './Hooks/useMenu';


const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item=>item.category === 'popular')
   

    return (

        <div className='mb-12'>
            <SectionTitle
            heading={'FROM OUR MENU'}
            subheading={'Check it out'}></SectionTitle>
            <div className=' grid md:grid-cols-2 gap-10'>
               {
               popular.map(item=><MenuItem
                key={item._id} item={item}></MenuItem>)
               }
            </div>
            
        </div>
    );
};

export default PopularMenu;