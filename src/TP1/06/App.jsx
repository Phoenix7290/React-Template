function encontrarProdutoPorNome () {
    const produto = produtos.filter(produto => produto.categoria === "Eletrônicos");
    return produto;
}

const produtos = [ 
    { nome: "Laptop", categoria: "Eletrônicos" }, 
    { nome: "Camisa", categoria: "Roupas" }, 
    { nome: "Smartphone", categoria: "Eletrônicos" } 
];

const App = () => {
    const produtosFiltrados = encontrarProdutoPorNome();
    console.log(produtosFiltrados);
    return (
        <main>
            <h1>Os produtos com a categoria &quot;Eletrônicos&quot; são:</h1>
            <ul>
                {produtosFiltrados.map((produto)=> (
                    <li key={produto.nome}>{produto.nome}</li>
                ))}
            </ul>
        </main>
    )
}

export default App;