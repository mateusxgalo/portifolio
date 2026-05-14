/* ============================================================
   script.js — Portfólio Mateus Oliveira
   ============================================================ */

// ──────────────────────────────────────────────
// DADOS DO PORTFÓLIO
// ──────────────────────────────────────────────
const NOME = "Mateus Oliveira";

const tituloProfissional =
  "Desenvolvedor Front-End · Designer de UI/UX · Analista de Dados";

const minhaBio =
  "Estudante de Sistemas de Informação com foco em Front-End, UI/UX e " +
  "análise de dados. Busco oportunidades para aplicar meus conhecimentos " +
  "na prática e evoluir como profissional.";

// Data de formatura
const DATA_FORMATURA = new Date(2028, 11, 31, 23, 59, 59); // 31/12/2028

// Curso atual
const curso = {
  nome: "Sistemas de Informação",
  semestre: 3,
  disciplinaAtual: "Design focado no usuário",
  anoIngresso: 2026,
  mesIngresso: 1,
};

// ──────────────────────────────────────────────
// CONTADOR REGRESSIVO — FORMATURA
// ──────────────────────────────────────────────
function atualizarContagem() {
  const agora = new Date();
  const diff = DATA_FORMATURA - agora;

  if (diff <= 0) {
    // Já formou!
    const els = ["cdMeses", "cdDias", "cdHoras", "statMeses"];
    els.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = "0";
    });
    return;
  }

  const totalDias    = Math.floor(diff / 86400000);
  const meses        = Math.floor(totalDias / 30);
  const dias         = totalDias % 30;
  const horas        = Math.floor((diff % 86400000) / 3600000);

  const setEl = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setEl("cdMeses",   meses);
  setEl("cdDias",    dias);
  setEl("cdHoras",   horas);
  setEl("statMeses", meses + "m");
}

// Atualiza imediatamente e depois a cada minuto
atualizarContagem();
setInterval(atualizarContagem, 60000);

// ──────────────────────────────────────────────
// ABAS DE HABILIDADES
// ──────────────────────────────────────────────

/**
 * Exibe o painel de habilidades correspondente à aba clicada.
 * @param {string} painel - ID do painel sem o prefixo "panel-"
 * @param {HTMLElement} btn - Botão clicado
 */
function showSkills(painel, btn) {
  // Remove active de todos os painéis e abas
  document.querySelectorAll(".skills-panel").forEach((p) =>
    p.classList.remove("active")
  );
  document.querySelectorAll(".skill-tab").forEach((t) =>
    t.classList.remove("active")
  );

  // Ativa o painel e o botão corretos
  const target = document.getElementById("panel-" + painel);
  if (target) target.classList.add("active");
  btn.classList.add("active");
}

// Torna a função global (chamada via onclick no HTML)
window.showSkills = showSkills;

// ──────────────────────────────────────────────
// TABUADA INTERATIVA
// ──────────────────────────────────────────────

/**
 * Gera a tabuada do número digitado e renderiza os cards.
 */
function gerarTabuada() {
  const input       = document.getElementById("numTabuada");
  const resultadoDiv = document.getElementById("resultadoTabuada");

  resultadoDiv.innerHTML = "";

  if (!input || input.value.trim() === "") {
    resultadoDiv.innerHTML =
      '<p style="color:var(--muted);font-size:13px">Digite um número primeiro!</p>';
    return;
  }

  const numero = Number(input.value);

  if (isNaN(numero)) {
    resultadoDiv.innerHTML =
      '<p style="color:var(--muted);font-size:13px">Por favor, insira um número válido.</p>';
    return;
  }

  for (let i = 1; i <= 10; i++) {
    const item = document.createElement("div");
    item.className = "tab-item";
    item.style.animationDelay = i * 0.05 + "s";
    item.innerHTML = `
      <span class="tab-op">${numero} × ${i} =</span>
      <span class="tab-res">${numero * i}</span>
    `;
    resultadoDiv.appendChild(item);
  }
}

// Torna a função global (chamada via onclick no HTML)
window.gerarTabuada = gerarTabuada;

// Permite pressionar Enter no input da tabuada
document.addEventListener("DOMContentLoaded", function () {
  const inputTabuada = document.getElementById("numTabuada");
  if (inputTabuada) {
    inputTabuada.addEventListener("keydown", function (e) {
      if (e.key === "Enter") gerarTabuada();
    });
  }
});

// ──────────────────────────────────────────────
// ANIMAÇÕES DE SCROLL (Intersection Observer)
// ──────────────────────────────────────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ──────────────────────────────────────────────
// LOGS DE DIAGNÓSTICO (apenas em desenvolvimento)
// ──────────────────────────────────────────────
console.log("=== Portfólio carregado ===");
console.log("Nome:", NOME);
console.log("Título:", tituloProfissional);
console.log("Curso:", curso.nome, "— Semestre", curso.semestre);
console.log("Disciplina atual:", curso.disciplinaAtual);
console.log("Data de formatura:", DATA_FORMATURA.toLocaleDateString("pt-BR"));
