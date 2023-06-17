import Link from "next/link"
import Image from "next/image"

export default function About(){
    return(
        <div className="w-full h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px] pl-[50px] pr-[50px]">
            <h2 className="text-center text-5xl font-medium mt-2 pb-[50px]">Nossa Empresa</h2>
            {/* <h2 className="text- center text-4xl font-medium mt-2">Quem Somos</h2> */}
            <div className="container flex itens-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px] pr-[100px]">
                    <p className="font-mono text-red-700">Olá, bem vindo a</p>
                    <h2 className="text-4xl font-medium mt-2">AutoElite</h2>

                    <p className="font-mono text-red-700 my-6 text-sm sm:text-base">A escolha premium em carros de luxo. Oferecemos uma experiência excepcional de compra, com veículos de qualidade, marcas renomadas e modelos prestigiosos. Nossa equipe qualificada está pronta para atender às suas necessidades e oferecer suporte pós-venda. Visite-nos e descubra o mundo da elegância automotiva.</p>
                </div>

                <Image className="rounded-2xl" width={420} height={404} src="/images/imagem1.png" alt="foto carro"/>
            </div>
        </div>
    )
}