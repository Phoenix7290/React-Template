function verificarEstoque () {
    const produto = produtos.filter(produto => produto.quantidadeEmEstoque !== 0);
    return produto;
}

const produtos = [ 
    { nome: "Laptop", quantidadeEmEstoque: 5 }, 
    { nome: "Tablet", quantidadeEmEstoque: 0 }, 
    { nome: "Smartphone", quantidadeEmEstoque: 3 } 
];

const App = () => {
    const produtoEmEstoque = verificarEstoque();
    console.log(produtoEmEstoque);
    return (
        <main>
            <h1>Produtos em Estoque:</h1>
            <ul>
                {produtoEmEstoque.map((produto) => (
                    <li key={produto.nome}>{produto.nome}</li>
                ))}
            </ul>
        </main>
    )
}

export default App;