// Pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
const personagens = document.querySelectorAll('.personagem');

// Adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
personagens.forEach((personagem)=> {
    personagem.addEventListener('mouseenter', () => {

        // Para telas mobiles, tirar o efeito da usabilidade de mouse
        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // Verifica se já existe um personagem selecionado, se sim, remover a seleção dele
        removerSelecaoDoPersonagem();

        // Adiciona uma classe selecionado para o personagem
        personagem.classList.add('selecionado');

        // Pegar o elemento do personagem grande para adicionar as informações nele
        alterarImagemPersonagemSelecionado(personagem);

        // Alterando nome do personagem grande
        alterarNomePersonagemSelecionado(personagem);

        // Alterando a descrição do personagem
        alterarDescricaoPersonagem(personagem);
    })
}) 

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    // Alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./img/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
