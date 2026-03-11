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
const Opcoes = {
  root: null, // tela 
  threshold: 0.2 // 20% da div
};

const visao = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } // else { 
    //   entry.target.classList.remove('active');
    // }
  });
}, Opcoes);

// divs 
document.querySelectorAll('.animar-scroll').forEach(div => {
  visao.observe(div);
});