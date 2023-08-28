"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { cachorros } from '../data'
import DogsGrid from '../Components/DogsGrid/DogsGrid'
import { useState } from 'react'
import { useRouter } from "next/navigation"
import { X, PawPrint } from "@phosphor-icons/react"

export default function Home() {
  const [breedsSelected, setBreedsSelected] = useState<number[]>([]);
  const router = useRouter()

  function handleBreedSelection(selecteds: number[]) {
    setBreedsSelected(selecteds);
  }

  function removeBreedSelecton(id: number) {
    setBreedsSelected(breedsSelected.filter(breed => breed != id))
  }
  return (
    <main className={styles.main}>

      {/* Header  */}
      <div className={styles.header}>
        <p>Selecione duas raças</p>
      </div>

      <DogsGrid selectBreed={handleBreedSelection} breedsSelected={breedsSelected} />

      <div className={styles.ready__button__container}>
        <div className={styles.breeds__selected__container}>
          {cachorros.map((breed, id) => (
            <>
              {breedsSelected.includes(id) && (
                <button
                  className={styles.breed__selected}
                  onClick={() => removeBreedSelecton(id)}
                >
                  <span>{breed.dados.nome}</span>
                  <X size={18} />
                </button>
              )
              }

            </>
          ))}
        </div>

        <button
          onClick={() => {
            router.push(`/result?breedsSelected=${breedsSelected.join("-")}`)
            console.log(breedsSelected.join(""))
          }}
          className={styles.ready__button}>
          Pronto <PawPrint size={24} weight='fill' />
        </button>
      </div>
    </main >
  )
}
