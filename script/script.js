const NOME = "Mateus Oliveira";
let tituloProfissional = "Desenvolvimento de Sistema / Análise de Dados / Teste de Software";
let minhaBio = "Estudante de Desenvolvimento de Sistemas com foco em Front-End, análise de dados e testes de software. Busco oportunidades para aplicar meus conhecimentos na prática e evoluir como profissional.";
let anoFormatura = "Previsão 2027";
let anoIngresso = 2025;
let indefinido;
let nulo = null;

let curso = {
    nome: "Desenvolvimento de Sistema",
    semestre: 3,
    disciplinaAtual: "Design focado no usuário"
}

console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof anoFormatura);
console.log(typeof minhaBio);
console.log(typeof tituloProfissional);
console.log(typeof NOME);
console.log(typeof curso);

document.addEventListener("DOMContentLoaded", function() {

    const nome = document.getElementById("meuNome");
    const titulo = document.getElementById("tituloProfissional");
    const bio = document.getElementById("minhaBio");
    const formatura = document.getElementById("anoFormatura");

    if (nome) nome.innerText = NOME;
    if (titulo) titulo.innerText = tituloProfissional;
    if (bio) bio.innerText = minhaBio;
    if (formatura) formatura.innerText = "Formatura: " + anoFormatura;

});