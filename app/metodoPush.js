let btnLivrosEsgotados = document.getElementById('btnLivrosEsgotados');
btnLivrosEsgotados.addEventListener('click', mostrarLivrosEsgotados);

function mostrarLivrosEsgotados() {
    let livrosEsgotados = []; 
    
    livros.forEach(livro => {
        if (livro.quantidade === 0) { 
            livrosEsgotados.push(livro); 
        }
    });

    exibirOsLivrosNaTela(livrosEsgotados); 
}

