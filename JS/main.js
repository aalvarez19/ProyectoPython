document.querySelector("head").innerHTML = `
    <link rel="stylesheet" href="./css/estilos.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">
    <link rel="icon" sizes="180x180" href="./img/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./img/favicon/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <script src="https://kit.fontawesome.com/acfa384147.js" crossorigin="anonymous"></script>
`;


document.querySelector("header").innerHTML = `
<nav>
<a href="index.html">Home</a>
<a href="excursiones.html">Excursiones</a>
<a href="interes.html">Sitios de interés</a>
<a href="tarifas.html">Tarifas y horarios</a>
<a href="contacto.html" class="botonLogin">Contacto</a>
</nav>
`;

document.querySelector(".box-redes").innerHTML = `
    <div class="box-redes">
        <a href="https://www.instagram.com/"><i class="fab fa-instagram" style="color: white;"></i></a>
        <a href="https://www.facebook.com/"><i class="fab fa-facebook-f" style="color: white;"></i></a>
        <a href="https://www.twitter.com/"><i class="fab fa-twitter" style="color: white;"></i></a>
    </div>
`;

document.querySelector("footer").innerHTML = `
    <br>
    <p>Sitio desarrollado en Codo a Codo</p>
    <br>
`;


//PAGINA DE CONTACTO
document.addEventListener('DOMContentLoaded', function() {
    var selectPais = document.getElementById('pais');

    // Fetch para obtener la lista de países desde la API
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        // Iteracion sobre los datos de los países 
                        if (country.name) {
                var option = document.createElement('option');
                option.value = country.name.common;
                option.textContent = country.name.common;
                selectPais.appendChild(option);
            }
        });
    })
    .catch(error => {
        console.error('Error al obtener la lista de países:', error);
    });

    // Validacion del formulario
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var email = document.getElementById('email').value;
        var pais = document.getElementById('pais').value;
        var consulta = document.getElementById('consulta').value;

        if (!nombre || !apellido || !email || !pais || !consulta) {
            alert('Por favor, completa todos los campos obligatorios.');
            event.preventDefault();
        }
    });
