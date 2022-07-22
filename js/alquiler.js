const enlace3 = document.getElementById('enlace3');
const alquiler = document.getElementById('alquiler');
let bodyy = document.getElementById('bodyy');

const cargarBorde = () => {
    console.log("ejecuta")
    enlace1.classList.remove('nashei')
    enlace3.classList.add('nashei')

};

const observador = new IntersectionObserver(cargarBorde, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
});

observador.observe(alquiler);


// loader

bodyy.style.backgroundColor = '#000'
bodyy.style.opacity = '0.4'

window.onload = function() {
	$('#onload').fadeOut();
	bodyy.style.backgroundColor = '#fff'
	bodyy.style.opacity = '1'
}





// carousel
const swiper = new Swiper('.swiper', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	keyboard: true,
	mousewheel: true,

	// effect: 'creative',
	// creativeEffect: {
	// 	prev: {
	// 		// will set `translateZ(-400px)` on previous slides
	// 		translate: [0, 0, -400],
	// 	},
	// 	next: {
	// 		// will set `translateX(100%)` on next slides
	// 		translate: ['100%', 0, 0],
	// 	},
	// },
	// effect: 'coverflow',
});

// modal

let modal = document.getElementById('miModal');
let contModal = document.getElementById('contModal');
let abrir = document.getElementById('casa1');
let cerrar = document.getElementById('cruz');
let htmll = document.getElementById('htmll');


abrir.addEventListener('click', function(){
    modal.style.display = 'block';
    bodyy.style.overflow = 'hidden';
	htmll.style.overflow = 'hidden';
});

cerrar.addEventListener('click', function(){
        modal.style.display = 'none';
		bodyy.style.overflow = 'visible';
		htmll.style.overflow = 'visible';
    });
    
    window.addEventListener('click', function(e){
        console.log(e.target);
        if(e.target == contModal){
            modal.style.display = 'none';
            bodyy.style.overflow = 'visible';
			htmll.style.overflow = 'visible';
    }
});

