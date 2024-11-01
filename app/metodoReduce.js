function calcularValorTotalDeLivrosDisponiveis(livros) {
    try {
        return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
    } catch (error) {
        console.error('Erro ao calcular valor total:', error.message);
        return '0.00'; 
    }
}