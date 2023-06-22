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

    let autoSeleccionado;

    switch (tipoAuto) {
        case "automovil":
            autoSeleccionado = autos[0];
            break;

        case "camioneta pick up":
            autoSeleccionado = autos[1];
            break;

        case "microbus":
            autoSeleccionado = autos[2];
            break;

        default:
            mostrarError();
            return;
    }

    comprarAuto(autoSeleccionado, presupuesto);
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
        } else if (aceptaFinanciamiento === "no") {
            alert("Gracias por su tiempo, " + nombre + ". De igual manera dejanos tus datos para tenerte en nuestra base.");
        } else {
            alert("Opción inválida. Gracias por su tiempo, " + nombre + ".");
        }
    }
}


//Second Phase
const nombreMarca = prompt("Ingrese La Marca:\n1. Toyota\n2. Nissan\n3. Ford").toLowerCase();

let opcionSeleccionada;

switch (nombreMarca) {
  case "1":
  case "toyota":
    opcionSeleccionada = "Toyota";
    alert("Escogiste la Marca Toyota");
    break;
  case "2":
  case "nissan":
    opcionSeleccionada = "Nissan";
    alert("Escogiste la Marca Nissan");
    break;
  case "3":
  case "ford":
    opcionSeleccionada = "Ford";
    alert("Escogiste la Marca Ford");
    break;
  default:
    opcionSeleccionada = "Opción inválida";
    break;
}

const persona = {};

const datosIngresados = prompt("Ingrese estos datos nuevamente para proceso de compra\n1. Nombre\n2. Apellido\n3. Edad\n4. Numero de Telefono").toLowerCase();

const valores = datosIngresados.split(",");


persona.nombre = valores[0];
persona.apellido = valores[1];
persona.edad = valores[2];
persona.numeroTelefono = valores[3];

var msge1 = "Gracias, te tendremos en nuestra base con estos datos:" +
            "\nNombre: " + persona.nombre +
            "\nApellido: " + persona.apellido +
            "\nEdad: " + persona.edad +
            "\nNumero de Telefono: " + persona.numeroTelefono;

alert(msge1);