import React from 'react';
import SectionTitle from '../../SharedStyle/SectionTitle';
import FeatureImg from '../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed pt-10 my-20'>
            <SectionTitle subheading={'cheak it out'} heading={'from our menu'}></SectionTitle>
            <div className='md:flex bg-slate-500 items-center justify-center bg-opacity-60 pb-20 py-12 px-36'>
                <div>
                    <img src={FeatureImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20 , 2025</p>
                    <p className='uppercase'>where can i get some</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto illum facere nobis totam quaerat, sunt, illo autem eligendi facilis dicta aspernatur nostrum ex nisi fugit iure enim, dolor odit assumenda velit possimus error explicabo nam molestiae a? Sapiente dolor, dolore ipsa facilis placeat laudantium vel asperiores suscipit mollitia temporibus libero accusantium ullam excepturi reiciendis blanditiis itaque cupiditate nisi laboriosam. Ut?</p>
                    <button className="btn border-0 border-b-4 btn-outline">read more</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;