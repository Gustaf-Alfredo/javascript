function calcular() {
    
    let agora = new Date
    let data = agora.getFullYear()

    let nasc = Number(window.prompt('Em que ano você nasceu?'))
    let idade = data - nasc

    let res = window.document.getElementById('res')
    res.innerHTML = `<p>Quem nasceu em ${nasc} vai completar <strong>${idade}</strong> em ${data}</p>`
}