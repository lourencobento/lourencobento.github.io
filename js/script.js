window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  const divs = document.querySelectorAll('animar-scroll');
  // const div = document.querySelector('div');

  if (window.scrollY > 0) {
    // Scroll movimenta
    nav.classList.replace('bg-transparent', 'bg-white/90');
    nav.classList.add('backdrop-blur-xl', 'shadow-sm');
    nav.classList.replace('py-5', 'py-3');  

    divs.forEach(div => div.classList.add('active'));

  } else {
    // Scroll no topo (Reset)
    nav.classList.replace('bg-white/90', 'bg-transparent');
    nav.classList.remove('backdrop-blur-xl', 'shadow-sm');
    nav.classList.replace('py-3', 'py-5'); 
    
    divs.forEach(div => div.classList.remove('active'));
  }

  // if(window.scrollY > 1300) { 
  //   // Section About
  //   divs.forEach(div => {
  //     div.style.opacity = "1";
  //     div.style.transform = "none";
  //   });

  // } else { 
  //   // Section About (Reset)
  //   divs.forEach(div => {
  //     div.style.opacity = "0";
  //     div.style.transform = "translateX(30px)";
  //   }); 
  // }
});