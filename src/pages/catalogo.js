'use client'
import Link from "next/link"
import Image from "next/image"
import Card from "./components/Card"
import { useEffect, useState } from "react"

import styles from '../styles/catalogo.module.css'


export default function Catalogo(){

    const [data, setData] = useState(null);

    useEffect(() => {
        async function DataCarros(){

            const res = await fetch('https://apitrainees.herokuapp.com/carros')
            const data = await res.json()

            setData(data)

        }
        DataCarros()
    },[])
// console.log(data)
    return(
        <div className={`dark:bg-white ${styles.container}`}>
            <div>
                <h1 className="text-center text-2xl font-semibold tracking-tight text-gray-900 dark:text-black">CATÁLOGO</h1>
                {/* <Link href="/">
                    <h3 className="text-center">voltar</h3>
                </Link> */}
            </div>
            <div className={styles.card_container}>
                {data != null && data.map((product) => (
                <div key={product.nome}>
                    {/* <Card key={product.nome} product={product}/> */}
                </div>
            ))}
            </div>
        </div>
    )
}