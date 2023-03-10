import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/mohamed1.jpg';
import AVTR2 from '../../assets/325012683_1019658545610228_2380154168291978017_n.jpg';
import AVTR3 from '../../assets/mohamed.png';
import AVTR4 from '../../assets/mohamed1.jpg';
import Slide from 'react-reveal/Slide';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

const Testimonials = () => {
  const data = [
    {
      avatar: AVTR1,
      name: 'Mohamed Ramadan',
      review:
        'Engineer Muhammad Ramadan is meticulous in his work and meticulous in his work .He is regular in his appointments and has great experience in managing projects and solving problems',
    },
    {
      avatar: AVTR2,
      name: 'Mohamed Ramadan',
      review:
        'Engineer Muhammad Ramadan is meticulous in his work and meticulous in his work . He is regular in his appointments and has great experience in managing projects and solving problems',
    },
    {
      avatar: AVTR3,
      name: 'Mohamed Ramadan',
      review:
        'Engineer Muhammad Ramadan is meticulous in his work and meticulous in his work .He is regular in his appointments and has great experience in managing projects and solving problems',
    },
    {
      avatar: AVTR4,
      name: 'Mohamed Ramadan',
      review:
        'Engineer Muhammad Ramadan is meticulous in his work and meticulous in his work .He is regular in his appointments and has great experience in managing projects and solving problems',
    },
  ];
  return (
    <section id="testimonials">
      <Slide left>
        <h5>Review from clients</h5>
      </Slide>
      <Slide left>
        <h2>Testimonials</h2>
      </Slide>
      <Slide right>
        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="container testimonials___container"
        >
          {data.map((data, index) => {
            return (
              <SwiperSlide className="testimonials" key={index}>
                <div className="client___avatar">
                  <img src={data.avatar} alt="" />
                </div>
                <h5 className="client___name">{data.name}</h5>
                <small className="client___review">{data.review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Slide>
    </section>
  );
};

export default Testimonials;
