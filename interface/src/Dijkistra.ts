import { cachorros } from "./data";
import { Fila } from "./filaPrioritaria";

export type Vertice = [
    ponto: number,
    distance: number
]

export type Info = {
    pontos: number[],
    distancias: number[]
    distancia: number,
    origem: string,
    destino: string,
}

export function AchaMenorCaminho(origem: number, destino: number): Info {
    const grafo = cachorros
    const size = grafo.length

    // Initialização
    const visitados = Array(size).fill(false);
    const distancias = Array(size).fill(Number.MAX_VALUE);
    const antecessores = Array(size).fill(null);
    const fila =  new Fila();

    // Tratamento de erro 
    const erroMensagem = {
        pontos: [],
        distancias: [],
        distancia: Number.MAX_VALUE,
        origem: cachorros[origem].dados.nome,
        destino: cachorros[destino].dados.nome,
    }

    // Zerndo a distancia da origem e o colando na fila
    distancias[origem] = 0;
    fila.add([origem, distancias[origem]]);

    while(fila.length() > 0){
        const vertice_atual = fila.pop();
        if (vertice_atual == undefined) return erroMensagem

        const v_i =  vertice_atual[0];
        const v_dist =  vertice_atual[1];

        // Se o nó já foi visitado pode continuar com a iteração
        if(visitados[v_i]) continue;

        visitados[v_i] = true;
        
        // Chegou no destino 
        if(v_i == destino) {
            const caminhoEncontrado = constroiCaminho(antecessores, destino);

            return {
                pontos: caminhoEncontrado.pontos,
                distancias: caminhoEncontrado.pesos,
                distancia: distancias[destino],
                origem: cachorros[origem].dados.nome,
                destino: cachorros[destino].dados.nome
            }
        }

        // Atualiza a distância dos vizinhos e os colocam na fila
        grafo[v_i].arestas.forEach(vizinho => {
            const vizinho_i = vizinho.ponto
            const vizinho_dist = vizinho.peso
            const distancia = v_dist + vizinho_dist

            if(distancia < distancias[vizinho_i]) {
                distancias[vizinho_i] = distancia;
                antecessores[vizinho_i] = v_i;
                fila.add([vizinho_i, distancia])
            }
            
        })
    }
    return erroMensagem
}


function constroiCaminho(antecessores: number[], destino: number) {
    const pontos: number[] = [];
    const pesos: number[] = [];
    const caminho: {
        pontos: number[],
        pesos: number[]
    } = {pontos: [], pesos: []}
    let vertice = destino;

    while (vertice !== null) {
        let last = vertice
        pontos.unshift(vertice);
        vertice = antecessores[vertice];
        if(vertice  === null || last === null) continue

        const peso = cachorros[last].arestas.filter(ponto => ponto.ponto == vertice)[0].peso
        pesos.unshift(peso)
    }

    caminho.pontos = pontos
    caminho.pesos = pesos

    return caminho
}