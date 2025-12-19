// Simple mobile menu toggle
(function(){
  const btns = document.querySelectorAll('.menu-btn');
  function toggle(e){
    const expanded = document.body.classList.toggle('nav-open');
    btns.forEach(b=>b.setAttribute('aria-expanded', expanded));
  }
  btns.forEach(b=>b.addEventListener('click', toggle));

  // Close nav when a nav link is clicked (mobile)
  document.addEventListener('click', function(e){
    if(!e.target.closest('nav') && !e.target.closest('.menu-btn')) return;
    if(e.target.closest('nav') && e.target.tagName === 'A'){
      document.body.classList.remove('nav-open');
      btns.forEach(b=>b.setAttribute('aria-expanded', 'false'));
    }
  });
})();

