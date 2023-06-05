let nombre;

do {
    nombre = prompt("Ingrese su nombre:");
    if (nombre && !isNaN(nombre)) {
        alert("Por favor, ingrese un nombre válido.");
    } else if (!nombre) {
        alert("No ingresaste ningún nombre. ¡Empecemos de nuevo!");
    }
} while (!nombre || !isNaN(nombre));

alert("¡Bienvenido(a), " + nombre + "!");

let numberParsed;

while (true) {
    let usuarioEdad = prompt("Ingresa tu edad");
    numberParsed = parseInt(usuarioEdad);

    if (isNaN(numberParsed)) {
        alert("Por favor, ingresa una edad válida.");
        continue;
    }

    if (numberParsed < 18) {
        alert("Eres menor de edad, pero puedes seguir consultando precios.");
    }

    break;
}

solicitarTipoAuto();

function solicitarTipoAuto() {
    const tipoAuto = prompt("Ingrese el tipo de auto que desea comprar (Automovil, Camioneta Pick Up, Microbus):").toLowerCase();

    const presupuesto = parseInt(prompt("Ingrese su presupuesto:"));

    const autos = [
        { tipo: "automovil", precio: 15000 },
        { tipo: "camioneta pick up", precio: 30000 },
        { tipo: "microbus", precio: 37000 }
    ];

    switch (tipoAuto) {
        case "automovil":
            comprarAuto(autos[0], presupuesto);
            break;

        case "camioneta pick up":
            comprarAuto(autos[1], presupuesto);
            break;

        case "microbus":
            comprarAuto(autos[2], presupuesto);
            break;

        default:
            mostrarError();
            break;
    }
}

function mostrarError() {
    alert("El tipo de auto ingresado no es válido. Por favor, seleccione entre Automovil, Camioneta Pick Up o Microbus.");
    alert("Intentemos de nuevo");
    solicitarTipoAuto();
}

function comprarAuto(auto, presupuesto) {
    if (presupuesto >= auto.precio) {
        alert("Felicidades, " + nombre + "! Usted puede comprar un " + auto.tipo + ". ¡Acérquese a nuestra agencia para elegir su modelo!");
        return;
    }
    
    const faltante = auto.precio - presupuesto;

    if (faltante > 0) {
        const aceptaFinanciamiento = prompt("Su presupuesto no alcanza. Le faltan $" + faltante + ". ¿Aceptaría el financiamiento? (Si/No):").toLowerCase();

        if (aceptaFinanciamiento === "si") {
            let plazoFinanciamiento = 4;
            let tasaInteres = 3;

            if (faltante <= 3000) {
                plazoFinanciamiento = 1;
                tasaInteres = 2.5;
            }

            alert("Perfecto, " + nombre + ". Usted puede acercarse a nuestra sucursal para completar el proceso de financiamiento.");
            alert("El plazo de financiamiento será de " + plazoFinanciamiento + " años y la tasa de interés será del " + tasaInteres + "% anual.");
        } else {
            alert("Gracias por su tiempo, " + nombre + ". Esperamos poder hacer negocios en otra oportunidad.");
        }
    }
}
