function agruparPorCategoria (produtos) {
    const produto = produtos.reduce((acc, produto) => {
        const { categoria } = produto;
        if (!acc[categoria]) {
            acc[categoria] = [];
        }
        acc[categoria].push(produto);
        return acc;
    }, {});
    return produto;
}

const produtos = [ 
    { nome: "Laptop", categoria: "Eletrônicos" }, 
    { nome: "Camisa", categoria: "Roupas" }, 
    { nome: "Smartphone", categoria: "Eletrônicos" }, 
    { nome: "Calça", categoria: "Roupas" }, 
    { nome: "Fone de Ouvido", categoria: "Eletrônicos" } 
];

const App = () => {
    const produtosAgrupados = agruparPorCategoria(produtos);
    console.log(produtosAgrupados);
    return (
        <main>
            <h1>Produtos Agrupados por categoria:</h1>
            {Object.keys(produtosAgrupados).map(categoria => (
                <div key={categoria}>
                    <h2>{categoria}</h2>
                    <ul>
                        {produtosAgrupados[categoria].map(produto => (
                            <li key={produto.nome}>{produto.nome}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </main>
    )
}

export default App;