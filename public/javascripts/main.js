const codigoPredefinido = "const express = require('express');";

function normalizeCode(code) {
    return code.toLowerCase().replace(/\s+/g, ' ').trim(); // Convertir a minúsculas y eliminar espacios adicionales
}

function runCode() {
    const code = normalizeCode(document.getElementById('code-editor').value);
    const codigoPredefinidoNormalized = normalizeCode(codigoPredefinido);

    try {
        // Comparar el código ingresado con el código predefinido (normalizado)
        if (code === codigoPredefinidoNormalized) {
            document.getElementById('output').innerText = "¡Código correcto!";
        } else {
            document.getElementById('output').innerText = "¡Código incorrecto!";
        }
    } catch (error) {
        console.error(error);
        document.getElementById('output').innerText = error.message;
    }
}