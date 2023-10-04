// passo 1 - pegar os botoes no js para poder verificar quando o usuario clicar em cima de um deles

// passo 2 - adicionar a "selecionado" no botao que o usuario clico

//passo 3 - verificar se já existe um botao selecionado, se sim, devemos remover a seleção dele

const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem")
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {


        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado")
        personagens[indice].classList.add("selecionado");
    });
});


function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

