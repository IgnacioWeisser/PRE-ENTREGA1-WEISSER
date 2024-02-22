// Calculadora y convertidor de divisas


function seleccionarOpcion() {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n1. Calculadora\n2. Convertidor de divisas");
        if (opcion === '1' || opcion === '2') {
            return opcion; 
        } else {
            alert("Opción no válida. Por favor, seleccione 1 o 2.");
        }
    } while (true);
}

function iniciarPrograma() {
    let opcion = seleccionarOpcion();

    if (opcion === '1') {
        calculadora();
    } else if (opcion === '2') {
        convertirDivisas();
    }
}


function seleccionarOpcion() {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n1. Calculadora\n2. Convertidor de divisas");
        if (opcion === '1' || opcion === '2') {
            return opcion; 
        } else {
            alert("Opción no válida. Por favor, seleccione 1 o 2.");
        }
    } while (true);
}

function iniciarPrograma() {
    let opcion = seleccionarOpcion();

    if (opcion === '1') {
        calculadora();
    } else if (opcion === '2') {
        convertirDivisas();
    }
}

function convertirDivisas() {
    let continuar = true;

    while (continuar) {
        let monedaOrigen = prompt("Ingrese la moneda de origen (USD, EUR, CLP):").toUpperCase();
        let monedaDestino = prompt("Ingrese la moneda de destino (USD, EUR, CLP):").toUpperCase();
        let tasaCambio = parseFloat(prompt("Ingrese la tasa de cambio de " + monedaOrigen + " a " + monedaDestino + ":"));

        let cantidad = parseFloat(prompt("Ingrese la cantidad a convertir de " + monedaOrigen + " a " + monedaDestino + ":"));

        let resultado;
        switch (monedaOrigen) {
            case 'USD':
                resultado = cantidad * tasaCambio;
                break;
            case 'EUR':
                resultado = cantidad * tasaCambio;
                break;
            case 'CLP':
                resultado = cantidad * tasaCambio;
                break;
            default:
                resultado = "Moneda no válida";
        }

        alert('El resultado de convertir ' + cantidad + ' ' + monedaOrigen + ' a ' + monedaDestino + ' es: ' + resultado.toFixed(2));

        let opcion = prompt("¿Desea realizar otra conversión de divisas? (s/n)");
        if (opcion.toLowerCase() !== 's') {
            continuar = false;
        }
    }
}

function calculadora() {
    let continuar = true;

    while (continuar) {
        let operacion = prompt("Ingrese la operación a realizar (+, -, *, /):");

        while (operacion !== '+' && operacion !== '-' && operacion !== '*' && operacion !== '/') {
            operacion = prompt("Operación no válida. Ingrese una operación válida (+, -, *, /):");
        }

        let num1 = parseFloat(prompt("Ingrese el primer número:"));
        while (isNaN(num1)) {
            num1 = parseFloat(prompt("Número no válido. Ingrese el primer número nuevamente:"));
        }

        let num2 = parseFloat(prompt("Ingrese el segundo número:"));
        while (isNaN(num2)) {
            num2 = parseFloat(prompt("Número no válido. Ingrese el segundo número nuevamente:"));
        }

        let resultado;
        switch (operacion) {
            case '+':
                resultado = sumar(num1, num2);
                break;
            case '-':
                resultado = restar(num1, num2);
                break;
            case '*':
                resultado = multiplicar(num1, num2);
                break;
            case '/':
                resultado = dividir(num1, num2);
                break;
            default:
                resultado = "Operación no válida";
        }

        alert('El resultado de ' + num1 + ' ' + operacion + ' ' + num2 + ' es: ' + resultado);

        let opcion = prompt("¿Desea realizar alguna otra operación? (s/n)");
        if (opcion.toLowerCase() !== 's') {
            continuar = false;
        }
    }
}

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "Error: No se puede dividir por cero";
    }
}

iniciarPrograma();











