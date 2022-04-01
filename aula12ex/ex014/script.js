function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let n1 = window.document.getElementById('n1')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = './imagens/tratadas/Manha.png'
        document.body.style.background = '#e2cd9f'
        n1.innerHTML = `BOM DIA`
        
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE!
        img.src = './imagens/tratadas/tarde.png'
        document.body.style.background = '#b9846f'
        n1.innerHTML = `BOA TARDE`
    } else {
        //BOA NOITE!
        img.src = './imagens/tratadas/noite.png'
        document.body.style.background = '#515154'
        n1.innerHTML = `BOA NOITE`
    }
}
