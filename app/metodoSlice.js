let btnLivrosMaisBaratos = document.getElementById('btnLivrosBaratos');
btnLivrosMaisBaratos.addEventListener('click', mostrarLivrosMaisBaratos);

function mostrarLivrosMaisBaratos() {
    try {
        let livrosDisponiveis = filtrarPorDisponibilidade();

        if (livrosDisponiveis.length === 0) {
            throw new Error('Nenhum livro disponível para exibir.');
        }

        let livrosMaisBaratos = livrosDisponiveis.sort((a, b) => a.preco - b.preco)
                                                  .slice(0, 5);
        
        exibirOsLivrosNaTela(livrosMaisBaratos);
    } catch (error) {
        console.error('Erro ao mostrar os livros mais baratos:', error.message);
    }
}
