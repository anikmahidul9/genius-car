import React, { useEffect, useState } from "react";
import "./Review.css"
import { Swiper, SwiperSlide } from "swiper/react";
import quote from '../../../assets/icons/quote.svg'
import { FaStar } from 'react-icons/fa';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function Review() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("customer.json")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <section className="review container">
      <h2 className="text-center text-orange-600 text-bold text-2xl mb-2">Customer Review</h2>
      <h1 className="text-center text-4xl font-bold">What customer says</h1>
      <p className="text-center text-slate-400 mb-12">the majority have suffered alteration in some form, by injected humour,<br/> or randomised words which don't look even slightly believable. </p>
      <Swiper className="review_container"
       loop={true}
       grabCursor={true}
       spaceBetween={24}
       pagination={{
         clickable: true,
       }}
       breakpoints={{
         576: {
           slidesPerView: 2,
         },
         768: {
           slidesPerView: 2,
           spaceBetween: 48,
         },
       }}
       modules={[Pagination]}
      >
        {users.map((user) =>{
          return (
            <>
            <SwiperSlide className="review_card mb-8">
              <div className="flex justify-between">
              <div className="flex justify-start text-2xl mb-2">
              <img className="w-16 h-16 rounded-full mr-4" src={user.picture_url} alt={user.name} />
              <h3>{user.name}</h3>
              </div>
              <img className="w-6" src={quote} alt="Quote" />
              </div>
              <p className="text-slate-400 mb-4">{user.review}</p>
              <div className="text-orange-600 flex justify-start">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              </div>
            </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </section>
  );
}
