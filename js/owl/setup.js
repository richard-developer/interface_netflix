// Código JQuery para o Carousel:

$('.owl-carousel').owlCarousel({
    loop:true, /*rolagem lateral de forma infinita*/
    margin:10, /*distancia entre um item e outro*/
    nav:false, /*botões de navegação*/
    responsive:{ /*responsividade: se adapta ao tamanho da tela*/
        
        0:{ 
            items:1
        },
        600:{ /*600px ou mais = 3 elementos na tela */
            items:3
        },
        1000:{ /*1000px ou mais = 5 elementos na tela  */
            items:5
        }
    }
})