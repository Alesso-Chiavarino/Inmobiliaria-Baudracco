const enlace5 = document.getElementById('enlace5');
const contacto = document.getElementById('contacto');

const cargarBorde = () => {
    console.log("ejecuta")
    enlace1.classList.remove('nashei')
    enlace5.classList.add('nashei')

};

const observador = new IntersectionObserver(cargarBorde, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
});

observador.observe(contacto);



window.onload = function() {
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
}