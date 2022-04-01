function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = 5
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 12 && hora < 12) {
        //BOM DIA!
        img.src = ('imagens/Manha.png')
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = ('imagens/tarde2.png')
    } else {
        //BOA NOITE!
        img.src = ('imagens/noite.png')
    }
}
