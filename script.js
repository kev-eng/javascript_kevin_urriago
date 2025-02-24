function mostrarEjercicio(numero) {
    const ejercicios = document.querySelectorAll('.ejercicio');
    ejercicios.forEach((ejercicio, index) => {
        if (index + 1 === numero) {
            ejercicio.style.display = 'block';
        } else {
            ejercicio.style.display = 'none';
        }
    });
}

// eje_1
function calcularDescuento() {
    const montoCompra = parseFloat(document.getElementById('montoCompra').value);
    const descuento = montoCompra * 0.25;
    const montoFinal = montoCompra - descuento;
    document.getElementById('montoFinal').textContent = montoFinal.toFixed(2);
}

// eje_2
function calcularInteres() {
    const capital = parseFloat(document.getElementById('capital').value);
    const interes = capital * 0.02;
    const total = capital + interes;
    document.getElementById('resultado2').innerText = `Ganancia después de un mes: $${total.toFixed(2)}`;
}

// eje_3
function calcularCalificacion() {
    const parcial1 = parseFloat(document.getElementById('parcial1').value);
    const parcial2 = parseFloat(document.getElementById('parcial2').value);
    const parcial3 = parseFloat(document.getElementById('parcial3').value);
    const examenFinal = parseFloat(document.getElementById('examenFinal').value);
    const trabajoFinal = parseFloat(document.getElementById('trabajoFinal').value);

    const promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
    const calificacionFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);

    document.getElementById('resultado3').innerText = `Calificación Final: ${calificacionFinal.toFixed(2)}`;
}

// eje_4
function calcularPrecioVenta() {
    const costo = parseFloat(document.getElementById('costo').value);
    const ganancia = costo * 0.30;
    const precioVenta = costo + ganancia;
    document.getElementById('resultado4').innerText = `Precio de Venta: $${precioVenta.toFixed(2)}`;
}

// eje_5
function calcularCostoCarrera() {
    const kilometros = parseFloat(document.getElementById('kilometros').value);
    const minutos = parseFloat(document.getElementById('minutos').value);
    const costo = (kilometros * 15000) + (minutos * 2000);
    document.getElementById('resultado5').innerText = `Costo de la carrera: $${costo.toFixed(2)}`;
}

// eje_6
function calcularCuadrados() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const numero3 = parseFloat(document.getElementById('numero3').value);

    const cuadrado1 = numero1 * numero1;
    const cuadrado2 = numero2 * numero2;
    const cuadrado3 = numero3 * numero3;

    document.getElementById('resultado6').innerText = `Cuadrado de ${numero1}: ${cuadrado1}, Cuadrado de ${numero2}: ${cuadrado2}, Cuadrado de ${numero3}: ${cuadrado3}`;
}

// eje_7
function calcularDistribucion() {
    const presupuesto = parseFloat(document.getElementById('presupuesto').value);
    const ginecologia = presupuesto * 0.40;
    const traumatologia = presupuesto * 0.30;
    const pediatria = presupuesto * 0.30;

    document.getElementById('resultado7').innerText = `Ginecología: $${ginecologia.toFixed(2)}, Traumatología: $${traumatologia.toFixed(2)}, Pediatría: $${pediatria.toFixed(2)}`;
}

// eje_8
function calcularPrecioVenta2() {
    const costo = parseFloat(document.getElementById('costo2').value);
    const ganancia = costo * 0.30;
    const precioVenta = costo + ganancia;
    document.getElementById('resultado8').innerText = `Precio de Venta: $${precioVenta.toFixed(2)}`;
}

// eje_9
function calcularPorcentajes() {
    const inversion1 = parseFloat(document.getElementById('inversion1').value);
    const inversion2 = parseFloat(document.getElementById('inversion2').value);
    const inversion3 = parseFloat(document.getElementById('inversion3').value);

    const total = inversion1 + inversion2 + inversion3;
    const porcentaje1 = (inversion1 / total) * 100;
    const porcentaje2 = (inversion2 / total) * 100;
    const porcentaje3 = (inversion3 / total) * 100;

    document.getElementById('resultado9').innerText = `Porcentaje Persona 1: ${porcentaje1.toFixed(2)}%, Persona 2: ${porcentaje2.toFixed(2)}%, Persona 3: ${porcentaje3.toFixed(2)}%`;
}

// eje_10
function sumar() {
    const numero1 = parseFloat(document.getElementById('numero1Calc').value);
    const numero2 = parseFloat(document.getElementById('numero2Calc').value);
    const resultado = numero1 + numero2;
    document.getElementById('resultado10').innerText = `Resultado: ${resultado}`;
}

function restar() {
    const numero1 = parseFloat(document.getElementById('numero1Calc').value);
    const numero2 = parseFloat(document.getElementById('numero2Calc').value);
    const resultado = numero1 - numero2;
    document.getElementById('resultado10').innerText = `Resultado: ${resultado}`;
}

function multiplicar() {
    const numero1 = parseFloat(document.getElementById('numero1Calc').value);
    const numero2 = parseFloat(document.getElementById('numero2Calc').value);
    const resultado = numero1 * numero2;
    document.getElementById('resultado10').innerText = `Resultado: ${resultado}`;
}

function dividir() {
    const numero1 = parseFloat(document.getElementById('numero1Calc').value);
    const numero2 = parseFloat(document.getElementById('numero2Calc').value);
    if (numero2 !== 0) {
        const resultado = numero1 / numero2;
        document.getElementById('resultado10').innerText = `Resultado: ${resultado}`;
    } else {
        document.getElementById('resultado10').innerText = "Error: División por cero";
    }
}