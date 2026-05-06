const NOME = "Mateus Oliveira";

let tituloProfissional = "Desenvolvimento de Sistema / Análise de Dados / Teste de Software";

let minhaBio = "Estudante de Desenvolvimento de Sistemas com foco em Front-End, análise de dados e testes de software. Busco oportunidades para aplicar meus conhecimentos na prática e evoluir como profissional.";

let anoFormatura = 2028;

let mesFormatura = 12;
let diaFormatura = 31;

let anoIngresso = 2026;
let mesIngresso = 1;
let diaIngresso = 1;

const DATAATUAL = new Date();

// Data atual
let mesAtual = DATAATUAL.getMonth() + 1;
let anoAtual = DATAATUAL.getFullYear();
let diaAtual = DATAATUAL.getDate();

let indefinido;
let nulo = null;

let curso = {
    nome: "Sistemas de Informação",
    semestre: 3,
    disciplinaAtual: "Design focado no usuário"
};

// Testes de tipo
console.log(typeof nulo); // object
console.log(typeof indefinido); // undefined
console.log(typeof anoFormatura); // number
console.log(typeof minhaBio); // string
console.log(typeof tituloProfissional); // string
console.log(typeof NOME); // string
console.log(typeof curso); // object

document.addEventListener("DOMContentLoaded", function() {

    const nome = document.getElementById("meuNome");
    const titulo = document.getElementById("tituloProfissional");
    const bio = document.getElementById("minhaBio");
    const formatura = document.getElementById("anoFormatura");

    // Cálculo do tempo restante
    const dataFormatura = new Date(anoFormatura, mesFormatura - 1, diaFormatura);
    const diferencaMs = dataFormatura - DATAATUAL;

    const diasTotais = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));
    const mesesRestantes = Math.floor(diasTotais / 30);
    const diasRestantes = diasTotais % 30;

    document.getElementById("tempoRestanteParaFormatura").innerText =
        `Tempo restante para formatura: ${mesesRestantes} meses e ${diasRestantes} dias`;

    // Inserindo dados no HTML
    if (nome) nome.innerText = NOME;
    if (titulo) titulo.innerText = tituloProfissional;
    if (bio) bio.innerText = minhaBio;
    if (formatura) formatura.innerText = "Formatura: " + anoFormatura;

});

// FUNÇÃO FORA do DOMContentLoaded (melhor prática)
function gerarTabuada() {
    const num = document.getElementById("numTabuada").value;
    const resultadoDiv = document.getElementById("resultadoTabuada");

    resultadoDiv.innerHTML = "";

    if (num === "") {
        resultadoDiv.innerHTML = "<p>Por favor, digite um número!</p>";
        return;
    }

    const numero = Number(num);
    let tabela = "<table><thead><tr><th>Operação</th><th>Resultado</th></tr></thead><tbody>";

    for (let i = 1; i <= 10; i++) {
        tabela += `<tr>
            <td>${numero} x ${i}</td>
            <td>${numero * i}</td>
        </tr>`;
    }

    tabela += "</tbody></table>";
    resultadoDiv.innerHTML = tabela;
}