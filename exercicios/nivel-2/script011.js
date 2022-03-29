

function dados(){
    
    let nome = window.prompt(`Qual é o nome do aluno?`)
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome} ?`))
    
    let med = (n1+n2)/2

    let media = window.document.getElementById('res')

    media.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`

    media.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark></p>`

    media.innerHTML += `<p>A média final será <mark>${med}</mark></p>`

    if (med >= 7) {
        media.innerHTML += `<p>A mensagem que temos é: <strong>Meus parabéns</strong></p>`
    } else {
        media.innerHTML += `<p>A mensagem que temos é: <strong>Estude um pouco mais!</strong></p>`
    }
}
    


/*
let media = Number(window.document.getElementById('res'))
let med = `${n1+n2}`
media.innerHTML = `Calculando a média final de ${nome}.`
media.innerHTML = `As notas obtidas foram ${n1} e ${n2}`
media.innerHTML = `A média final será ${med/2}`
*/
