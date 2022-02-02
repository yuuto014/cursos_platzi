//lista de salarios de colombia.(solo salarios sin nombres)

let salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);


//imprimir la mediana de los salarios en colombia 

let medianaTop10Col = medianaSalarios(salarioTop10Col);

let medianaGeneralCol = medianaSalarios(salariosColSorted);

//lista de salarios ordenados 

let salariosColSorted = salariosCol.sort(
    function(a, b){
        return a -b;
    }
);

//funciones helpers/ Utils

function esPar (numero){
    return  numero % 2 === 0 ? true : false;
}

function calcularMediaAritmetica(lista){
    let sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    let promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//calculadora de mediana

function medianaSalarios(lista){
    let mitad = parseInt(lista.length / 2);

    if(esPar()){
        let personaMitad1 = lista[mitad - 1];
        let personaMitad2 = lista[mitad ];

        let mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);

        return mediana;
    }
    else{
        let personaMitad = lista[mitad];
        return personaMitad
    }

}

//calculadora del Top10 %
let spliceStart = (salariosColSorted.length * 90)/100;
let spliceCount = salariosColSorted.length- spliceStart;


let salarioTop10Col = salariosColSorted.splice(spliceStart, spliceCount);



console.log({
    medianaGeneralCol,
    medianaTop10Col
});

