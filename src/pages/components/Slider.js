import Link from "next/link"
import Image from "next/image"
import carro1 from "./../../../public/images/imagem1.png"
import carro2 from "./../../../public/images/imagem2.png"
import carro3 from "./../../../public/images/imagem3.png"
import carro4 from "./../../../public/images/imagem4.png"
import carro5 from "./../../../public/images/imagem5.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
//import 'swiper/css/pagination';
import { useState } from "react"

const Allcarros = [
    {id: 'car1', value: './../../../public/images/imagem1.png'},
    {id: 'car2', value: 'carro2'},
    {id: 'car3', value: 'carro3'},
    {id: 'car4', value: 'carro4'},
]

export default function Slider(){
    //const slides = [carro1, carro2, carro3, carro4, carro5];
    return(
         <div className="w-full lg:h-[755px] justify-end pt-[200px] sm:pb-32 py-32 lg:pb-[110px] container">
            <Swiper
                 modules={[Navigation, Pagination]}
                 navigation
                 pagination
                 loop
             >
                {Allcarros.map(slide => (
                     <SwiperSlide>
                        <img src={...slide} key={Allcarros.id} />
                    </SwiperSlide>
                ))}
                
             </Swiper>
        </div>
    )
}