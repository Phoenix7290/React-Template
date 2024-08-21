function encontrarProdutoPorNome (produtos, nome) {
    const produto = produtos.find((produto) => produto.nome === nome);
    return produto;
}

const produtos = [ 
    { nome: "Laptop", preco: 1000 }, 
    { nome: "Tablet", preco: 400 }, 
    { nome: "Smartphone", preco: 1500 } 
    ];

const App = () => {
    const produtoAchado = encontrarProdutoPorNome(produtos, "Laptop");
    console.log(produtoAchado);
    console.log(produtoAchado);
    return (
        <main>
            <h1>Produto encontrado:</h1>
            <p>Nome: {produtoAchado.nome}</p>
        </main>
    )
}

export default App;