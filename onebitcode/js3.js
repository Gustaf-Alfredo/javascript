let DobraN = 0;
let Dobra = "";


let NaveName = window.prompt('Qual o nome da nave?');
    Dobra = window.prompt('Deseja entrar em dobra espacial?\n1-Sim\n2-Não');


while (Dobra == "1") {
    DobraN += 1;
    Dobra = window.prompt('Deseja entrar em dobra espacial?\n1-Sim\n2-Não');
}

window.alert("Nave: " + NaveName + "\nQuantidade de dobras: " + DobraN);