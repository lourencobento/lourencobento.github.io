window.APP_CONFIG = {
  carregado: false,
  contato: {}
};

async function carregarConfig() {
  if (window.APP_CONFIG.carregado) {
    return window.APP_CONFIG;
  }

  const resp = await fetch("./config.json", { cache: "no-cache" });
  if (!resp.ok) {
    throw new Error("Não foi possível carregar config.json");
  }

  const dados = await resp.json();

  window.APP_CONFIG = {
    ...dados,
    carregado: true
  };

  return window.APP_CONFIG;
}