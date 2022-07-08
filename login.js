window.addEventListener('load', function(){
    new Glider(document.querySelector('.listaCarousel'), {
      slidesToShow: 1,
      arrows: {
        prev: '.botonAnterior',
        next: '.botonSiguiente'
      } ,
      dots: '#dots'

    })
  })