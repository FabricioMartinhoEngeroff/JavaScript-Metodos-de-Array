let btnLivrosMaisBaratos = document.getElementById('btnLivrosBaratos');
btnLivrosMaisBaratos.addEventListener('click', mostrarLivrosMaisBaratos);

function mostrarLivrosMaisBaratos() {

    let livrosDisponiveis = filtrarPorDisponibilidade();
    
    let livrosMaisBaratos = livrosDisponiveis.sort((a, b) => a.preco - b.preco)
                                              .slice(0, 5);
    
    exibirOsLivrosNaTela(livrosMaisBaratos);
}

