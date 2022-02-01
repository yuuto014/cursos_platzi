//

// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100; 

    return precioConDescuento;
}



// console.log(`El precio original es: $${precioOriginal} y con el descuento de ${descuento}% quedaria en: $${precioConDescuento}`);

function priceDiscount(){
    let price = document.getElementById("input-price").value;
    let discount = document.getElementById("input-discount").value;

    let finalPrice = calcularPrecioConDescuento(price,discount);

    document.getElementById("resultado-precio").innerHTML = "El precio con descuento es: $" + finalPrice;
}

function useCoupon(){
    let price = document.getElementById("input-price").value;


    let coupon = prompt("Digite el Cupon de descuento: ");

    let discount;

    switch(coupon){
        case "holaMundo!":
            discount = 10;
            break;
        case "platzi":
            discount = 35;
            break;
        case "secretSanta99":
            discount = 50;
            break
        case "__none__":
            discount = 90;
            break
        default:
            discount = 0;
            alert("El cupon ingresado no es valido");
    }

    let finalPrice = calcularPrecioConDescuento(price,discount);

    document.getElementById("resultado-precio").innerHTML = "Descuneto de: " + discount + "% valor de con descuento de: $" + finalPrice;
}