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
        <div id="home" className="bg-black w-full lg:h-[610px] pl-40 pt-3">
            <div className="lg:h-full lg:w-full  container">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination
                loop
            >
                <SwiperSlide>
                    <Image className="w-full h-[600px]" width={960} height={950} src="/images/imagem1.png" alt="fotocarro1"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-full h-[600px]" width={800} height={900} src="/images/imagem2.png" alt="fotocarro2"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-full h-[600px]" width={800} height={900} src="/images/imagem3.png" alt="fotocarro3"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-full h-[600px]" width={800} height={900} src="/images/imagem4.png" alt="fotocarro4"/>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}