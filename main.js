// mensagem de verificação
console.log("Arquivo JS conectado");

//criando uma variavel global para armazenar o user 
let user = ""; 

//injetando o nome do usuário nos lugares corretos, no html, com .textContent
//selecionando os espaços de id "jogador" e colocando o user nesses espaços
document.getElementById('jogador').textContent = user;

// regulando a aparição de telas
//controle de transição da tela inicial para a tela do jogo
//selecionando os elementos que fazem parte dessa ação: botao jogar, tela inicial, tela do jogo e historico de jogadas
const botao_jogar = document.getElementById('botao_jogar');
const tela_inicio = document.querySelector('.tela_inicio');
const tela_jogo = document.querySelector('.jogo');
const tela_historico = document.querySelector('.historico');

function inicia_jogo ()
{
    //selecionando o campo (do html) onde o usuário digita o nome
    const input_user = document.getElementById('username');

    //validando:
    if (input_user === "")
    {
        alert("Por favor, digite um username para iniciar!");
    }
    else
    {
        user = input_user.value;
    }

    //injetando o nome do usuário nos lugares corretos, no html, com .textContent
    //selecionando os espaços de id "jogador" e colocando o user nesses espaços
    document.getElementById('jogador').textContent = user;

    //adicionamos eventos ao bloco
    //esses comandos, ao serem acionados pelo botão, adicionam a classe escondida de algumas telas e retiram de outras
    tela_inicio.classList.add('escondida');
    tela_jogo.classList.remove('escondida');
    tela_historico.classList.remove('escondida');
}
//adiciona um evento ao clique do botão
//quando clicarmos no botão, a função inicia_jogo vai rodar, fazendo a verificação e atribuição do user e 
//mudando de tela
botao_jogar.addEventListener('click', inicia_jogo);










