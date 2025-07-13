const corpo = document.body;
const botao = document.getElementById('botao');
const cabecalho = document.getElementById('cabecalho');
const rodape = document.getElementById('rodape');

let escuro = false;
botao.addEventListener('click', () => {
    if (escuro) {
        corpo.classList.remove('escuro');
        corpo.classList.add('claro');
        cabecalho.classList.remove('escuro');
        cabecalho.classList.add('claro');
        rodape.classList.remove('escuro');
        rodape.classList.add('claro');
        alert('Tema claro ativado');
    }
    else {
        corpo.classList.remove('claro');
        corpo.classList.add('escuro');
        cabecalho.classList.remove('claro');
        cabecalho.classList.add('escuro');
        rodape.classList.remove('claro');
        rodape.classList.add('escuro');
        alert('Tema escuro ativado');
    }
    escuro = !escuro;
});
