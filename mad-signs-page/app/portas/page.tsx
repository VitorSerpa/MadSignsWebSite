"use client"
import style from "./App.module.css";
import Header from "../components/sections/Header";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Page() {
  return (
    <div>
      <Header></Header>

      <div className={style.portas_carousel}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop
        >
          <SwiperSlide>
            <img src="/images/portaACM1.jpeg" alt="Porta 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/portaACM4.jpeg" alt="Porta 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/portaACM5.jpeg" alt="Porta 5" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/portaACM2.jpeg" alt="Porta 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/portaACM3.jpeg" alt="Porta 3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
