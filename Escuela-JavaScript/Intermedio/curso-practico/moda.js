const lista = [
    1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1
];



function calcularModa(lista){
    const listCount = {};

    //crear un objeto donde tenga el numero y la cantidad de veces que se repite
    lista.map( function(elemento){
            if(listCount[elemento]){
                listCount[elemento] += 1;
            }else{
                listCount[elemento] = 1;
            }
        }
    );
    
    //crear una lista ordenada donde se ordene el objeto anterior de mayor a menor
    const listaOrdenada = Object.entries(listCount).sort(
        function(elementoA, elementoB){
            return elementoB[1] - elementoA[1];
    });

    moda = listaOrdenada[0]; 

    return console.log("El numero que mas se repite es: " + moda[0] +" un total de: " + moda[1] + " veces.") ;
}