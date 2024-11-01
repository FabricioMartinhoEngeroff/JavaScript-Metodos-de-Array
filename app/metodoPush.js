let btnLivrosEsgotados = document.getElementById('btnLivrosEsgotados');
btnLivrosEsgotados.addEventListener('click', mostrarLivrosEsgotados);

function mostrarLivrosEsgotados() {
    try {
        let livrosEsgotados = [];
        
        livros.forEach(livro => {
            if (livro.quantidade === 0) {
                livrosEsgotados.push(livro);
            }
        });
        
        exibirOsLivrosNaTela(livrosEsgotados);
    } catch (error) {
        console.error('Erro ao mostrar livros esgotados:', error.message);
    }
}

