function info() { let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')

let semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')

let agora = new Date
let saida =  window.document.getElementById('saida')
let dia = agora.getDate()
let mes = agora.getMonth()
let ano = agora.getFullYear()
let sem = agora.getDay()
let hr = agora.getHours()
let min = agora.getMinutes()
let s = agora.getSeconds()



saida.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`
saida.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>`
saida.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`
saida.innerHTML += `<p>Dia da semana: <mark>${semana[sem]}</mark></p>`
saida.innerHTML += `<p>Hora: <mark>${hr}</mark></p>`
saida.innerHTML += `<p>Minutos: <mark>${min}</mark></p>`
saida.innerHTML += `<p>Segundos: <mark>${s}</mark></p>`
}