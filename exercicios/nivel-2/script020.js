function descobrir(){
    let mes = window.prompt('Digite o mês em extenso (ex: Setembro)')
    let saida = window.document.getElementById('saida')
    let estacao
    switch (mes.toUpperCase()) {
        case 'JANEIRO':
        case 'FEVEREIRO':
        case 'MARÇO':
        estacao = 'INVERNO'
        break
        case 'ABRIL':
        case 'MAIO':
        case 'JUNHO':
        estacao = 'PRIMAVERA'
        break
        case 'JULHO':
        case 'AGOSTO':
        case 'SETEMBRO':
        estacao = 'VERÃO'
        break
        case 'OUTUBRO':
        case 'NOVEMBRO':
        case 'DEZEMBRO':
        estacao = 'OUTONO'
        break
        default:
        estacao = 'INDEFINIDA'
        break       
    }

    saida.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <mark><strong>${estacao}</strong></mark></p>`

}

// 21 de março a 21 de junho -  outono

// 21 de junho a 23 de setembro  - inverno

// 23 de setembro a 21 de dezembro - primavera

// 21 de dezembro a 21 de março - Verão

/*
inverno

primavera

verao


outono
*/