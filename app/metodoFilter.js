const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    try {
        const elementoBtn = document.getElementById(this.id);
        if (!elementoBtn) throw new Error('Botão não encontrado.');
        
        const categoria = elementoBtn.value;
        let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : FiltrarPorCategoria(categoria);
        
        exibirOsLivrosNaTela(livrosFiltrados);
        
        if (categoria == 'disponivel') {
            const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
            exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
        }
    } catch (error) {
        console.error('Erro ao filtrar livros:', error.message);
    }
}

function FiltrarPorCategoria(categoria) {
    try {
        if (!categoria) throw new Error('Categoria não pode ser vazia.');
        return livros.filter(livro => livro.categoria === categoria);
    } catch (error) {
        console.error('Erro ao filtrar por categoria:', error.message);
        return []; 
    }
}

function filtrarPorDisponibilidade() {
    try {
        return livros.filter(livro => livro.quantidade > 0);
    } catch (error) {
        console.error('Erro ao filtrar por disponibilidade:', error.message);
        return []; 
    }
}