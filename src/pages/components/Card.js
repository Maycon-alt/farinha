'use client'
import styles from '../../styles/Card.module.css'
import Image from 'next/image'


export default function Card({product}){
    return(
        
      <div>
          <div className={styles.card}>
              <img className="h-auto max-w-full rounded-lg" src={product.img}
                alt={product.nome}/>
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-center">
                    {product.nome}
                  </p>
                  <br />
                  <p className="text-center">
                    {product.preco}
                  </p>
                  <br />
                    <p className="break-normal">
                      {product.descricao}
                    </p>
              </div>
          </div>
      </div>

    )
}