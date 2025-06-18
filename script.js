// Función para cargar el menú
function cargarMenu() {
    fetch('./menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu').innerHTML = data;
        });
}

// Función para cargar el footer
function cargarFooter() {
    fetch('./footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
}

// Llamar a las funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarMenu();
    cargarFooter();
});