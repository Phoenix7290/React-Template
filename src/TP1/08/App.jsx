function calcularTotalItens  (itens) {
    const valor = itens.reduce((total, item) => {
    return total + item.quantidade * item.precoUnitario;
    }, 0);
    return valor;
}

const itens = [ 
    { nome: "Laptop", quantidade: 1, precoUnitario: 1000 }, 
    { nome: "Tablet", quantidade: 2, precoUnitario: 400 }, 
    { nome: "Smartphone", quantidade: 1, precoUnitario: 1500 } 
];

const App = () => {
    const valorTotal = calcularTotalItens(itens);
    console.log(valorTotal);
    return (
        <main>
            <h1>O valor total dos itens do carrinho é:</h1>
            <ul>
                <li>{valorTotal}</li>
            </ul>
        </main>
    )
}

export default App;