import React, { useEffect, useState } from 'react';
import SectionTitle from '../SharedStyle/SectionTitle';
import Menuitem from '../SharedStyle/Menuitem/Menuitem';

const PopularMenu = () => {
    const [menu,setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItem = data.filter(item =>item.category === 'popular')
            setMenu(popularItem)
        })
    },[])

    return (

        <div className='mb-12'>
            <SectionTitle
            heading={'FROM OUR MENU'}
            subheading={'Check it out'}></SectionTitle>
            <div className=' grid md:grid-cols-2 gap-10'>
               {
                menu.map(item=><Menuitem
                key={item._id} item={item}></Menuitem>)
               }
            </div>
            
        </div>
    );
};

export default PopularMenu;