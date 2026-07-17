// mensagem de verificação
console.log("Arquivo JS conectado");

//criando uma variavel global para armazenar o user 
let user = ""; 

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
    if (input_user.value === "")
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

//lógica do jogo: 

//variáveis globais que representam a mão do jogador (guarda o sisco que estamos movendo)
let disco_selecionado = null;
let torre_origem_selecionada = null;

//criando vetores globais para armazenar o estado inicial do jogo
//representação matemática das 3 torress:
let torre1 = [8, 7, 6, 5, 4, 3, 2, 1];
let torre2 = [];
let torre3 = [];

//criando a função que gerencia as jogadas:
function gerencia_jogadas (vetor_torre, elemento_torre)
{
    //caso 1: pegar o disco (último elemento do vetor), se a mão estiver vazia
    if (disco_selecionado === null) 
    {
        if (vetor_torre.length > 0) 
        {
            disco_selecionado = vetor_torre.pop(); //seleciona o último disco
            //faz com que o disco selecionado fique suspenso
            document.getElementById(`D${disco_selecionado}`).classList.add('selecionado');
        }
    }

    //caso 2: soltar o disco, se a mão estiver armazenando um disco
    else
    {
        //armazena o último elemento da torre de destino
        let topo_destino_destino = vetor_torre[vetor_torre.length - 1];

        //validando a regra do jogo: se a torre selecionada está vazia ou se o disco da mão é
        //menor, o disco pode ser adicionado à torre (ao vetor)
        if (topo_destino === undefined || disco_selecionado < topo_destino) 
        {
            vetor_torre.push(disco_selecionado);

            //move fisicamente o elemento no html
            let elemento_disco = document.getElementById(`D${disco_selecionado}`);
            elemento_torre.appendChild(elemento_disco);

            //remove o efeito visual de flutuar
            elemento_disco.classList.remove('selecionado');

            //limpa a mão para a próxima jogada
            disco_selecionado = null;
        }

        //se o disco da mão for maior que o último disco da torre de destino: 
        else
        {
            alert("Movimento inválido! Um disco maior não pode ficar por cima de um menor.");
            
            //tira o efeito de flutuar e devolve o disco
            document.getElementById(`D${disco_selecionado}`).classList.remove('selecionado');
            disco_selecionado = null;
        }
    }
}













