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
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider(){
    const slides = [carro1, carro2, carro3, carro4, carro5];
    return(
        <div className="w-full h-[755px] justify-end pt-[200px] sm:pb-32 py-32 lg:pb-[110px] container">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination
                loop
            >
                {slides.map(slide => (
                    <SwiperSlide>
                        <img src={slide} alt={slides} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}