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
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
           genero = 'Homem'
           if(idade >=0 && idade <10){
               //Criança
               img.setAttribute('src', './Imagens/Tratadas/1-Ano-Homem.png')
               //./Imagens/Tratadas/1-Ano-Homem.png
           }else if (idade >= 10 && idade < 21) {
               // Jovem
               img.setAttribute('src', './Imagens/Tratadas/20-Anos-Homem.png')
           }else if (idade >= 21 && idade < 50) {
               //Adulto
               img.setAttribute('src', './Imagens/Tratadas/35-Anos-Homem.png')
           } else {
               //Idoso
               img.setAttribute('src', './Imagens/Tratadas/50-Anos-Homem.png')
           }
       } else if (fsex[1].checked) {
           genero = 'Mulher'
           if(idade >=0 && idade <10){
            //Criança
            img.setAttribute('src', './Imagens/Tratadas/1-Ano-Mulher.png')
        }else if (idade >= 10 && idade < 21) {
            // Jovem
            img.setAttribute('src', './Imagens/Tratadas/20-Anos-Mulher.png')
        }else if (idade >= 21 && idade < 50) {
            //Adulto
            img.setAttribute('src', './Imagens/Tratadas/35-Anos-Mulher.png')
        } else {
            //Idoso
            img.setAttribute('src', './Imagens/Tratadas/50-Anos-Mulher.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.` //teste
       res.appendChild(img)
    }

}