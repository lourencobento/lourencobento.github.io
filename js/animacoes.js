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

// MENU MOBILE
const button = document.getElementById("btnMenuHB");
const menu = document.getElementById("menuMobile");
const icon = button.querySelector("svg"); 

button.addEventListener("click", () => {

  // mostra / esconde menu
  menu.classList.toggle("hidden"); 

  // troca ícone
  if (icon.classList.contains("lucide-menu")) {

    icon.classList.replace("lucide-menu", "lucide-x");
    icon.innerHTML = `
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    `;

  } else {

    icon.classList.replace("lucide-x", "lucide-menu");
    icon.innerHTML = `
      <line x1="4" x2="20" y1="12" y2="12"></line>
      <line x1="4" x2="20" y1="6" y2="6"></line>
      <line x1="4" x2="20" y1="18" y2="18"></line>
    `;
  }

});

// ANIMAÇÕES MOVIMENTO SCROL
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