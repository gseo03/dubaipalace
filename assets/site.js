
(function(){
  const toggle=document.querySelector('[data-nav-toggle]');
  const menu=document.querySelector('[data-nav-menu]');
  if(toggle&&menu){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu&&menu.classList.contains('open')){menu.classList.remove('open');if(toggle){toggle.setAttribute('aria-expanded','false');toggle.focus();}}});
})();
