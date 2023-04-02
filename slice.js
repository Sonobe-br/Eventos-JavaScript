//ARRAY - MÉTODO SLICE - MATRIZ FATIADA 
//ARRAY - MÉTODO SORT - MATRIZ ORDENADA EM ORDEM ALFABÉTICA PARA STRINGS
//ARRAY - MÉTODO REVERCE - MATRIZ ORDENADA DE TRÁS PARA FRENTE 
/* const listaDeProdutos = [
    "Engrenagem motor  00",
    "Engrenagem motor  01",
    "Engrenagem motor  02",
    "Engrenagem motor  03",
    "Correia motor     04",
    "Correia motor     04",
    "Correia motor     06",
    "Correia motor     07",
    "Cambio carro      08",
    "Cambio carro      09",
    "Cambio carro      10",
    "Cambio carro      11",
    "Disco de Freio    12",
    "Disco de Freio    13",
    "Disco de Freio    14",
    "Disco de Freio    15"
];
const correiasDentadas = listaDeProdutos.slice(4, 8);
const odernandoMatriz = listaDeProdutos.sort();
odernandoMatriz.sort();
odernandoMatriz.reverse();
document.getElementById("texto").innerHTML = odernandoMatriz;
 */

//FUNÇÃO PARA ORDENAÇÃO NÚMERICA
/* const listagemPorCodigos = [
    10002,
    90022,
    20043,
    70452,
    51090,
    29002,
    10972
];

listagemPorCodigos.sort(function(a, b) { 
    return a - b
});  
document.getElementById("texto").innerHTML = listagemPorCodigos; */

//FUNÇÃO PARA CAPTURAR O MAIOR NÚMERO
/* const listagemPorCodigos = [
    10002,
    90022,
    20043,
    70452,
    51090,
    29002,
    10972
];

function capturandoMaiorNumero (array) {
    return Math.max.apply(null, array);
}

function capturandoMenorNumero (array) {
    return Math.min.apply(null, array);
}

document.getElementById("texto").innerHTML = capturandoMenorNumero(listagemPorCodigos);
 */

//FUNÇÃO PARA FILTRAR UMA LISTA DE MATRIZ
const listagemPorCodigos = [
    10002,
    90022,
    20043,
    70452,
    51090,
    29002,
    10972
];
const MaiorQue20000 = listagemPorCodigos.filter(filtragem) 
document.getElementById("teste").innerHTML = MaiorQue20000;

function filtragem (value, index, array) {
    return value > 20000;
}
