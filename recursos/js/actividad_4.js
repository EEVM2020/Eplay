
var juegosAct4 = 0
function iniciarActividad4() {
    rutaLarga = './cursos/ingles/actividades/frutas/actividad_3/'
    actividadAct4 = ['Aguacate', 'Banano', 'Cereza', 'Kiwi', 'Limón', 'Manzana', 'Durazno', 'Naranja', 'Pera', 'Piña', 'Sandía', 'Uvas']
    escrituraAct4 = ['Avocado', 'Banana', 'Cherry', 'Kiwi', 'Lemon', 'Apple', 'Peach', 'Orange', 'Pear', 'Pineapple', 'Watermelon', 'Grapes']
    var audioFondoAct4 = document.getElementById('auFonAct4')
    $('#fondo').attr('background', rutaLarga + "/imagenes/fondo.jpg")
    $('#auFonAct4').prop('src', rutaLarga + 'audios/fondo.mp3')
    iniciarJuego4()
    audioFondoAct4.volume = 0.01;
    audioFondoAct4.play()
    motrarModInfoAct4()
    $('#btnModalInfo').show();
    $('#btnModalInfo').attr('onclick', 'motrarModInfoAct4()')
    $('#btnModalCorrecto').attr('onclick', '')

    //audio-Act4
}
function reiniciarAct4(){
    juegosAct4 = 0
    iniciarJuego4()
}

function iniciarJuego4() {
    imagUsar = null
    imagUsar = []
    posiciones = [0, 1, 2, 3, 4]
    turno = 1, finalizado = false, turnoAnt = ['', ''], continuar = true, acertadas = [], cantidad = 0
    genImgAleaAct4(imagUsar)
    colImgsAct4(imagUsar)
}

function genImgAleaAct4(imgs) {
    let pos
    while (imagUsar.length < 5) {
        pos = Math.round(Math.random() * ((actividadAct4.length - 1) - 0) + 0)
        if ((validarImagen(imagUsar, actividadAct4[pos]))) {
            imagUsar.push(actividadAct4[pos])

        }
        // console.log('--3--')

    }
    var i = 0
    while (imagUsar.length < 10) {
        pos = Math.round(Math.random() * ((posiciones.length - 1) - 0) + 0)

        if ((validarImagen(imagUsar, imagUsar[posiciones[pos]]))) {
            imagUsar.push(imagUsar[posiciones[pos]])
            posiciones.splice(pos, 0);

        }
        // console.log('--4--')
        i++
        if (i > 100) {
            break
        }
    }
    cantidad = imagUsar.length
}

function validarImagen(imgs, imgVal) {
    var repetidos = 0;
    for (i = 0; i < imgs.length; i++) {
        console.log(imgs[i], '-', imgVal)
        if (imgs[i] === imgVal) {
            repetidos++
        }
        //console.log('--5--')
    }
    if (repetidos > 1) {
        return false;
    } else {
        return true
    }

}

function colImgsAct4(imgs) {
    var html = ''
    var sig = 0
    var numero = 0
    var id = 0;
    while (numero < (imgs.length)) {
        sig = numero + 1
        html += '<div class="col-lg-2 col-md-6 mb-2 mb-lg-0 ">' +
            ' <img id="' + id + 'act4" src="' + rutaLarga + 'imagenes/pregunta.png" onclick="jugarAct4(' + "'" + imgs[numero] + "'" + ',' + "'" + id + "act4'" + ')"' +
            'class="w-100 shadow-1-strong rounded mb-4 tapar" alt="" />';
        id++
        html += ' <img id="' + id + 'act4" src="' + rutaLarga + 'imagenes/pregunta.png" onclick="jugarAct4(' + "'" + imgs[sig] + "'" + ',' + "'" + id + "act4'" + ')"' +
            'class="w-100 shadow-1-strong rounded mb-4 tapar" alt="" /></div>'
        numero = numero + 2
        id++
        // console.log('----' + numero)
    }
    $('#imagenesAct4').empty();
    $('#imagenesAct4').html(html);
}

function jugarAct4(letra, id) {
    aundioPronAct4(letra)
    if (continuar && !acertadas.includes(letra)) {
        var entrar = turnoAnt[1] != id
        if (!entrar && turno > 1) {
            //  console.log('falso..')
        } else {
            turno++
            $('#' + id).attr('src', rutaLarga + 'imagenes/' + letra + '.png')
            if (turnoAnt[0] == letra) {
                //mensaje felicitacion + pronunciacion
                $('#textoModalCorrecto').html(letra + ' / ' + escrituraAct4[actividadAct4.indexOf(letra.toString())])
                $('#imgModalCorrecto').prop('src', rutaLarga + 'imagenes/' + letra + '.png')
                $('#modalCorrecto').modal()
                setTimeout(function () { $('#modalCorrecto').modal('hide'); }, 2000);
                turnoAnt = ['', '']
                acertadas.push(letra)
            } else {
                if (turno > 2) {
                    continuar = false;
                    setTimeout("ocultarImgs('" + id + "','" + turnoAnt[1] + "')", 1000);
                }
            }
        }
        if (turno > 2) {
            turnoAnt = ['', ''];
            turno = 1
        } else if (!acertadas.includes(letra)) {
            turnoAnt[0] = letra;
            turnoAnt[1] = id;
        }

    } else if (acertadas.includes(letra)) {
        //reproducir pronunciacion
        // alert('pronuciacion ' + letra)
    }
    if ((cantidad / 2) == acertadas.length) {
        juegosAct4++
        if (juegosAct4 >= 6) {
            //mensaje juego terminado
            silenciarDesc()
            setTimeout(function () {
                audioFelicidades.play()
                $('#modalFelicidades').modal();
            }, 2000);
        } else {
            setTimeout(function () {
                aundioPronAct4('enunciado')
                iniciarJuego4()
            }, 2000);
        }
    }

}

function ocultarImgs(imgAct, imgAnt) {
    $('#' + imgAct).attr('src', rutaLarga + 'imagenes/pregunta.png')
    $('#' + imgAnt).attr('src', rutaLarga + 'imagenes/pregunta.png')
    continuar = true
}

function aundioPronAct4(imagen) {
    silenciarDesc()
    let audio = document.getElementById('audio-Act4')
    $('#audio-Act4').prop('src', rutaLarga + 'audios/' + imagen + '.mp3')
    audio.play()

}

function motrarModInfoAct4() {
    $('#tituloModalInfo').html('Match the images and win! / ¡Empareja las imágenes y gana!')
    $('#textoModalInfo').html('<p class="textoIngles">Under each of the cards you will find images of fruits, look for the same fruits.<br> tap continue to start the activity. </p> Debajo de cada una de las tarjetas encontrarás imágenes de frutas, busca las frutas iguales.<br> presiona continuar para iniciar con la actividad.')
    $('#imgModalInfo').prop('src', 'recursos/img/descAct-4.gif')
    $('#modalInfoAct-3').modal();
    let audioDescAct5 = document.getElementById('audDescActs')
    $('#audDescActs').prop('src', rutaLarga + 'audios/audDescAct-4.mp3')
    audioDescAct5.play()
}



