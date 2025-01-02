import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../SharedStyle/Cover/Cover';
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import MenuImg from '../../assets/menu/banner3.jpg'
import PopularMenu from '../../Component/PopularMenu';
import useMenu from '../../Component/Hooks/useMenu';
import SectionTitle from '../../SharedStyle/SectionTitle';
import MenuCategory from '../../SharedStyle/MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu()
  
const desserts = menu.filter(item => item.category === 'dessert');

    const soup = menu.filter(item=>item.category === 'soup')
    const pizza = menu.filter(item=>item.category === 'pizza')
    const salad = menu.filter(item=>item.category === 'salad')
    const offered = menu.filter(item=>item.category === 'offered')
   
    
    

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            {/* cover img */}
            <Cover img={MenuImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>
            <SectionTitle
            heading={"Today's offer"}
            subheading={"Don't Miss"}
            ></SectionTitle>
            {/* offered menu categories */}
            <MenuCategory  items={offered} title={"offer"} img={dessertImg}></MenuCategory>

            {/* dessert menu category */}
            <MenuCategory items={desserts} title={"Dessert"} img={dessertImg}></MenuCategory>
            {/* pizza menu category */}
            <MenuCategory items={pizza} title={"Pizza"} img={pizzaImg}></MenuCategory>
            
        </div>
    );
};

export default Menu;