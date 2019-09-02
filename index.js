$(document).ready(function () {
    //esperando para leer el documento
    //iniciamos
    var controlador = new ScrollMagic.Controller();
    //definimos el movimiento de los pnl
    var limpiarAnimacion = new TimelineMax()
        .fromTo('section.pnl.secondary', 1, { x: '-100%' }, { x: '0%', ease: Linear.easeNone })   //para la izquierda
        .fromTo('section.pnl.third', 1, { x: '100%' }, { x: '0%', ease: Linear.easeNone }) //para la derecha
        .fromTo('section.pnl.fourt', 1, { y: '-100%' }, { y: '0%', ease: Linear.easeNone }); //para la Abajo

    //creamos la escena para fijar y agregar la animación
    var escena = new ScrollMagic.Scene({
        triggerElement: '#container',
        triggerHook: "onLeave",
        duration: '400%',
        reverse: 'true'
    })
        .setPin('#container')
        .setTween(limpiarAnimacion)
        .addTo(controlador);
});