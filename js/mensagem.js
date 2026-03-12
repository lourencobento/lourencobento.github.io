async function carregarConfig() {
    const resp = await fetch("./config.json", { cache: "no-cache" });
    if (!resp.ok) throw new Error("Não foi possível carregar config.json");
    return resp.json();
    } 

async function enviarWpp(event) {
    event.preventDefault(); 

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

    // Mensagem
    let texto = `✨ *Novo contato pelo site* ✨\n\n`;
    texto += `👤 *Nome:* ${nome}\n`;
    texto += `📧 *E-mail:* ${email}\n`;

    if (telefone) {
    texto += `📞 *Telefone:* ${telefone}\n`;
    }

    texto += `🧾 *Serviço de interesse:* ${servicoTexto}\n\n\n`;

    if (mensagem) {
    texto += `💬 *Mensagem:*\n${mensagem}\n`;
    }

    const config = await carregarConfig();
    const numeroWpp = config.contato.whatsapp;

    // const numeroWpp = "5561995690394";
    const url = `https://wa.me/${numeroWpp}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
} 
