document.getElementById('menu-icon').addEventListener('click', function() {
    this.classList.toggle('active');
    var navMenu = document.getElementById('nav-menu');
    if (this.classList.contains('active')) {
        navMenu.style.visibility = 'visible';
        navMenu.style.opacity = '1';
        navMenu.style.transform = 'translateX(0)';
    } else {
        navMenu.style.opacity = '0';
        navMenu.style.transform = 'translateX(-100%)';
        setTimeout(function() {
            if (!document.getElementById('menu-icon').classList.contains('active')) {
                navMenu.style.visibility = 'hidden';
            }
        }, 300); // Asegura que la visibilidad cambie después de que la animación de cierre ha terminado
    }
});

document.getElementById('logo').addEventListener('mouseover', function() {
    this.parentElement.style.transform = "scale(1.2)";
});

document.getElementById('logo').addEventListener('mouseout', function() {
    this.parentElement.style.transform = "scale(1)";
});

document.querySelectorAll('.menu-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var target = this.getAttribute('data-target');
        document.querySelectorAll('.section').forEach(function(section) {
            section.classList.add('hidden');
        });
        document.getElementById(target).classList.remove('hidden');
    });
});

document.querySelectorAll('.toggle-image').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        var img = this.nextElementSibling;
        if (img.classList.contains('hidden')) {
            img.classList.remove('hidden');
            img.classList.add('visible');
            this.textContent = '▼';
        } else {
            img.classList.remove('visible');
            img.classList.add('hidden');
            this.textContent = '▶';
        }
    });
});

// Funcionalidad para el modal de compras
document.querySelectorAll('.shop-image').forEach(function(image) {
    image.addEventListener('click', function() {
        var modal = document.getElementById('purchase-modal');
        modal.classList.remove('hidden');
    });
});

document.getElementById('accept-button').addEventListener('click', function() {
    alert('Has comprado');
    var modal = document.getElementById('purchase-modal');
    modal.classList.add('hidden');
});

document.getElementById('reject-button').addEventListener('click', function() {
    var modal = document.getElementById('purchase-modal');
    modal.classList.add('hidden');
});