function calcular(){
    let n1 = Number(window.prompt('Digite um número:'))
    let n2 = Number(window.prompt('Digite outro número: '))
    let total = n1 + n2

    let n3 = window.document.getElementById('res')
    
    if (n1 > n2 && total != 0) {
        n3.innerHTML = `Analisando os valores ${n1} e ${n2}, o maior valor é ${n1} `
    } else if (n1 < n2 && total != 0) {
        n3.innerHTML = `Analisando os valores ${n1} e ${n2}, o maior valor é ${n2}`
    }else {
        n3.innerHTML = `Valores inválidos, o valor total tem que ser diferente de zero`
    }
}