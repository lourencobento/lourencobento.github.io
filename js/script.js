// MENU
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');  

  if (window.scrollY > 0) {
    // Scroll movimenta
    nav.classList.replace('bg-transparent', 'bg-white/90');
    nav.classList.add('backdrop-blur-xl', 'shadow-sm');
    nav.classList.replace('py-5', 'py-3');   

  } else {
    // Scroll no topo (Reset)
    nav.classList.replace('bg-white/90', 'bg-transparent');
    nav.classList.remove('backdrop-blur-xl', 'shadow-sm');
    nav.classList.replace('py-3', 'py-5'); 
    
    divs.forEach(div => div.classList.remove('active'));
  } 
   
});

// ANIMAÇÕES
const observerOptions = {
  root: null, // usa a tela inteira como referência
  threshold: 0.2 // ativa quando 20% da div estiver visível
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      // Opcional: remove a classe ao subir a página para re-animar depois
      entry.target.classList.remove('active');
    }
  });
}, observerOptions);

// Seleciona todas as divs com a classe e começa a observar
document.querySelectorAll('.animar-scroll').forEach(div => {
  observer.observe(div);
});