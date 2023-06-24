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
        <div id="historia" className="bg-blue-400 w-full lg:h-[900px] bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px] pl-[50px] pr-[50px]">
            <h2 className="font-mono text-center text-5xl font-medium mt-2 pb-[50px]">Nossa Empresa</h2>
            {/* <h2 className="text- center text-4xl font-medium mt-2">Quem Somos</h2> */}
            <div className="container flex itens-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px] lg:pr-[100px] sm:pt-10 sm:text-center lg:text-left">
                    <p className="font-mono text-red-700">Olá, bem vindo a</p>
                    <h2 className="text-4xl font-medium mt-2">AutoElite</h2>

                    <p className="font-mono text-red-700 my-6 text-sm sm:text-base text-justify">A escolha premium em carros de luxo. Oferecemos uma experiência excepcional de compra, com veículos de qualidade, marcas renomadas e modelos prestigiosos. Nossa equipe qualificada está pronta para atender às suas necessidades e oferecer suporte pós-venda. Visite-nos e descubra o mundo da elegância automotiva.</p>
                </div>

                <Image className="rounded-2xl" width={420} height={404} src="/images/ngc.jpg" alt="foto carro"/>
            </div>
        </div>
    )
}