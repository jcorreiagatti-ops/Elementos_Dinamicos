let amarelo = document.querySelector('#amarelo');
let azul = document.querySelector('#azul');
let vermelho = document.querySelector('#vermelho');
let verde = document.querySelector('#verde');
let caixa = document.querySelector('#caixa');
let apagar = document.querySelector('#apagar');
let body = document.body;
amarelo.addEventListener('click', ()=>{
    // caixa.classList.toggle('bloco-amarelo')
    body;

});

azul.addEventListener('click', ()=>{
    let bloco_azul = document.createElement('div');
    bloco_azul.style.width = '50px';
    bloco_azul.style.height = '50px';
    bloco_azul.style.backgroundColor = 'blue';

    caixa.appendChild(bloco_azul);
});

vermelho.addEventListener('click', ()=>{
    let bloco_vermelho = document.createElement('div');
    bloco_vermelho.style.width = '50px';
    bloco_vermelho.style.height = '50px';
    bloco_vermelho.style.backgroundColor = 'red';

    caixa.appendChild(bloco_vermelho);
});

verde.addEventListener('click', ()=>{
    let bloco_verde = document.createElement('div');
    bloco_verde.style.width = '50px';
    bloco_verde.style.height = '50px';
    bloco_verde.style.backgroundColor = 'green';

    caixa.appendChild(bloco_verde);
});

apagar.addEventListener('click', ()=>{
    caixa.innerHTML = ''; 
})