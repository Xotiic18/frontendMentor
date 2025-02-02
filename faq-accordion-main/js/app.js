//Variables
const btnFAQ = document.querySelectorAll('.icono');


btnFAQ.forEach(icono => {
    icono.addEventListener('click',mostrarFAQ);
});

function mostrarFAQ(e) {
    const mostrar = e.target; //Icono
    // console.log(mostrar);
    const faq = mostrar.parentElement; //Padre (div)
    // console.log(faq);
    const txtFAQ = faq.nextElementSibling; //texto
    // console.log(txtFAQ);
    txtFAQ.classList.toggle('eliminar'); //toggle = eliminar

    const iconoMostrarMenos = e.target;

    if(iconoMostrarMenos.getAttribute('src') === 'assets/images/icon-plus.svg'){
        iconoMostrarMenos.setAttribute('src', 'assets/images/icon-minus.svg')
    }else{
        iconoMostrarMenos.setAttribute('src', 'assets/images/icon-plus.svg')

    }
    
}
