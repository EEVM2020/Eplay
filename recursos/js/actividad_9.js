
var partesCuerpo, cara, contadorAct9, contadorvalAct9, partesCuerpoImgs, cantidadImgAct9, audiosAct9, partes, escrituraAct9, imgArmarAct9
function iniciarActividad9() {
    contadorAct9 = 0
    medidasPartesCuerpo = [150, 180, 100, 100, 150, 100, 200, 100, 150]
    partesCuerpo = ['cabeza', 'cuello', 'torzo', 'brazo1', 'mano1', 'piernas', 'pies', 'brazo2', 'mano2']
    audioPartesCuerpo = ['cabeza', 'cuello', 'pecho', 'brazo', 'mano', 'piernas', 'pie', 'brazo', 'mano']
    partesCuerpoEscirtura = ['Head  / Cabeza', 'Neck / Cuello', 'Chest / Pecho', 'Arm / Brazo', 'Hand / Mano', 'Legs / Pierns', 'feet / Pies', 'Arm / Brazo', 'Hand / Mano']
    medidasCaraImgs = [100, 70, 100, 100, 100, 100, 100, 100]
    cara = ['cabello', 'nariz', 'ojo1', 'oreja1', 'cejas', 'boca', 'ojo2', 'oreja2']
    caraEscritura = ['Hair / Cabello', 'Nose / Nariz', 'Eye / Ojo', 'Ear / Oreja', 'Eyebrows / Cejas', 'Mouth / Boca', 'Eye / Ojo', 'Ear / Oreja']
    audiosCara = ['cabello', 'nariz', 'ojo', 'oreja', 'cejas', 'boca', 'ojo', 'oreja']
    rutaLarga = './cursos/ingles/actividades/partesCuerpo/actividad_3/'
    $('#btnModalCorrecto').attr('onclick', '')
    $('#fondo').attr('background', rutaLarga + "/imagenes/fondo.jpg")
    repAudEnun=false
    motrarModInfoAct9()
    $('#btnModalInfo').show();
    $('#btnModalInfo').attr('onclick', 'motrarModInfoAct9()')
    iniciarJuego9()
    var audioFondoAct9 = document.getElementById('auFonAct9')
    $('#auFonAct9').prop('src', rutaLarga + 'audios/fondo.mp3')
    audioFondoAct9.volume = 0.1;
    audioFondoAct9.play()
}

function iniciarJuego9() {
    // console.log('click')
    if (contadorAct9 >= 2) {
        silenciarDesc()
        $('#modalFelicidades').modal()
        audioFelicidades.play()
        //setTimeout(function () { $('#modalFelicidades').modal(); }, 3000);
    } else {
        contadorvalAct9 = 0
        reiniciarImgsAct9()
        genImgAleaAtc9();
    }


}
function genImgAleaAtc9() {
    let numeros = [], medidasImgs = []
    partes = []
    if (contadorAct9 == 0) {
        $('#cara').hide()
        $('#partesCuerpo').show()
        numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        medidasImgs = medidasPartesCuerpo
        partes = partesCuerpo
        audiosAct9 = audioPartesCuerpo
        escrituraAct9 = partesCuerpoEscirtura
        imgArmarAct9 = 'cuerpo'
        $('#tituloAct9').html('<i class="fa fa-volume-up colTit"></i> Body /  Cuerpo')
        $('#tituloAct9').attr('onclick', 'repAudAct9("cuerpo")')
        if(repAudEnun==true){
            repAudAct9("cuerpo")
        }
    } else if (contadorAct9 == 1) {
        $('#cara').show()
        $('#partesCuerpo').hide()
        numeros = [0, 1, 2, 3, 4, 5, 6, 7]
        medidasImgs = medidasCaraImgs
        partes = cara
        audiosAct9 = audiosCara
        escrituraAct9 = caraEscritura
        imgArmarAct9 = 'cara'
        $('#tituloAct9').html('<i class="fa fa-volume-up colTit"></i> Face / Cara')
        $('#tituloAct9').attr('onclick', 'repAudAct9("cara")')
        repAudAct9("cara")
    }
    cantidadImgAct9 = numeros.length
    let ordenImgs = []
    let pos, p;
    let html = ''
    //limpiarImgAct8()
    while (numeros.length > 0) {
        pos = Math.round(Math.random() * ((numeros.length - 1) - 0) + 0)
        ordenImgs.push(numeros[pos])
        numeros.splice(pos, 1)
    }
    //console.log(partesImgs['cabeza'].medida)
    //console.log(partes[0])
    pos = 10
    for (let i = 0; i < ordenImgs.length; i++) {
        html += '<div class="m-2" style="width:' + medidasImgs[ordenImgs[i]] + 'px" >' +
            '<img id="' + partes[ordenImgs[i]] + '" ondrop="validarPiezaAct9(event,' + "'" + partes[ordenImgs[i]] + "'" + ')"' +
            ' ondragstart="asigImgAct9(event)" onclick="repAudAct9(' + "'" + audiosAct9[ordenImgs[i]] + "'" + ')"' +
            'src="./cursos/ingles/actividades/partesCuerpo/actividad_3/imagenes/' + partes[ordenImgs[i]] + '.png"' +
            ' class="img-fluid shadow-1-strong rounded " alt="" /></div>'
    }
    $('#piezasAct9').empty()
    $('#piezasAct9').html(html)
    //console.log(html)

}

