let inputadultos = document.getElementById("adultos");
let inputcriancas = document.getElementById("criancas");
let inputduracao = document.getElementById("duracao");


let resultado = document.getElementById("resultado");

function calc() {
    
    let adultos = inputadultos.value;
    let criancas = inputcriancas.value;
    let duracao = inputduracao.value;


    let qtdtotalcarne = carnepp(duracao) * adultos + (carnepp(duracao) / 2 * criancas);
    let qtdtotalcerveja = cervejapp(duracao) * adultos;
    let qtdtotalbebidas = bebidaspp(duracao) * adultos + (bebidaspp(duracao) / 2 * criancas);


    resultado.innerHTML = `<p>${qtdtotalcarne/1000} kg de carne`
    resultado.innerHTML += `<p>${Math.ceil(qtdtotalcerveja/355)} Latas de cerveja`
    resultado.innerHTML += `<p>${Math.ceil(qtdtotalbebidas/1000)} Garrafas de bebida`
}

function carnepp(duracao){
        if(duracao >= 6){
        return  650;
    }else{
        return 400;
    }   
}
function cervejapp(duracao){
    
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }   
}
function bebidaspp(duracao){
    
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }   
}