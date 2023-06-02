var nombre = prompt("Ingrese su nombre:");

validar();

function validar() {
    if (!nombre || nombre.trim() === "") {
        alert("No ingresaste ningún nombre. No podemos iniciar tu proceso sin tus datos.");
        location.reload();
        return;
    }
}



alert("¡Bienvenido(a), " + nombre + "!");

for (let index = 0; index < 1; index++) {
    let usuarioEdad = prompt("Ingresa tu edad");
    let numberParsed = parseInt(usuarioEdad);
  
    if (isNaN(numberParsed)) {
      alert("Por favor, ingresa una edad válida.");
      index--;
      continue;
    }
  
    if (numberParsed < 18) {
      alert("Eres menor de edad, pero puedes seguir consultando precios.");
    }
  }
  

const tipoAuto = prompt("Ingrese el tipo de auto que desea comprar (Automovil, Camioneta Pick Up, Microbus):").toLowerCase();

const presupuesto = parseInt(prompt("Ingrese su presupuesto:"));

const autos = [
    { tipo: "automovil", precio: 15000 },
    { tipo: "camioneta pick up", precio: 30000 },
    { tipo: "microbus", precio: 37000 }
];

switch (tipoAuto) {
    case "automovil":
        if (presupuesto >= autos[0].precio) {
            alert("Felicidades, " + nombre + "! Usted puede comprar un " + autos[0].tipo + ". ¡Acérquese a nuestra agencia para elegir su modelo!");
        } else {
            const faltante = autos[0].precio - presupuesto;

            if (faltante > 0) {
                const aceptaFinanciamiento = prompt("Su presupuesto no alcanza. Le faltan $" + faltante + ". ¿Aceptaría el financiamiento? (Si/No):").toLowerCase();

                if (aceptaFinanciamiento === "si") {
                    if (faltante <= 3000) {
                        plazoFinanciamiento = 1;
                        tasaInteres = 2.5;
                      } else {
                        plazoFinanciamiento = 4;
                        tasaInteres = 3;
                      }

                    alert("Perfecto, " + nombre + ". Usted puede acercarse a nuestra sucursal para completar el proceso de financiamiento.");
                    alert("El plazo de financiamiento será de " + plazoFinanciamiento + " años y la tasa de interés será del " + tasaInteres + "% anual.");
                } else {
                    alert("Gracias por su tiempo, " + nombre + ". Esperamos poder hacer negocios en otra oportunidad.");
                }
            }
        }
        break;

    case "camioneta pick up":
        if (presupuesto >= autos[1].precio) {
            alert("Felicidades, " + nombre + "! Usted puede comprar una " + autos[1].tipo + ". ¡Acérquese a nuestra agencia para elegir su modelo!");
        } else {
            const faltante = autos[1].precio - presupuesto;

            if (faltante > 0) {
                const aceptaFinanciamiento = prompt("Su presupuesto no alcanza. Le faltan $" + faltante + ". ¿Aceptaría el financiamiento? (Si/No):").toLowerCase();

                if (aceptaFinanciamiento === "si") {
                    if (faltante <= 3000) {
                        plazoFinanciamiento = 1;
                        tasaInteres = 2.5;
                      } else {
                        plazoFinanciamiento = 4;
                        tasaInteres = 3;
                      }

                    alert("El plazo de financiamiento será de " + plazoFinanciamiento + " años y la tasa de interés será del " + tasaInteres + "% anual.");
                } else {
                    alert("Gracias por su tiempo, " + nombre + ". Esperamos poder hacer negocios en otra oportunidad.");
                }
            }
        }
        break;

    case "microbus":
        if (presupuesto >= autos[2].precio) {
            alert("Felicidades, " + nombre + "! Usted puede comprar un " + autos[2].tipo + ". ¡Acérquese a nuestra agencia para elegir su modelo!");
        } else {
            const faltante = autos[2].precio - presupuesto;

            if (faltante > 0) {
                const aceptaFinanciamiento = prompt("Su presupuesto no alcanza. Le faltan $" + faltante + ". ¿Aceptaría el financiamiento? (Si/No):").toLowerCase();

                if (aceptaFinanciamiento === "si") {
                    if (faltante <= 3000) {
                        plazoFinanciamiento = 1;
                        tasaInteres = 2.5;
                      } else {
                        plazoFinanciamiento = 4;
                        tasaInteres = 3;
                      }

                    alert("Perfecto, " + nombre + ". Usted puede acercarse a nuestra sucursal para completar el proceso de financiamiento.");
                    alert("El plazo de financiamiento será de " + plazoFinanciamiento + " años y la tasa de interés será del " + tasaInteres + "% anual.");
                } else {
                    alert("Gracias por su tiempo, " + nombre + ". Esperamos poder hacer negocios en otra oportunidad.");
                }
            }
        }
        break;

    default:
        alert("El tipo de auto ingresado no es válido. Por favor, seleccione entre Automovil, Camioneta Pick Up o Microbus.");
        alert("Intentemos de nuevo");
        location.reload();
        break;
}

