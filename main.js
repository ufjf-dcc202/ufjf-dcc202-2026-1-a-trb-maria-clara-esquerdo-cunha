// mensagem de verificação
console.log("Arquivo JS conectado");

//armazenando o user em uma variável global:
let user = ""; //cria um espaço na memória para armazenar o nome

//selecionando o campo (do html) onde o usuário digita o nome
const input_user = document.getElementById('username');

//validando:
if (input_user === "")
{
    alert("Por favor, digite um username para iniciar!");
}
else
{
    user = input_user;
}

//injetando o nome do usuário nos lugares corretos, no html, com .textContent
//selecionando os espaços de id "jogador" e colocando o user nesses espaços
document.document.getElementById('jogador').textContent = user;

// regulando a aparição de telas
//controle de transição da tela inicial para a tela do jogo
//selecionando os elementos que fazem parte dessa ação: botao jogar, tela inicial, tela do jogo e historico de jogadas
const botao_jogar = document.getElementById('botao_jogar');
const tela_inicio = document.querySelector('.tela_inicio');
const tela_jogo = document.querySelector('.jogo');
const tela_historico = document.querySelector('.historico');












