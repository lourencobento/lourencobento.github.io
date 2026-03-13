function scrollSuave(destino, duracao = 1500) {

    const alvo = document.querySelector(destino);
    if (!alvo) return;

    const inicio = window.pageYOffset;
    const fim = alvo.getBoundingClientRect().top + inicio;
    const distancia = fim - inicio;

    let inicioTempo = null;

    function animacaoScroll(tempoAtual) {

        if (!inicioTempo) inicioTempo = tempoAtual;

        const tempoDecorrido = tempoAtual - inicioTempo;
        const progresso = Math.min(tempoDecorrido / duracao, 1);

        window.scrollTo(0, inicio + distancia * ease(progresso));

        if (tempoDecorrido < duracao) {
            requestAnimationFrame(animacaoScroll);
        }

    }

    function ease(t) {
        return t < 0.5
            ? 2 * t * t
            : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    requestAnimationFrame(animacaoScroll);

}

// Ativa para todos os links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {

        const destino = this.getAttribute("href");
        if (destino === "#") return;

        e.preventDefault();
        scrollSuave(destino, 1500);

    });
}); 