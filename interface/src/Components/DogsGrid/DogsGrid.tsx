"use client"
import { cachorros } from "@/data";
import style from "./style.module.css";
import { useEffect, useState } from "react";


interface IDogsGrid {
    selectBreed: (id: number[]) => void;
    breedsSelected: number[]
}

export default function DogsGrid({ selectBreed, breedsSelected }: IDogsGrid) {
    const [selectedButton, setSelectedButton] = useState<number[]>([]);

    useEffect(() => {
        setSelectedButton(breedsSelected)
    }, [breedsSelected])

    function handleSelection(id: number) {
        let currSelected = selectedButton

        if (selectedButton.includes(id)) {
            const index = currSelected.indexOf(id);
            currSelected = currSelected.filter((value, i) => i != index)
            console.log(index)
        } else {
            if (selectedButton.length > 1) return
            currSelected = [...currSelected, id];
        }
        setSelectedButton(currSelected)
        selectBreed(currSelected)

    }
    return (
        <div className={style.dogs__grid}>
            {cachorros.map((cachorro, id) => (
                <button
                    onClick={() => handleSelection(id)}
                    key={id}
                    className={selectedButton.includes(id) ? style.selected__button : style.dogs__button}>
                    {cachorro.dados.nome}
                </button>
            ))
            }

        </div >
    )
}