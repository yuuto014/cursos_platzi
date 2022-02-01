//codigo del cuadrado

console.group("Cudrado")

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado*4;
} 
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

//codigo del triangulo

console.group("Triangulo")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("Los lados del triangulo miden miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");
// console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2 ;
}
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();


//codigo del circulo
console.group("Circulos");

// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

function diametroCirculo(radio){
    return radio *2;
} 
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

const PI = Math.PI;
// console.log("El valor de Pi es: " + PI);

function perimetroCirculo(radio){
    let diametro = diametroCirculo(radio);
    return (diametro *2) *PI;
}
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

function areaCirculo(radio) {
    return (radio*radio) *PI;
}
// console.log("El area del Circulo es: " + areaCirculo + "cm^2");

console.groupEnd();


// Aqui se interactua con el HTML

//Cuadrado

function calcularAreaCuadrado(){
    let input = document.getElementById("input-cuadrado");
    let value = input.value;

    let area = areaCuadrado(value).toFixed(2);
    // alert("El area es: " + area + "cm^2");
    document.getElementById("solucion-cuadrado").innerHTML = "El area es: " + area + "cm^2";

}

function calcularPerimetroCuadrado(){
    let input = document.getElementById("input-cuadrado");
    let value = input.value;

    let  perimetro = perimetroCuadrado(value).toFixed(2);
    // alert("El perimetro es: " + perimetro + "cm");
    document.getElementById("solucion-cuadrado").innerHTML = "El perimetro es: " + perimetro + "cm";
}

// Triangulo 

function calcularPerimetroTriangulo(){
    let lado1 = document.getElementById("input-lado1").value;
    let lado2 = document.getElementById("input-lado2").value;
    let base = document.getElementById("input-base").value;

    let perimetro = perimetroTriangulo(lado1, lado2, base);
    // alert("El perimetro es: " + perimetro + "cm");
    document.getElementById("solucion-triangulo").innerHTML = "El perimetro es: " + perimetro + "cm";

}

function calcularAreaTriangulo(){
    let altura = document.getElementById("input-altura").value;
    let base = document.getElementById("input-base").value;

    let area = areaTriangulo(base, altura).toFixed(2);
    // alert("El Area es: " + area + "cm^2");
    document.getElementById("solucion-triangulo").innerHTML = "El Area es: " + area + "cm^2";

}
function calcularAlturaTriangulo(){
    let lado1 = document.getElementById("input-lado1").value;
    let lado2 = document.getElementById("input-lado2").value;
    let base = document.getElementById("input-base").value;

    if(lado1 == lado2){
        let alto = Math.sqrt(lado1*lado2 - ((base*base)/4)).toFixed(2)
        document.getElementById("solucion-triangulo").innerHTML = "El alto del triangulo es: " + alto + "cm";
    }
    else{
        document.getElementById("solucion-triangulo").innerHTML = "no es un triangulo isoseles";
    }
}


//Circulo

function calcularPerimetroCirculo(){
    let radio = document.getElementById("input-radio").value;

    let perimetro = perimetroCirculo(radio).toFixed(2);
    alert("El perimetro es: " + perimetro + "cm");
    document.getElementById("solucion-circulo").innerHTML = "El perimetro es: " + perimetro + "cm";

}

function calcularAreaCirculo(){
    let radio = document.getElementById("input-radio").value;

    let area = areaCirculo(radio).toFixed(2);
    alert("El Area es: " + area + "cm^2");
    document.getElementById("solucion-circulo").innerHTML = "El Area es: " + area + "cm^2";

}