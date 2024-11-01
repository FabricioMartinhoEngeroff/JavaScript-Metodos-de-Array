let btnOdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    try {
        let livrosDisponiveis = filtrarPorDisponibilidade();
        
        if (livrosDisponiveis.length === 0) {
            console.warn('Nenhum livro disponível para ordenar.');
            return;
        }

        let livrosOrdenados = livrosDisponiveis.sort((a, b) => a.preco - b.preco);
        
        exibirOsLivrosNaTela(livrosOrdenados);
    } catch (error) {
        console.error('Erro ao ordenar livros por preço:', error.message);
    }
}