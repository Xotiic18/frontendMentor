const contenedorNumeros = document.querySelector('.numeros-rating');
const contenedorRating = document.querySelector('.card-1');
const contenedorGracias = document.querySelector('.card-2');
const btnEnviar = document.querySelector('.boton-enviar');
const mostrarRating = document.querySelector('#valor-rating');

contenedorNumeros.addEventListener('click', (e) => {
    e.preventDefault();
    const valorRating = e.target.textContent;

    btnEnviar.addEventListener('click', (e) => {
        if(valorRating != ''){
            contenedorRating.classList.add('d-none');
            contenedorGracias.classList.remove('d-none');
            mostrarRating.textContent = valorRating;
        }
    });
});
