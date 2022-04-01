function calcular() {
    let v1 = Number(window.prompt('Primeiro valor:'))
    let v2 = Number(window.prompt('Segundo valor:'))
    let op = Number(window.prompt(`Valores informados: ${v1} e ${v2}. \nO que vamos fazer?\n[1] Somar\n[2] Subtrair\n[3] Multiplicar\n[4] Dividir`))//   \n faz quevra de linha no prompt

    let res = window.document.getElementById('res')
    res.innerHTML = `<h2>Calculando...</h2>`
    switch (op) { 
        case 1:
            res.innerHTML += `<p>${v1} + ${v2} = <strong>
            ${v1+v2}</strong></p>`
            break
        case 2:
            res.innerHTML += `<p>${v1} - ${v2} = <strong>
            ${v1-v2}</strong></p>`
            break
        case 3:
            res.innerHTML += `<p>${v1} x ${v2} = <strong>
            ${v1*v2}</strong></p>`
            break
        case 4:
            res.innerHTML += `<p>${v1} / ${v2} = <strong>
            ${(v1/v2).toLocaleString('pt-BR')}</strong></p>`
            break
        default:
            res.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${v1} e ${v2}, mas não sei o que fazer com eles.</p>`
            break
    }
}