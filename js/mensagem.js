// async function enviarWpp(event) {
//     event.preventDefault(); 

//     const config = await carregarConfig();
//     const numeroWpp = config.contato.whatsapp;

//     if (!numeroWpp) {
//         alert("Ocorreu um erro durante o carregamento das informações de contato. Atualize a página e tente novamente.");
//         return;
//     }

//     // Informações da mensagem
//     const nome = document.getElementById("nome").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const telefone = document.getElementById("telefone").value.trim();
//     const servico = document.getElementById("servico").value;
//     const mensagem = document.getElementById("mensagem").value.trim();

//     const servicosMap = {
//         consultoria_pessoal: "Consultoria de Imagem Pessoal",
//         coloracao_pessoal: "Coloração Pessoal",
//         personal_shopper: "Personal Shopper",
//         closet_detox: "Closet Detox",
//         consultoria_corporativa: "Consultoria Corporativa",
//         outro: "Outro"
//     };

//     const servicoTexto = servicosMap[servico] || "Não informado";

//     // Mensagem
//     let texto = `✨ *Novo contato pelo site* ✨\n\n`;
//     texto += `👤 *Nome:* ${nome}\n`;
//     texto += `📧 *E-mail:* ${email}\n`;

//     if (telefone) {
//     texto += `📞 *Telefone:* ${telefone}\n`;
//     }

//     texto += `🧾 *Serviço de interesse:* ${servicoTexto}\n\n\n`;

//     if (mensagem) {
//     texto += `💬 *Mensagem:*\n${mensagem}\n`;
//     }

//     // Envio
//     const url = `https://wa.me/${numeroWpp}?text=${encodeURIComponent(texto)}`;

//   window.open(url, "_blank");
// }   

async function enviarWpp(event) {
  event.preventDefault();

  const botao = document.getElementById("btnEnviar");
  const textoOriginal = botao.innerHTML;

  // Estados visuais
  const setLoading = () => {
    botao.disabled = true;
    botao.innerHTML = "Enviando...";
    botao.classList.add("opacity-70", "cursor-not-allowed");
  };

  const setSucesso = () => {
    botao.innerHTML = "Mensagem pronta!";
    botao.classList.remove("opacity-70", "text-white");
    botao.classList.replace("bg-[#B5885A]", "setSuccess");
    botao.classList.replace("hover:bg-[#A07548]", "setSuccess:hover");
  };

  const setErro = () => {
    botao.innerHTML = "Erro ao enviar";
    botao.classList.remove("opacity-70", "text-white");
    botao.classList.replace("bg-[#B5885A]", "setFail");
    botao.classList.replace("hover:bg-[#A07548]", "setFail:hover");
    // botao.classList.add("bg-[#000000]"); 
  };

  const resetBotao = () => {
    setTimeout(() => {
      botao.disabled = false;
      botao.innerHTML = textoOriginal;
    //   botao.className = botao.className.replace(/bg-\w+-\d+/g, "");
      botao.classList.remove("setSuccess", "setSuccess:hover", "setFail", "setFail:hover");
      botao.classList.add("text-white", "bg-[#B5885A]", "hover:bg-[#A07548]");
    }, 5000);
  };

  try {
    setLoading();

    // Dados do formulário
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const servico = document.getElementById("servico").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    const servicosMap = {
      consultoria_pessoal: "Consultoria de Imagem Pessoal",
      coloracao_pessoal: "Coloração Pessoal",
      personal_shopper: "Personal Shopper",
      closet_detox: "Closet Detox",
      consultoria_corporativa: "Consultoria Corporativa",
      outro: "Outro"
    };

    const servicoTexto = servicosMap[servico] || "Não informado";

    let texto = `✨ *Novo contato pelo site* ✨\n\n`;
    texto += `👤 *Nome:* ${nome}\n`;
    texto += `📧 *E-mail:* ${email}\n`;
    if (telefone) texto += `📞 *Telefone:* ${telefone}\n`;
    texto += `🧾 *Serviço:* ${servicoTexto}\n\n`;
    if (mensagem) texto += `💬 *Mensagem:*\n${mensagem}\n`;

    // Carrega config
    const config = await carregarConfig();
    const numeroWpp = config?.contato?.whatsapp;

    if (!numeroWpp) {
      throw new Error("WhatsApp não configurado");
    }

    const url = `https://wa.me/${numeroWpp}?text=${encodeURIComponent(texto)}`;

    setTimeout(() => {
      window.open(url, "_blank");
    }, 3000);

    setSucesso();
    resetBotao();

  } catch (erro) {
    console.error(erro);
    setErro();
    resetBotao();
  }
}