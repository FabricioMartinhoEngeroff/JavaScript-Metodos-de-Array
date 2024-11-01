const elementoParaInserirLivros = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

function exibirOsLivrosNaTela(listaDeLivros) {
  try {
      elementoComValorTotalDeLivrosDisponiveis.innerHTML = '';
      elementoParaInserirLivros.innerHTML = '';

      if (listaDeLivros.length === 0) {
          elementoParaInserirLivros.innerHTML = '<p>Nenhum livro disponível.</p>';
          return; 
      }

      listaDeLivros.forEach(livro => {
          if (!livro.titulo || !livro.autor || typeof livro.preco !== 'number') {
              throw new Error('Livro inválido: título, autor ou preço ausente.');
          }

          let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';
          elementoParaInserirLivros.innerHTML += `
          <div class="livro">
              <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
              <h2 class="livro__titulo">${livro.titulo}</h2>
              <p class="livro__descricao">${livro.autor}</p>
              <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
              <div class="tags">
                  <span class="tag">${livro.categoria}</span>
              </div>
          </div>
          `;
      });
  } catch (error) {
      console.error('Erro ao exibir livros na tela:', error.message);
      elementoParaInserirLivros.innerHTML = '<p>Erro ao carregar os livros.</p>'; // Mensagem de erro na tela
  }
}
