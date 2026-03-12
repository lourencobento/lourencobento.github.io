document.addEventListener("DOMContentLoaded", async () => {

    const config = await carregarConfig();
    const elementos = document.querySelectorAll("[data-config]");

    elementos.forEach(el => {

        const caminho = el.dataset.config.split(".");
        let valor = config;

        caminho.forEach(chave => {
        valor = valor[chave];
        });

        if (valor !== undefined) {
        el.textContent = valor;
        }

    });

    // LINK (WhatsApp 1)
    document.querySelectorAll("[data-config-href]").forEach(el => {

        const caminho = el.dataset.configHref.split(".");
        let valor = config;

        caminho.forEach(chave => valor = valor[chave]);

        if (valor !== undefined) {
        el.href = `https://wa.me/${valor}`;
        }

    });

    // LINK (WhatsApp 2)
    document.querySelectorAll("[data-config-href-wpp]").forEach(el => {

        const caminho = el.dataset.configHrefWpp.split(".");
        let valor = config;

        caminho.forEach(chave => valor = valor[chave]);

        if (valor !== undefined) {
        el.href = `https://wa.me/${valor}?text=Olá! Gostaria de saber mais sobre a consultoria de imagem.`; 
        }

    });

    // LINK (Telefone)
    document.querySelectorAll("[data-config-href-telefone]").forEach(el => {

        const caminho = el.dataset.configHrefTelefone.split(".");
        let valor = config;

        caminho.forEach(chave => valor = valor[chave]);

        if (valor !== undefined) {
        el.href = `tel:+${valor}`;
        }

    });

    // LINK (Email)
    document.querySelectorAll("[data-config-href-email]").forEach(el => {

        const caminho = el.dataset.configHrefEmail.split(".");
        let valor = config;

        caminho.forEach(chave => valor = valor[chave]);

        if (valor !== undefined) {
        el.href = `mailto:${valor}`;
        }

    });

    // LINK (Instagram)
    document.querySelectorAll("[data-config-href-instagram]").forEach(el => {

        const caminho = el.dataset.configHrefInstagram.split(".");
        let valor = config;

        caminho.forEach(chave => valor = valor[chave]);

        if (valor !== undefined) {
        el.href = `https://instagram.com/${valor}`;
        }

    });

});