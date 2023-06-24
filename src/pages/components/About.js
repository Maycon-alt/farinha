import Link from "next/link"
import Image from "next/image"

export default function About(){
    return(
        <div id="historia" className="bg-gray-600 w-full lg:h-[850px] bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px] pl-[50px] pr-[50px]">
            <h2 className="font-mono text-center text-5xl font-medium mt-2 pb-[100px]">Nossa Empresa</h2>
            {/* <h2 className="text- center text-4xl font-medium mt-2">Quem Somos</h2> */}
            <div className="bg-red-300  flex itens-start justify-between flex-col-reverse lg:flex-row">
                <div className="bg-green-400 w-full lg:max-w-[530px] sm:pt-10 sm:text-center lg:text-left lg:pr-10 xl:pl-25">
                    <p className="font-mono text-red-700">Olá, bem vindo a</p>
                    <h2 className="text-4xl font-medium mt-2">AutoElite</h2>

                    <p className="font-mono text-red-700 my-6 text-sm sm:text-base text-justify">A escolha premium em carros de luxo. Oferecemos uma experiência excepcional de compra, com veículos de qualidade, marcas renomadas e modelos prestigiosos. Nossa equipe qualificada está pronta para atender às suas necessidades e oferecer suporte pós-venda. Visite-nos e descubra o mundo da elegância automotiva.</p>
                </div>
                <div>
                    <Image className="bg-slate-300 rounded-2xl w-full h-full" width={800} height={800} src="/images/ngc.jpg" alt="foto carro"/>
                </div>
            </div>
        </div>
    )
}