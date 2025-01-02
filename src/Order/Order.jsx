import React, { useState } from 'react';
import Cover from '../SharedStyle/Cover/Cover';
import orderImg from '../../src/assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../Component/Hooks/useMenu';

import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Order = () => {
    const categories =['salad','pizza','soup','dessert','drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category.toLowerCase())
   

    const [tabIndex,setTabIndex] = useState(initialIndex)
    const [menu]  = useMenu()
  
    
   
   
    const desserts = menu.filter(item => item.category === 'dessert');

    const soup = menu.filter(item=>item.category === 'soup')
    const pizza = menu.filter(item=>item.category === 'pizza')
    const salad = menu.filter(item=>item.category === 'salad')
    const drinks = menu.filter(item=>item.category === 'drinks')
    return (
        <div>
          <Helmet>
            <title>Bistro Boss || Order</title>
          </Helmet>
            <Cover img={orderImg} title="order food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>dessert</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
    <OrderTab items={salad}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={pizza}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={soup}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={desserts}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={drinks}></OrderTab>
  </TabPanel>
</Tabs>
        </div>
    );
};

export default Order;