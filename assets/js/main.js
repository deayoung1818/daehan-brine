(function(){
  const cards = Array.from(document.querySelectorAll('.gallery-card'));
  const box = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const title = document.getElementById('lightboxTitle');

  window.openLightbox = function(index){
    const card = cards[index];
    if(!card || !box || !img) return;
    const thumb = card.querySelector('img');
    const caption = card.querySelector('.gallery-caption b');
    img.src = thumb ? thumb.src : '';
    img.alt = thumb ? thumb.alt : '';
    if(title) title.textContent = caption ? caption.textContent : (thumb ? thumb.alt : '');
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeLightbox = function(event){
    if(event && event.target && !event.target.classList.contains('lightbox') &&
       !event.target.classList.contains('lightbox-close')) return;
    if(box) box.classList.remove('open');
    document.body.style.overflow = '';
  };

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && box && box.classList.contains('open')){
      box.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
})();
