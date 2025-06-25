// Galería tipo acordeón y modal de imagen

document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.gallery-wrap .item');
  items.forEach(item => {
    item.addEventListener('mouseenter', function() {
      items.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
    item.addEventListener('touchstart', function() {
      items.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
    // Modal de vista de imagen
    item.addEventListener('click', function() {
      const imgSrc = this.getAttribute('data-img');
      const modalImg = document.getElementById('modalImage');
      if(modalImg && imgSrc) {
        modalImg.src = imgSrc;
        const modal = new bootstrap.Modal(document.getElementById('imgModal'));
        modal.show();
      }
    });
  });
  // Activar el primer item por defecto
  if(items.length > 0) items[0].classList.add('active');
});
