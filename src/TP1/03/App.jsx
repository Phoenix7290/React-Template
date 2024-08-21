function calcularMediaAvaliacoes () {
    const avaliacoes = [10, 9, 8, 7, 6];
    let valorInicial = 0;
    const soma = avaliacoes.reduce(
        (acumulador, valorAtual) => acumulador + valorAtual,
        valorInicial,
    );

    return soma/avaliacoes.length;
}

const App = () => {
    const valor = calcularMediaAvaliacoes();
    return (
        <div>
            <h1>O valor de todas as médias das avaliações é:</h1>
            <h1>{valor}</h1>
        </div>
    )
}

export default App;