// theme.js

// Alterna o tema e atualiza o botão
function toggleTheme() {
    const body = document.body;
    const btn = document.querySelector(".theme-toggle");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        if (btn) btn.textContent = "☀️"; // modo escuro ativo, mostra sol
    } else {
        localStorage.setItem("theme", "light");
        if (btn) btn.textContent = "🌙"; // modo claro ativo, mostra lua
    }
}

// Aplica o tema salvo ao carregar qualquer página
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".theme-toggle");
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        if (btn) btn.textContent = "☀️";
    } else {
        if (btn) btn.textContent = "🌙";
    }
});