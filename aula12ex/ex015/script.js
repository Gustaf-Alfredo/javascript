function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       //res.innerHTML = `Idade calculada: ${idade}` //teste
       var genero = ''
       if (fsex[0].checked){
           genero = 'Homem'
       } else if (fsex[1].checked) {
           genero = 'Mulher'
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.` //teste
    }

}