function limpiarImgAct8() {
    for (let i = 1; i <= 9; i++) {
        $('#' + i).addClass('contenePiezaAct8')
        $('#' + i).prop('src', '')
    }
}

function asignarClaseConAct9(e) {
    e.preventDefault()
    e.target.classList.add('piezaAct9Sel');
}
function quitarClaseContAct9(e) {
    e.preventDefault()
    e.target.classList.remove('piezaAct9Sel');
}


function asigImgAct9(e) {
    e.dataTransfer.setData('parte', e.target.id);
    repAudAct9(audiosAct9[partes.indexOf(e.target.id)])
    // e.dataTransfer.setData('id','act9-'+ e.target.id);
   // console.log('drag ' + e.target.id)
}

function validarPiezaAct9(e) {
    e.preventDefault();
    e.target.classList.remove('piezaAct9Sel');
    let parteSel = e.dataTransfer.getData('parte');
    let parteCorrecta = e.target.id.replace('act9-', '')
    if (parteSel == parteCorrecta) {
        $('#' + e.target.id).prop('src', rutaLarga + '/imagenes/' + parteSel + '.png')
        $('#' + e.target.id).attr('onclick', "repAudAct9('" + audiosAct9[partes.indexOf(parteSel)] + "')")
        $('#' + parteSel).prop('src', '')
        $('#textoModalCorrecto').html(escrituraAct9[partes.indexOf(parteSel)])
        $('#imgModalCorrecto').prop('src', rutaLarga + 'imagenes/' + parteSel + '.png')
        $('#modalCorrecto').modal()
        repAudAct9(audiosAct9[partes.indexOf(parteSel)])
        setTimeout(function () { $('#modalCorrecto').modal('hide'); }, 2000);
        contadorvalAct9++
    }
    if (contadorvalAct9 >= cantidadImgAct9) {
        let texto = ''
        if (imgArmarAct9 == 'cuerpo') {
            texto = 'Cuerpo / Body'
        } else {
            texto = 'Cara / Face'
        }
         setTimeout(function () {
            $('#textoModalCorrecto').html(texto)
            $('#imgModalCorrecto').prop('src', rutaLarga + 'imagenes/' + imgArmarAct9 + '.png')
            $('#modalCorrecto').modal();
            repAudAct9(imgArmarAct9)
        }, 2500);
        //$('#modalCorrecto').modal()
        setTimeout(function () {
            $('#modalCorrecto').modal('hide');
            contadorAct9++
            iniciarJuego9()
        }, 6000);

    }
    // console.log('drop ', parteCorrecta)
    //console.log('drop ', parteSel)
    //console.log('--', e.target.id)

}

