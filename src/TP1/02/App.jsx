function filtrarDisponiveis(produtos) {
  return produtos.filter(produto => produto.disponivel);
}

const produtos = [ 
  { nome: "Laptop", disponivel: true }, 
  { nome: "Tablet", disponivel: false }, 
  { nome: "Smartphone", disponivel: true } 
];

console.log(produtos);

const App = () => {
    const produtosDisponiveis = filtrarDisponiveis(produtos);
    console.log(produtosDisponiveis);
    return (
        <main>
            <h1>Produtos Disponíveis</h1>
            <ul>
                {produtosDisponiveis.map(produto => (
                    <li key={produto.nome}>{produto.nome}</li>
                ))}
            </ul>
        </main>
    )
}

export default App;