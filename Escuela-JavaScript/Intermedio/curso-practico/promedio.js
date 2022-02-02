const lista = [
    100,200,300,500
];

let sumaLista  = 0;

function calcularMediaAritmetica(lista){
    // let sumaLista  = 0;
    // for(let i = 0; i < lista.length ; i++){
    //     sumaLista += lista[i];
    // }

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Media geometria
//El uso de la media geométrica normaliza los valores de rango diferente

function calcularMediaAritmetica(lista){
    // let sumaLista  = 0;
    // for(let i = 0; i < lista.length ; i++){
    //     sumaLista += lista[i];
    // }

    let sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    let promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function calcularMediaFeometrica(lista){
    let sumaLista = lista.reduce( function( valorAcumulado=0, nuevoElemento){
        return valorAcumulado * nuevoElemento;
    });

    let promedioLista = Math.pow(sumaLista, (1/lista.length));
    return promedioLista;
}