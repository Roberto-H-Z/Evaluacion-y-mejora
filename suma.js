function borrarPantalla() {
    document.getElementById('display').innerText = '0';
}

function agregarCaracter(caracter) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = caracter;
    } else {
        display.innerText += caracter;
    }
}

function eliminarCaracter() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') {
        display.innerText = '0';
    }
}

function calcularResultado() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
}