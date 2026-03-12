const formulario = document.getElementById('meuFormulario');

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const mensagem = document.getElementById("mensagem");

// CAMPO NOME
nome.addEventListener('input', (e) => {
    nome.classList.remove('validated-invalid');
    nome.setCustomValidity("");

    // Mask
    e.target.value = e.target.value.replace(/[0-9]/g, "");
});

// CAMPO E-MAIL
email.addEventListener('input', () => {
    mensagem.classList.remove('validated-invalid');
    mensagem.setCustomValidity("");
});

// CAMPO TELEFONE
telefone.addEventListener('input', (e) => {
    telefone.classList.remove('validated-invalid');

    // Mask
    let v = e.target.value.replace(/\D/g, "");
    if (v.length > 11) v = v.slice(0, 11);
    if (v.length > 2) v = "(" + v.slice(0, 2) + ") " + v.slice(2);
    if (v.length > 9) v = v.slice(0, 10) + "-" + v.slice(10);
    e.target.value = v;

    // Reset no navegador
    const apenasNumeros = v.replace(/\D/g, "");
    if (apenasNumeros.length === 11) {
        telefone.setCustomValidity("");
    }
});

// CAMPO MENSAGEM
mensagem.addEventListener('input', (e) => {
    mensagem.classList.remove('validated-invalid');
    nome.setCustomValidity("");
})

// Validações
formulario.addEventListener('submit', (e) => {
    const valorNome = nome.value.trim();
    const partesNome = valorNome.split(/\s+/);
    const primeiroNome = partesNome[0] || "";
    const sobreNome = partesNome.slice(1).join(" ");
    const apenasNumeros = telefone.value.replace(/\D/g, "");
    const texto = mensagem.value.trim();

    // NOME
    if (partesNome.length < 2 || primeiroNome.length <= 2 || sobreNome.length <= 2) {
        e.preventDefault(); // Não envia

        nome.classList.add('validated-invalid');
        nome.setCustomValidity("Por favor, insira seu nome completo.");
        nome.focus();
    } else {
        nome.classList.remove('validated-invalid');
        nome.setCustomValidity("");
    }

    // E-MAIL
    if (!email.checkValidity()) {
        e.preventDefault(); // Não envia

        email.classList.add('validated-invalid');
        email.focus();
    } else {
        email.classList.remove('validated-invalid');
    }

    // TELEFONE
    if ((apenasNumeros.length !== 11) && (apenasNumeros.length > 0)) {
        e.preventDefault(); // Não envia

        telefone.classList.add('validated-invalid');
        telefone.setCustomValidity("Número incompleto");
        telefone.focus();
    } else {
        telefone.classList.remove('validated-invalid');
        telefone.setCustomValidity("");
    }

    // MENSAGEM
    if (texto.length < 10) {
        e.preventDefault();
        mensagem.classList.add("validated-invalid");
        mensagem.setCustomValidity("Mensagem muito curta");
        mensagem.focus();
    } else if (texto.length > 300) {
        e.preventDefault();
        mensagem.classList.add("validated-invalid");
        mensagem.setCustomValidity("Mensagem muito longa");
        mensagem.focus();
    } else {
        mensagem.classList.remove('validated-invalid');
        mensagem.setCustomValidity("");
    }
}); 