//O que eu recebi do sistema foi
function clicar() {
    let n1 = new Date
    let n2 = window.document.getElementById('res')
    n2.innerHTML = `<p>O que eu recebi do sistema foi <mark>${n1}</mark></p>`
}