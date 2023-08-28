"use client"
import { AchaMenorCaminho } from "@/Dijkistra";
import { cachorros } from "@/data";
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import styles from "./page.module.css";

type breed = {
    nome: string;
    imageURL: string;
}

export default function App() {
    const searchParams = useSearchParams()

    const breedsSelectedQuery = searchParams.get("breedsSelected");

    const [breedsSelected, setBreedsSelected] = useState<breed[]>();
    const [distancia, setDistance] = useState<number>(Number.MAX_VALUE);
    const [points, setPoints] = useState<string[]>(["", ""]);
    const [connectionPoints, setConnectionPoints] = useState<number[]>([])

    useEffect(() => {
        if (breedsSelectedQuery) {
            const selection = breedsSelectedQuery.split("-")
            const origem: number = parseInt(selection[0]);
            const destino: number = parseInt(selection[1]);
            const caminho = AchaMenorCaminho(origem, destino);
            const breedsFiltered: breed[] = [];

            if (caminho.pontos.length > 0) {
                const pontos = caminho.pontos
                for (let i = 0; i < pontos.length; i++) {
                    const breedData = cachorros[pontos[i]].dados
                    // setConnectionPoints([...connectionPoints, pontos[i]])
                    breedsFiltered.push(breedData)
                }
                setConnectionPoints(caminho.distancias)
                setBreedsSelected(breedsFiltered)
                // setDistance(caminho.distancia)
                setDistance(Math.round(caminho.distancia * 100) / 100)
            }

            setPoints([caminho.origem, caminho.destino])
        }
    }, [])
    return (
        <div>
            <h2 id={styles.header__title}>Menor caminho {distancia}</h2>

            <div
                className={styles.breed__path}>
                {breedsSelected ? breedsSelected.map((breed, index) => (
                    <div className={styles.breed__node__container}>


                        <div
                            key={breed.nome}
                            className={styles.breed__node}
                        >
                            <div className={styles.breed__node__image__wrapper}>
                                <img src={breed.imageURL} alt={breed.nome} />
                            </div>
                            <p>{breed.nome}</p>
                        </div>

                        {index < breedsSelected.length - 1 && (
                            <span className={styles.edge__weight__wrapper}>
                                {connectionPoints[index]}
                            </span>
                        )}
                    </div>
                )) : <p>Não há caminho disponível entre {points[0]} e {points[1]}</p>}
            </div>
        </div>
    )
}