import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../../src/assets/home/slide1.jpg'
import img2 from '../../src/assets/home/slide2.jpg'
import img3 from '../../src/assets/home/slide3.jpg'
import img4 from '../../src/assets/home/slide4.jpg'
import img5 from '../../src/assets/home/slide5.jpg'
import SectionTitle from '../SharedStyle/SectionTitle';
// import img1 from '../../src/assets/home/slide1.jpg'
            

const Category = () => {
  return(
       <section>
        <SectionTitle 
    subheading="---From 11:00am to 10:00pm---" 
    heading="ORDER ONLINE" 
/>
        
         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <h1 className='text-white text-4xl -mt-16 uppercase text-center'>Salad</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img2} alt="" />
        <h1 className='text-white text-4xl -mt-16 uppercase text-center'>PIZZA</h1>
       
        </SwiperSlide>
        <SwiperSlide>
        <img src={img3} alt="" />
        <h1 className='text-white text-4xl -mt-16 uppercase text-center'>SOUP</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img4} alt="" />
        <h1 className='text-white text-4xl -mt-16 uppercase text-center'>DESERT</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img5} alt="" />
        <h1 className='text-white text-4xl -mt-16 uppercase text-center'>Salad</h1>
        </SwiperSlide>
      
        {/* <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
       </section>
    );
};

export default Category;