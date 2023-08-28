import { Vertice } from "./Dijkistra"

export class Fila {
    elements: Vertice[]

    constructor() {
        this.elements = []
    }

    add(vertice: Vertice): void{
        this.elements.push(vertice);
        this.remonta_fila();
    }

    pop(): Vertice{
        const vertice = this.elements.shift();
        if(vertice == undefined) return [0,0];

        this.remonta_fila();
        return vertice;

    }

    remonta_fila(): void{
        const tam = this.elements.length;

        for(let i = Math.floor(tam / 2); i >= 0; i--) {
            this.elements = this.constroi_max_heap(this.elements, tam, i);
        }
    }

    constroi_max_heap(fila: Vertice[], tam: number, i: number): Vertice[]{
        let maior = i;
        const indice_filho_e = 2 * i + 1;
        const indice_filho_d = 2 * i + 2;

        if(indice_filho_e < tam && fila[maior][1] > fila[indice_filho_e][1]) {
            maior = indice_filho_e;
        }

        if(indice_filho_d < tam && fila[maior][1] > fila[indice_filho_d][1]) {
            maior = indice_filho_d;
        }

        if(maior != i) {
            const temp = fila[maior]
            fila[maior] = fila[i]
            fila[i] = temp
            this.constroi_max_heap(fila, tam, maior);
        }

        return fila
    }

    toString() {
        return this.elements.join(" -> ");
    }

    length() {
        return this.elements.length;
    }
}