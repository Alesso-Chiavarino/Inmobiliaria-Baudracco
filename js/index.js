const enlace1 = document.getElementById('enlace1');
const enlace2 = document.getElementById('enlace2');
const index = document.getElementById('index');
const lista = document.getElementById('liso');

const cargarBorde = () => {
    console.log("ejecuta");
    enlace1.classList.add('nashei');

};

const observador = new IntersectionObserver(cargarBorde, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
});

observador.observe(index);



// loader

bodyy.style.backgroundColor = '#000'
bodyy.style.opacity = '0.7'

window.onload = function() {
	bodyy.style.opacity = '1'
	bodyy.style.backgroundColor = '#fff'
    $('#onload').fadeOut();
}

// const resize = () => {
//     if (innerWidth < 768) {
//         // body.classList.removeClass('hidden')
//         // onload.classList.removeClass('centrado')
//         uno.classList.remove('loadingio-spinner-double-ring-8klz9uupyd')
//         dos.classList.remove('ldio-6k96ilatv2t')
//     }
// }

// addEventListener('resize', resize)
// addEventListener('DOMContentLoaded', resize)