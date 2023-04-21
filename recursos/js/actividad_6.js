
function iniciarActividad6() {
    contadorAct6 = 0
    actividadAct6 = ['Cuadrado', 'Círculo', 'Triángulo', 'Rectángulo', 'Óvalo', 'Hexágono', 'Rombo', 'Estrella', 'Pentágono', 'Amarillo', 'Azul', 'Rojo', 'Verde', 'Morado', 'Anaranjado', 'Negro', 'Blanco', 'Gris']
    combinaciones = ['cuadroRojo', 'trianguloAzul', 'circuloAmarillo', 'ovaloVerde', 'rectanguloMorado', 'exagonoNaranja', 'romboNegro', 'estrellaBlanca', 'pentagonoGris']
    escritCombina = ['Red square - Cuadro rojo', 'Blue triangle - Triángulo azul', 'Yellow circle - Círculo amarillo ', 'Green oval - Óvalo verde', ' Purple rectangle - Rectángulo morado', 'Orange hexagon - Hexágono naranja', 'Black rhombus - Rombo negro', 'White Star - Estrella blanca', ' Gray pentagon - Pentágono gris']
    rutaLarga = './cursos/ingles/actividades/formasColores/actividad_3/'
    repAudEnun = false
    iniciarJuego6()
    var audioFondoAct6 = document.getElementById('auFonAct6')
    $('#auFonAct6').prop('src', rutaLarga + 'audios/fondo.mp3')
    $('#fondo').attr('background', rutaLarga + "/imagenes/fondo.jpg")
    audioFondoAct6.volume = 0.1;
    audioFondoAct6.play()
    $('#btnModalCorrecto').attr('onclick', '')
    motrarModInfoAct6()
    $('#btnModalInfo').show();
    $('#btnModalInfo').attr('onclick', 'motrarModInfoAct6()')
}

function iniciarJuego6() {
    conAct6 = false
    $('#sigAct6').removeAttr('href')
    if (contadorAct6 <= 0) {
        $('#antAct6').hide()
    } else {
        $('#antAct6').show()
    }

    if (contadorAct6 == combinaciones.length) {
        //alert("Juego terminado")
        repAudEnun=false
        silenciarDesc()
        $('#modalFelicidades').modal()
        audioFelicidades.play()
        $('#sigAct6').hide()
    } else {
        console.log('entro...')
        genDivsAct6(genImgAleaAct6())
        $('#sigAct6').show()
    }
    if (repAudEnun == true) {
        reprodAudAct6('', './cursos/ingles/actividades/formasColores/actividad_3/audios/enunciado.mp3')
    }
}

function anteriorAct6() {
    contadorAct6--
    // console.log("ANTERIOR")
    iniciarJuego6()
}

function sigAct6() {
    if (conAct6) {
        contadorAct6++
        iniciarJuego6()
    }
}

function genImgAleaAct6() {
    let escritura = []
    let pos
    while ((escritura.length < 4)) {
        pos = Math.round(Math.random() * ((escritCombina.length - 1) - 0) + 0)
        if (!escritura.includes(escritCombina[pos]) && escritCombina[pos] != escritCombina[contadorAct6]) {
            escritura.push(escritCombina[pos])
        }
    }
    //console.log(escritura)
    pos = Math.round(Math.random() * ((escritura.length - 1) - 0) + 0)
    escritura[pos] = escritCombina[contadorAct6]
    //console.log(escritura)
    return escritura
}

function genDivsAct6(escritura) {
    let html = ''

    for (var i = 0; i < escritura.length; i++) {
        html += '<a onClick="validarAct6(' + "'" + escritura[i] + "'" + ')" class="dropdown-item" onmouseover="reprodAudAct6(' + "'" + escritura[i] + "'" + ')" href="#"><i class="fa fa-volume-up"></i> ' + escritura[i] + '</a>';
    }
    $('#imgsAct6').attr('src', rutaLarga + '/imagenes/' + combinaciones[contadorAct6] + '.png');
    $('#selectPronAct6').empty();
    $('#selectPronAct6').html(html);
    //console.log(html)
    return

}

function validarAct6(pronuciacion) {
    let respuestaUsu = escritCombina.indexOf(pronuciacion)
    if (escritCombina[respuestaUsu] == escritCombina[contadorAct6]) {
        conAct6 = true
        $('#sigAct6').prop('href', '#')

        reprodAudAct6(pronuciacion)
        $('#textoModalCorrecto').html(escritCombina[respuestaUsu])
        $('#imgModalCorrecto').prop('src', rutaLarga + 'imagenes/' + combinaciones[respuestaUsu] + '.png')
        $('#modalCorrecto').modal()
        repAudEnun = true;
        setTimeout(function () {
            $('#modalCorrecto').modal('hide');
            contadorAct6++
            iniciarJuego6()
        }, 2000);
    } else {
        reprodAudAct6('', './recursos/audio/mal.mp3')
        $('#modalError').modal()
        setTimeout(function () { $('#modalError').modal('hide'); }, 1000);
    }


}


function reprodAudAct6(pronunciacion, ruta) {
    silenciarDesc()
    let audioDescAct = document.getElementById("auDescAct6");
    if (ruta == undefined || ruta == null) {
        $('#auDescAct6').prop('src', rutaLarga + '/audios/' + combinaciones[escritCombina.indexOf(pronunciacion)] + '.mp3')
    } else {
        $('#auDescAct6').prop('src', ruta)
    }
    audioDescAct.play()
}

function motrarModInfoAct6() {
    //document.getElementById('audDescAct-3').play()
    $('#tituloModalInfo').html('Select the figure and tell us what color it is! / ¡Selecciona la figura y dinos de qué color es!')
    $('#textoModalInfo').html('<p class="textoIngles">This time, your mission will be to select the correct name of the figure.<br> Tap continue to start. </p> En esta ocasión, tu misión será seleccionar el nombre correcto de la figura. <br>Presiona continuar para iniciar con la actividad.')
    $('#imgModalInfo').prop('src', 'recursos/img/descAct-6.gif')
    $('#modalInfoAct-3').modal();
    let audioDescAct6 = document.getElementById('audDescActs')
    $('#audDescActs').prop('src', rutaLarga + 'audios/audDescAct-6.mp3')
    audioDescAct6.play()
}