function reiniciarImgsAct9() {
    //console.log('reinicio-----')
    $('#act9-cabello').attr('src', rutaLarga + 'imagenes/cabelloBN.png')
    $('#act9-cabello').attr('onclick', '')

    $('#act9-oreja1').attr('src', rutaLarga + 'imagenes/oreja1BN.png')
    $('#act9-oreja1').attr('onclick', '')

    $('#act9-cejas').attr('src', rutaLarga + 'imagenes/cejasBN.png')
    $('#act9-cejas').attr('onclick', '')

    $('#act9-ojo1').attr('src', rutaLarga + 'imagenes/ojo1BN.png')
    $('#act9-ojo1').attr('onclick', '')

    $('#act9-nariz').attr('src', rutaLarga + 'imagenes/narizBN.png')
    $('#act9-nariz').attr('onclick', '')

    $('#act9-ojo2').attr('src', rutaLarga + 'imagenes/ojo2BN.png')
    $('#act9-ojo2').attr('onclick', '')

    $('#act9-oreja2').attr('src', rutaLarga + 'imagenes/oreja2BN.png')
    $('#act9-oreja2').attr('onclick', '')

    $('#act9-boca').attr('src', rutaLarga + 'imagenes/bocaBN.png')
    $('#act9-boca').attr('onclick', '')

    $('#act9-cabeza').attr('src', rutaLarga + 'imagenes/cabezaBN.png')
    $('#act9-cabeza').attr('onclick', '')

    $('#act9-cuello').attr('src', rutaLarga + 'imagenes/cuelloBN.png')
    $('#act9-cuello').attr('onclick', '')

    $('#act9-brazo1').attr('src', rutaLarga + 'imagenes/brazo1BN.png')
    $('#act9-brazo1').attr('onclick', '')

    $('#act9-torzo').attr('src', rutaLarga + 'imagenes/torzoBN.png')
    $('#act9-torzo').attr('onclick', '')

    $('#act9-brazo2').attr('src', rutaLarga + 'imagenes/brazo2BN.png')
    $('#act9-brazo2').attr('onclick', '')

    $('#act9-mano1').prop('src', rutaLarga + 'imagenes/mano1BN.png')
    $('#act9-mano1').attr('onclick', '')

    $('#act9-piernas').attr('src', rutaLarga + 'imagenes/piernasBN.png')
    $('#act9-piernas').attr('onclick', '')

    $('#act9-mano2').attr('src', rutaLarga + 'imagenes/mano2BN.png')
    $('#act9-mano2').attr('onclick', '')

    $('#act9-pies').attr('src', rutaLarga + 'imagenes/piesBN.png')
    $('#act9-pies').attr('onclick', '')

}

function repAudAct9(pronunciacion) {
    silenciarDesc()
    console.log(pronunciacion)
    let audioDescAct = document.getElementById("auDescAct9");
    $('#auDescAct9').prop('src', rutaLarga + '/audios/' + pronunciacion + '.mp3')
    audioDescAct.play()

}

function motrarModInfoAct9() {
    //document.getElementById('audDescAct-3').play()
    $('#tituloModalInfo').html('Puzzle! / ¡Rompecabezas!')
    $('#textoModalInfo').html('<p class="textoIngles">This time your mission will be to arm the figure with the parts of the body that you now know!<br> Good luck!<br>  Tap continue to start. </p> ¡En esta ocasión tu misión será armar la figura con las partes del cuerpo que ahora conoces!<br> ¡buena suerte! <br> Presiona continuar para iniciar.')
    $('#imgModalInfo').prop('src', 'recursos/img/descAct-9.gif')
    $('#modalInfoAct-3').modal();
    let audioDescAct9 = document.getElementById('audDescActs')
    $('#audDescActs').prop('src', rutaLarga + 'audios/audDescAct-9.mp3')
    audioDescAct9.play()
}
function activarAudioEnuAct9() {
    repAudEnun = true;
}

