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

});