
var actividadAct8, contadorAct8, contadorvalAct8

function iniciarActividad8() {
    contadorAct8 = 0
    actividadAct8 = ['caballo', 'cebra', 'cerdo', 'elefante', 'gallina', 'gato', 'serpiente', 'león', 'mono', 'oso', 'pájaro', 'pato', 'perro', 'vaca']
    escrituraAct8 = ['Horse / Caballo', 'Zebra / Cebra', 'Pig / Cerdo', 'Elephant / Elafante', 'Hen / Gallina', 'Cat / Gato', 'Snake / Serpiente', 'Lion / león', 'Monkey / Mono', 'Bear / Oso', 'Bird / Pájaro', 'Duck / Pato', 'Dog / Perro', 'Cow / Vaca']
    rutaLarga = './cursos/ingles/actividades/animales/actividad_3/'
    iniciarJuego8()
    var audioFondoAct8 = document.getElementById('auFonAct8')
    $('#auFonAct8').prop('src', rutaLarga + 'audios/fondo.mp3')
    audioFondoAct8.volume = 0.1;
    audioFondoAct8.play()
    $('#btnModalCorrecto').attr('onclick', '')
    motrarModInfoAct8()
    $('#btnModalInfo').show();
    $('#btnModalInfo').attr('onclick', 'motrarModInfoAct8()')
    $('#sigAct8').show();
    $('#reiniciarAct8').hide();
    $('#fondo').attr('background', rutaLarga + "/imagenes/fondo.jpg")  
}

function iniciarJuego8() {
    // console.log('click')
    if (contadorAct8 ==actividadAct8.length) {
        silenciarDesc()
        $('#modalFelicidades').modal()
        audioFelicidades.play()
        $('#sigAct8').hide()
        $('#reiniciarAct8').show();
   }else{
    contadorvalAct8 = 0
    genImgAleaAtc8();
   }
}
function genImgAleaAtc8() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let ordenImgs = []
    let pos;
   // limpiarImgAct8()
   hola()
    while (numeros.length > 0) {
        pos = Math.round(Math.random() * ((numeros.length - 1) - 0) + 0)
        ordenImgs.push(numeros[pos])
        numeros.splice(pos, 1)
    }
    // console.log(ordenImgs)
    pos = 10
    $('#tituloAct8').html('<i class="fa fa-volume-up colTit"></i> '+escrituraAct8[contadorAct8])
    $('#tituloAct8').attr('onclick'," reprodAudAct8('"+actividadAct8[contadorAct8]+"')")
    for (let i = 0; i < ordenImgs.length; i++) {
        $('#Act8' + pos).prop('src', './cursos/ingles/actividades/animales/actividad_3/imagenes/' + actividadAct8[contadorAct8] + ordenImgs[i] + '.png')
        $('#Act8' + pos).attr('data-animal','Act8'+ ordenImgs[i])
        pos++
    }

}

function hola(){
    //console.log('dfghjk')
    for (let i = 1; i <= 9; i++) {
        $('#Act8' + i).addClass('contenePiezaAct8')
        $('#Act8' + i).prop('src', './cursos/ingles/actividades/animales/actividad_3/imagenes/animales-sin-fondo.png')
    }
}

function limpiarImgAct8() {
    for (let i = 1; i <= 9; i++) {
        $('#' + i).addClass('contenePiezaAct8')
        $('#' + i).prop('src', './cursos/ingles/actividades/animales/actividad_3/imagenes/animales-sin-fondo.png')
    }
}

function asigClaseAct8(id) {
    $('#' + id).addClass('piezaSelAct8');
}
function quitClaseAct8(id) {
    $('#' + id).removeClass('piezaSelAct8');
}
function asignarClaseConAct8(e) {
    e.preventDefault()
    e.target.classList.add('contenePiezaActSel8');
}
function quitarClaseContAct8(id) {
    $('#' + id).removeClass('contenePiezaActSel8');
}


function asigImgAct8(e) {
    e.dataTransfer.setData('animal', e.target.dataset.animal);
    e.dataTransfer.setData('id', e.target.id);
    // console.log('drag ' + e.target.dataset.animal)
}

function validarPiezaAct8(e, id) {
    e.preventDefault();
    e.target.classList.remove('contenePiezaActSel8');
    let idImg = e.dataTransfer.getData('id');
    let animal = e.dataTransfer.getData('animal');
    if (animal == id) {
         animal=animal.replace("Act8","")
        $('#' + id).prop('src', './cursos/ingles/actividades/animales/actividad_3/imagenes/' + actividadAct8[contadorAct8] + animal + '.png')
        $('#' + id).removeClass('contenePiezaAct8')
        $('#' + idImg).prop('src', '')
        contadorvalAct8++
    }
    if (contadorvalAct8 >= 9) {
        $('#textoModalCorrecto').html(escrituraAct8[contadorAct8])
        $('#imgModalCorrecto').prop('src', rutaLarga + 'imagenes/' + actividadAct8[contadorAct8]+ '.png')
        $('#modalCorrecto').modal()
        reprodAudAct8(actividadAct8[contadorAct8])
        setTimeout(function () {
            $('#modalCorrecto').modal('hide');
                contadorAct8++          
            iniciarJuego8()
        }, 2000);
    }
    // console.log('drop ', animal)
    //console.log('--', id)

}

function reprodAudAct8(pronunciacion) {
    silenciarDesc()
    let audioDescAct = document.getElementById("auDescAct8");
    $('#auDescAct8').prop('src', rutaLarga + '/audios/' + pronunciacion + '.mp3')
    audioDescAct.play()
}

function motrarModInfoAct8() {
    //document.getElementById('audDescAct-3').play()
    $('#tituloModalInfo').html('Puzzle! / ¡Rompecabezas!')
    $('#textoModalInfo').html('<p class="textoIngles">This time your mission will be to assemble the puzzle of the indicated animal.<br> Good luck!</p> Tap continue to start<br> En esta ocasión tu misión será armar el rompecabezas del animal indicado.<br>¡buena suerte! <br>Presiona continuar para iniciar.')
    $('#imgModalInfo').prop('src', 'recursos/img/descAct-8.gif')
    $('#modalInfoAct-3').modal();
    let audioDescAct8 = document.getElementById('audDescActs')
    $('#audDescActs').prop('src', rutaLarga + 'audios/audDescAct-8.mp3')
    audioDescAct8.play()
}

