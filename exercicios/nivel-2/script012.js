function calcular() {
    let n = Number(window.prompt('Digite um número:'))

    let tipo
        if (n % 2 == 0) {
            tipo = '<strong>PAR</strong>'
        } else {
            tipo = '<strong>ÍMPAR</strong>'
        }
    let resultado = window.document.getElementById('res')
    resultado.innerHTML = `O número ${n} que foi digitado é ${tipo} !`
}


