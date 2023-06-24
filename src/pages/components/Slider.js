'use client';
import Link from "next/link"
import Image from "next/image"
import styles from '../../styles/slider.module.css'
import carro1 from "./../../../public/images/imagem1.png"
import carro2 from "./../../../public/images/imagem2.png"
import carro3 from "./../../../public/images/imagem3.png"
import carro4 from "./../../../public/images/imagem4.png"
import carro5 from "./../../../public/images/imagem5.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';



export default function Slider(){
    //const slides = [carro1, carro2, carro3, carro4, carro5];
    return(
        <div className="container w-full lg:h-[455px]">
            {/* <Swiper
                 modules={[Navigation, Pagination]}
                 navigation
                 pagination
                 loop
                >
                <SwiperSlide>
                    <div>
                        <img
                        src={'/images/imagem1.png'}
                        alt="carro1"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img
                        src={'/images/imagem2.png'}
                        alt="carro2"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img
                        src={'/images/imagem3.png'}
                        alt="carro3"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img
                        src={'/images/imagem4.png'}
                        alt="carro4"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img
                        src={'/images/imagem5.png'}
                        alt="carro5"
                        />
                    </div>
                </SwiperSlide>
            </Swiper> */}
        </div>
    )
}