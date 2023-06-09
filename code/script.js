document.addEventListener("DOMContentLoaded", function () {
    const nombreInput = document.getElementById("fname");
    const apellidoInput = document.getElementById("lname");
    const tipoAutoSelect = document.getElementById("tipoAuto");
    const precioAutoInput = document.getElementById("precioAuto");
    const presupuestoInput = document.getElementById("presupuesto");
    const compraMessage = document.getElementById("compraMessage");
    const aceptaFinanciamientoInput = document.getElementById("financiamiento");
  
    function startAd() {
      let tlMain = gsap.timeline();
  
      (function init() {
        const noName = document.getElementById("noName");
        const welcome = document.getElementById("welcome");
        noName.style.display = "none";
        welcome.style.display = "none";
        financiado.style.display = "none";
        tipoAutoHolder.style.display = "none";
  
        animation();
      })();
  
      function firstStage() {
        return function () {
          const submitButton = document.querySelector("#nameHolder input[type='submit']");
          const noName = document.getElementById("noName");
          let hideNoNameTimeout;
  
          submitButton.addEventListener("click", function (event) {
            event.preventDefault();
          
            const nombre = nombreInput.value;
            const apellido = apellidoInput.value;
          
            if (nombre === "" || apellido === "") {
              noName.style.display = "block";
            } else {
              welcome.style.display = "block";
              welcome.innerHTML = "Bienvenido " + nombre + " " + apellido;
              tipoAutoHolder.style.display = "grid"; // Mostrar tipoAutoHolder como grid
            }
          
            nombreInput.addEventListener('input', checkFormValidity);
            apellidoInput.addEventListener('input', checkFormValidity);
          
            function checkFormValidity() {
              if (nombreInput.value.trim() !== "" && apellidoInput.value.trim() !== "") {
                tipoAutoHolder.style.display = "grid"; // Conservar distribución como grid
              } else {
                tipoAutoHolder.style.display = "none";
              }
            }
          });
          
  
          nameHolder.addEventListener("click", function () {
            clearTimeout(hideNoNameTimeout);
            hideNoNameTimeout = setTimeout(function () {
              gsap.to(noName,{duration:.3, autoAlpha:0});
            }, 1000);
          });
        };

      }
  
      function animation() {
        const container = document.getElementById("container");
        tlMain
          .set(container, { visibility: "visible" })
          .add(firstStage(), "+=0");
      }
  
      animation();
    }

    tipoAutoSelect.addEventListener("change", function () {
        const tipoAuto = tipoAutoSelect.value;
        let precio = "";
      
        if (tipoAuto === "automovil") {
          precio = "15,000";
        } else if (tipoAuto === "camioneta") {
          precio = "30,000";
        } else if (tipoAuto === "microbus") {
          precio = "37,000";
        }
      
        if (precio) {
          precioAuto.innerText = "$" + precio;
        } else {
          precioAuto.innerText = "";
        }
      });

      presupuestoInput.addEventListener("input", function () {
        const presupuesto = Number(presupuestoInput.value);
        const precioAuto = Number(precioAutoInput.textContent.replace(/\D/g, "")); // Obtener el precio sin el signo de dólar
        
        if (presupuesto >= precioAuto) {
          compraMessage.innerHTML = "¡Felicidades " + nombreInput.value + "!" +" Puedes comprar el tipo auto de seleccionado.";
          financiado.style.display = "none";
        } else {
          const faltante = precioAuto - presupuesto;
          let mensaje = "Faltan $" + faltante.toLocaleString() + " para alcanzar el precio del auto.";
          financiado.style.display = "block";
        
          if (aceptaFinanciamientoInput.checked) {
            mensaje += " ¿Aceptas financiamiento?";
          }
        
          compraMessage.innerHTML = mensaje;
        }
      });
      
      aceptaFinanciamientoInput.addEventListener("change", function () {
        const presupuesto = Number(presupuestoInput.value);
        const precioAuto = Number(precioAutoInput.textContent.replace(/\D/g, "")); // Obtener el precio sin el signo de dólar
        
        if (presupuesto < precioAuto && aceptaFinanciamientoInput.checked) {
            compraMessage.innerHTML += " Aceptas financiamiento?";
        }
      });

      const nameHolder = document.getElementById("nameHolder");
      const tipoAutoHolder = document.getElementById("tipoAutoHolder");

      financiamiento.addEventListener("click", function () {
        nameHolder.remove();
        tipoAutoHolder.remove();
        gallery.style.display = "block";

        const precioAuto = Number(precioAutoInput.textContent.replace(/[^0-9]/g, ""));
        const presupuesto = Number(presupuestoInput.value);
        const faltante = precioAuto - presupuesto;
        let montoFinanciado = 0;
        let tasaInteresAnual = 0;

        if (faltante < 3000) {
          montoFinanciado = faltante * 0.025;
          tasaInteresAnual = 2.5;
        } else {
          montoFinanciado = precioAuto * 0.04;
          tasaInteresAnual = 4;
        }

        const montoFinanciadoElement = document.getElementById("montoFinanciado");
        montoFinanciadoElement.innerHTML = "Te faltan $" + faltante.toLocaleString() + ". El monto a financiar es de $" + montoFinanciado.toLocaleString() + " con una tasa de interés anual del " + tasaInteresAnual + "%";

        const form = document.getElementById("myForm");

        form.addEventListener("submit", function (event) {
          event.preventDefault();
      
          const nombre = document.getElementById("fname").value;
          const apellido = document.getElementById("lname").value;
          const edad = document.getElementById("age").value;
          const codigoPostal = document.getElementById("postalCode").value;
      
          const usuario = {
            nombre: nombre,
            apellido: apellido,
            edad: edad,
            codigoPostal: codigoPostal
          };
        });
      });
  
    startAd();
  });
  