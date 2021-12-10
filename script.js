function soma(a, b) {
    return (a + b)
}

function subtracao(a, b) {
    return (a - b)
}

function multiplicacao(a, b) {
    return (a * b)
}

function divisao(a, b) {
    return (a / b)
}

function insert(x) {
    const numero = document.getElementById("resultado").innerHTML
    document.getElementById("resultado").innerHTML = numero + x
}

function clean() {
    document.getElementById("resultado").innerHTML = ""
}

function back() {
    const resultado = document.getElementById("resultado").innerHTML
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular() {
    const resultado = document.getElementById("resultado").innerHTML
    if(resultado)
    {
        document.getElementById("resultado").innerHTML = eval(resultado)
    }
    else
    {
        document.getElementById("resultado").innerHTML = "0"
    }
}