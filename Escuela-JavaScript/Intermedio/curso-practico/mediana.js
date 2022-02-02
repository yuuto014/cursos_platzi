const lista = [
    100, 200, 500, 400000000
]

function esPar (numero){
    return  numero % 2 === 0 ? true : false;
}

function calcularMediana(lista){
    let mediana;
    let listaOrdenada = ordenarLista(lista);
    let mitadLista = parseInt(listaOrdenada.length/2);
    console.log(mitadLista)

    if(esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadLista-1];
        const elemento2 = listaOrdenada[mitadLista];

        const promedioElementosLista = calcularMediaAritmetica([elemento1, elemento2]);

        mediana = promedioElementosLista;
    } 
    else{
        mediana = listaOrdenada[mitadLista];
    }
    return mediana;
}

function ordenarLista(lista){
    function compareNumbers(a,b){
        return a- b;
    }
    return lista.sort(compareNumbers);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
