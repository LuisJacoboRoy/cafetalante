// Carga automática del footer en todas las páginas con el placeholder
fetch('footer-component.html')
  .then(response => response.text())
  .then(html => {
    const placeholder = document.getElementById('footer-component-placeholder');
    if (placeholder) {
      placeholder.innerHTML = html;
    }
  });
