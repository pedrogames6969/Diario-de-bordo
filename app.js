function criaCartao(categoria, pergunta, resposta, imagem) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

       cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
                ${imagem ? `<div class="cartao__imagem"><img src="${imagem}" alt="Imagem do álbum"></div>` : ''}
            </div>
        </div>
    `;

    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }
    cartao.addEventListener('click', viraCartao);

    container.appendChild(cartao);
}
criaCartao(
    'Álbum de fotos', 
    'Minhas memórias!', 
    'Allan na GreenWood Great House.',
    'file:///C:/Users/Windows%2010/Downloads/y4mSNbvy5LKoI7JlNIw5aXz-XbaTzJXE8f3ITUAWHETx58qTGlfAUl6cYjpJ7WTV9dEFWmYbhohjtHYZyjpb1e6Bu4hsQ2x6rHnlRkyH138s6b5nBNLAkJ0TcRCyxkX-uwD8cBBoG_VDWf5whDZpAUEbjhoWTmjsCZI6S94B2rn3F3dEQUCg8cs34I-yPxw5YNpkt52OSToouGklk%20(1)'
);
