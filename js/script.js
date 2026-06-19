document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menú responsivo desplegable para celulares
    const menuToggleBtn = document.getElementById('menuToggle');
    const navLinksContainer = document.getElementById('navLinks');

    if (menuToggleBtn && navLinksContainer) {
        menuToggleBtn.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });
    }

    // 2. Función automatizada para renderizar la galería
    const generateGallery = (containerId, totalPhotos, folderName) => {
        const galleryContainer = document.getElementById(containerId);
        
        // Solo ejecuta el ciclo si el contenedor existe en la página actual
        if (galleryContainer) {
            for (let index = 1; index <= totalPhotos; index++) {
                const imgElement = document.createElement('img');
                
                // ACTUALIZADO: Ruta modificada para buscar archivos .jpeg
                imgElement.src = `../img/${folderName}/foto${index}.jpeg`;
                imgElement.alt = `Registro fotográfico de ${folderName} número ${index}`;
                imgElement.className = 'galleryPhoto';
                
                // Cuadro gris temporal por si alguna foto falla al cargar o el nombre no coincide
                imgElement.onerror = function() {
                    this.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23cccccc"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="10" fill="%23666666">Foto ${index}</text></svg>`;
                };
                
                galleryContainer.appendChild(imgElement);
            }
        }
    };

    // 3. Llamadas a la función con tus cantidades exactas
    // Carga 19 fotos para Organización
    generateGallery('organizacionGallery', 19, 'organizacion');
    
    // Carga 20 fotos para Mi Experiencia
    generateGallery('experienciaGallery', 20, 'experiencia');
});