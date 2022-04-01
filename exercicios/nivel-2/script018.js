let res = window.document.querySelector('section#res')
let computador = 0
let jogador = 0

function sortear() {
    
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    computador = Math.trunc(dif*aleatorio)
}

function jogar(){

    jogador = Number(window.prompt('Qual é o seu palpite?'))
    if (jogador < computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR</strong>!</p>`
    } else if (jogador > computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR</strong>!</p>`
    } else if (jogador == computador){
        res.innerHTML += `<p><STRONG>PARABÉNS!</STRONG>Você acertou! Eu tinha sorteado o valor ${computador}!</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }

}

