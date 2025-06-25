// Carga automática del menú en todas las páginas con el placeholder
fetch('menu-component.html')
  .then(response => response.text())
  .then(html => {
    const placeholder = document.getElementById('menu-component-placeholder');
    if (placeholder) {
      placeholder.innerHTML = html;
    }
  });
