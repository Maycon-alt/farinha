import Link from "next/link"
import Image from "next/image"

export default function Services(){
    return(
        <div id="servicos" className="bg-red-400 pl-[100px] pr-[100px] pb-[100px]">
            <h2 className="font-mono text-center text-5xl font-medium mt-2 pb-[50px]">Nossos Serviços</h2>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-black">Encontre o carro dos seus sonhos e escreva sua próxima história de aventura nas estradas.</time>
                <h3 className="text-lg font-semibold text-black">Venda de carros novos e usados</h3>
                <p className="mb-4 text-base font-mono text-red-700">A empresa pode oferecer uma seleção de carros novos de diferentes marcas e modelos, bem como veículos usados em bom estado.</p>
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Saiba mais<svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
            </li>
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-black">Realize seu sonho de dirigir um carro novo hoje mesmo, com opções de financiamento e leasing flexíveis para se adequar ao seu estilo de vida.</time>
                <h3 className="text-lg font-semibold text-black">Financiamento e leasing:</h3>
                <p className="text-base font-mono text-red-700">Muitas empresas de carros oferecem opções de financiamento para ajudar os clientes a adquirir veículos. O leasing também pode ser uma opção, permitindo que os clientes aluguem um carro por um período específico.</p>
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Saiba mais<svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
            </li>
            <li className="ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-black">Confie seus cuidados automotivos a nós, onde expertise e atenção aos detalhes se encontram para manter seu carro em excelente estado.</time>
                <h3 className="text-lg font-semibold text-black">Serviço de manutenção e reparo:</h3>
                <p className="text-base font-mono text-red-700">Oferecer serviços de manutenção e reparo é fundamental para manter os veículos em bom estado. Isso pode incluir troca de óleo, revisões periódicas, reparos mecânicos, substituição de peças e serviços de pneus.</p>
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Saiba mais<svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
            </li>
            
        </ol>

        </div>
    )
}