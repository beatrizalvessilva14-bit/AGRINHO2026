// Garante que o script rode apenas após o HTML carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. MENU RESPONSIVO (MOBILE) ---
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("open");
        });
    }

    // --- 2. VALIDAÇÃO DO FORMULÁRIO ---
    const formAgrinho = document.querySelector("#form-agrinho");

    if (formAgrinho) {
        formAgrinho.addEventListener("submit", (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário

            const nome = document.querySelector("#nome").value.trim();
            const email = document.querySelector("#email").value.trim();
            const mensagem = document.querySelector("#mensagem").value.trim();

            // Validação simples de campos vazios
            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos obrigatórios.");
                return;
            }

            // Exemplo de feedback de sucesso
            alert(`Obrigado pelo contato, ${nome}! Sua mensagem sobre o Agrinho 2026 foi enviada.`);
            formAgrinho.reset(); // Limpa os campos do formulário
        });
    }

    // --- 3. ANIMAÇÃO DE ELEMENTOS AO ROLAR A PÁGINA (SCROLL) ---
    const elementosAnimados = document.querySelectorAll(".animar-scroll");

    const animarAoRolar = () => {
        const topoJanela = window.scrollY + (window.innerHeight * 0.85);

        elementosAnimados.forEach((elemento) => {
            if (topoJanela > elemento.offsetTop) {
                elemento.classList.add("animado");
            }
        });
    };

    // Executa a função ao rolar a página
    if (elementosAnimados.length > 0) {
        window.addEventListener("scroll", animarAoRolar);
        animarAoRolar(); // Executa uma vez para checar elementos já visíveis
    }
});
<script src="script.js"></script>

