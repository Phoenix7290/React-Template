const produtos = [ 
    { nome: "Laptop", preco: 1000 }, 
    { nome: "Tablet", preco: 400 }, 
    { nome: "Smartphone", preco: 1500 } 
];

function filtrarAcimaPreco (produtos, preco) {
    return produtos.filter(produto => produto.preco > preco);
}

const App = () => {
    const produtosFiltrados = filtrarAcimaPreco(produtos, 600);
    console.log(produtosFiltrados);
    return (
        <div>
            <h1>Os produtos com preço acima de 600 são:</h1>
            <ul>
                {produtosFiltrados.map((produto) => (
                    <li key={produto.nome}>{produto.nome}</li>
                ))}
            </ul>
        </div>
    )
}

export default App;