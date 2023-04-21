var actividadAct7, contadorAct7

function iniciarActividad7() {
    contadorAct7 = 0
    actividadAct7 = ['Abuela', 'Abuelo', 'Familia', 'Gemelos', 'Hermana', 'Hermano', 'Hija', 'Hijo', 'Madre', 'Nieta', 'Nieto', 'Padre', 'Primo-Prima', 'Sobrina', 'Sobrino', 'Tía', 'Tío', 'Esposo', 'Esposa']
    escrituraAct7 = ['grandma / Abuela', 'grandpa / Abuelo', 'Family / Familia', 'Twins / Gemelos', 'Sister / Hermana', 'Brother / Hermano', 'Daughter / Hija', 'Son / Hijo', 'Mother / Madre', 'Granddaughter / Nieta', 'Grandson / Nieto', 'Father / Padre', 'Cousin / Primo - Prima', ' Niece / Sobrina', 'Nephew / Sobrino', 'Aunt / Tía', 'Uncle / Tío', 'Husband / Esposo', 'Wife / Esposa']
    rutaLarga = './cursos/ingles/actividades/familia/actividad_3/'
    repAudEnun = false
    iniciarJuego7()
    var audioFondoAct7 = document.getElementById('auFonAct7')
    $('#auFonAct7').prop('src', rutaLarga + 'audios/fondo.mp3')
    audioFondoAct7.volume = 0.1;
    audioFondoAct7.play()
    $('#btnModalCorrecto').attr('onclick', '')
    motrarModInfoAct7()
    $('#btnModalInfo').show();
    $('#btnModalInfo').attr('onclick', 'motrarModInfoAct7()')
}

function iniciarJuego7() {
    con = false
    $('#sigAct7').removeAttr('href')
    if (contadorAct7 <= 0) {
        $('#antAct7').hide()
    } else {
        $('#antAct7').show()
    }

    if (contadorAct7 == actividadAct7.length) {
        repAudEnun=false
        silenciarDesc()
        $('#modalFelicidades').modal()
        audioFelicidades.play()
        $('#sigAct7').hide()
    } else {
        // console.log('entro...')
        genDivsAct7(genImgAleaAct7())
        $('#sigAct7').show()
    }
    if (repAudEnun == true) {
        reprodAudioAct7('enunciado')
    }
}

function anteriorAct7() {
    contadorAct7--
    // console.log("ANTERIOR")
    iniciarJuego7()
}

function sigAct7() {
    if (con) {
        contadorAct7++
        iniciarJuego7()
    }
}

function genImgAleaAct7() {
    let escritura = []
    let pos
    while ((escritura.length < 4)) {
        pos = Math.round(Math.random() * ((escrituraAct7.length - 1) - 0) + 0)
        if (!escritura.includes(escrituraAct7[pos]) && escrituraAct7[pos] != escrituraAct7[contadorAct7]) {
            escritura.push(escrituraAct7[pos])
        }
    }
    // console.log(escritura)
    pos = Math.round(Math.random() * ((escritura.length - 1) - 0) + 0)
    escritura[pos] = escrituraAct7[contadorAct7]
    // console.log(escritura)
    return escritura
}

function genDivsAct7(escritura) {

    let html = '<h3 id="tituloAct7" onmousemove="reprodAudioAct7(' + "'','./cursos/ingles/actividades/familia/actividad_3/audios/enunciado.mp3'" + ')"  data-familiar="abuela" class="mt-2"><i class="fa fa-volume-up"></i> Select the correct option / Selecciona la opción correcta</h3>' +
        '<div class="col-12 mb-2 text-center" >' +
        '<img id="imgsAct7" src="' + rutaLarga + '/imagenes/' + actividadAct7[contadorAct7] + '.png" class="shadow-1-strong rounded " alt="" />' +
        '</div>';
    // console.log(escritura[contadorAct7])

    // console.log(escritura.indexOf(escritura[contadorAct7]))
    for (var i = 0; i < escritura.length; i++) {
        // console.log(escritura[i])
        html += '<div id="' + actividadAct7[escrituraAct7.indexOf(escritura[i])] + '" onclick="validarAct7(' + "'" + actividadAct7[escrituraAct7.indexOf(escritura[i])] + "'" + ')" onmousemove="reprodAudioAct7(' + "'" + actividadAct7[escrituraAct7.indexOf(escritura[i])] + "'" + ')" onmouseleave="quitClase(' + "'" + actividadAct7[escrituraAct7.indexOf(escritura[i])] + "'" + ')"' +
            'class="col-5  mb-2 text-center opcionAct7 pt-2 ml-1">' +
            '<p><i class="fa fa-volume-up"></i> ' + escritura[i] + '</p> </div>'
    }

    $('#imagenesAct7').empty();
    $('#imagenesAct7').html(html);
    // console.log(html)
    return

}

function validarAct7(pronuciacion) {
    // console.log(pronuciacion)
    if (pronuciacion == actividadAct7[contadorAct7]) {
        repAudEnun = true
        con = true
        $('#sigAct7').prop('href', '#')

        reprodAudioAct7(pronuciacion)
        $('#textoModalCorrecto').html(escrituraAct7[contadorAct7])
        $('#imgModalCorrecto').prop('src', rutaLarga + 'imagenes/' + pronuciacion + '.png')
        $('#modalCorrecto').modal()
        setTimeout(function () {
            $('#modalCorrecto').modal('hide');
            contadorAct7++
            iniciarJuego7()
        }, 2000);


    } else {
        reprodAudioAct7('', './recursos/audio/mal.mp3')
        $('#modalError').modal()
        setTimeout(function () { $('#modalError').modal('hide'); }, 1000);
    }


}


function reprodAudioAct7(id, ruta) {
    silenciarDesc()
    console.clear()
    let audioDescAct = document.getElementById("auDescAct7");
    if (ruta == undefined || ruta == null) {
        $('#' + id).removeClass('opcionAct7')
        $('#' + id).addClass('opcionAct7-hover')
        try {
            $('#auDescAct7').prop('src', rutaLarga + '/audios/' + id + '.mp3')
        } catch (error) {

        }
    } else {
        $('#auDescAct7').prop('src', ruta)
    }
    audioDescAct.play()

}

function quitClase(id) {
    $('#' + id).removeClass('opcionAct7-hover')
    $('#' + id).addClass('opcionAct7')
}



function reprodAudAct6(pronunciacion, ruta) {
    silenciarDesc()
    let audioDescAct = document.getElementById("auDescAct7");
    if (ruta == undefined || ruta == null) {
        $('#auDescAct7').prop('src', rutaLarga + '/audios/' + combinaciones[escritCombina.indexOf(pronunciacion)] + '.mp3')
    } else {
        $('#auDescAct7').prop('src', ruta)
    }
    audioDescAct.play()
}

function motrarModInfoAct7() {
    //document.getElementById('audDescAct-3').play()
    $('#tituloModalInfo').html('Select the correct option / selecciona la opción correcta')
    $('#textoModalInfo').html('<p class="textoIngles">Now you must select the text to whom the image corresponds.<br>Pay close attention!<br>Tap continue to start. <p>Ahora debes seleccionar el texto a quien corresponde la imagen.<br>¡Presta mucha atención! <br> Presiona continuar para iniciar.<br>')
    $('#imgModalInfo').prop('src', 'recursos/img/descAct-7.gif')
    $('#modalInfoAct-3').modal();
    let audioDescAct6 = document.getElementById('audDescActs')
    $('#audDescActs').prop('src', rutaLarga + 'audios/audDescAct-7.mp3')
    audioDescAct6.play()
}

