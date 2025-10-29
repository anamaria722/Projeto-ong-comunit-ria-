// Sistema de SPA simples (carrega páginas sem recarregar o site)
document.querySelectorAll("a[data-page]").forEach(link => {
    link.addEventListener("click", async e => {
        e.preventDefault();
        const page = e.target.getAttribute("data-page");
        const response = await fetch(`${page}.html`);
        const content = await response.text();
        document.getElementById("conteudo").innerHTML = content;
        if (page === "cadastro") initFormValidation(); // ativa JS do formulário
    });
});

// Função de validação do formulário
function initFormValidation() {
    const form = document.getElementById("cadastroForm");
    form.addEventListener("submit", e => {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const cpf = document.getElementById("cpf").value.trim();
        const telefone = document.getElementById("telefone").value.trim();

        if (!nome || !email || !cpf || !telefone) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
            alert("CPF inválido. Use o formato 000.000.000-00.");
            return;
        }

        if (!/^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(telefone)) {
            alert("Telefone inválido. Use o formato (00) 90000-0000.");
            return;
        }

        alert("Cadastro realizado com sucesso!");
        form.reset();
    });
}
