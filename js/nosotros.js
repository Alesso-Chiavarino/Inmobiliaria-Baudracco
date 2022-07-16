const enlace4 = document.getElementById('enlace4');
const nosotros = document.getElementById('nosotros');

const cargarBorde = () => {
    console.log("ejecuta")
    enlace1.classList.remove('nashei')
    enlace4.classList.add('nashei')
};

const observador = new IntersectionObserver(cargarBorde, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
});

observador.observe(nosotros);


// window.onload = function() {
//     $('#onload').fadeOut();
//     $('body').removeClass('hidden');
// }