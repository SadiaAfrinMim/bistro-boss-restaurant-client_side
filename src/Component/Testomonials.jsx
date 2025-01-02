import React, { useEffect, useState } from 'react';
import SectionTitle from '../SharedStyle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testomonials = () => {
    const [reviews,serReviews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>serReviews(data))},
            [])
    return (
        <div>
            <SectionTitle
            heading={'Testimonials'}
            subheading={'What our client say!'}></SectionTitle>
            <div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
               
        
        {
            reviews.map(review => <SwiperSlide key={review._id} >
                <div className='flex flex-col items-center my-16 mx-32'>
                <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      
      isDisabled
    />
                    <p className='py-8'>{review.details}</p>
                    <h3 className='text-yellow-500'>{review.name}</h3>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
            </div>
            
        </div>
    );
};

export default Testomonials;