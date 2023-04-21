//$(document).ready(iniciarActividad5())
var escrituraAct5 = []
function iniciarActividad5() {
    actividadAct5 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11','12','13','14','15','16','17','18','19', '20', '30', '40', '50', '60', '70', '80', '90', '100']
    escrituraAct5 = ['One / Uno', 'Two / Dos', 'Three / Tres', 'Four / Cuatro', 'Five / Cinco', 'Six / Seis', 'Seven / Siete', 'Eight / Ocho', 'Nine / Nueve', 'Ten / Diez','Eleven / Once','Twelve / Doce','Thirteen / Trece','Fourteen / Catorce','Fifteen / Quince','Sixteen / Dieciséis','Seventeen / Diecisiete','Eighteen / Dieciocho','Nineteen / Diecinueve', 'Twenty / Veinte', 'Thirty / Treinta', 'Forty / Cuarenta', 'Fifty / Cincuenta', 'Sixty / Sesenta', 'Seventy / Setenta', 'Eighty / Ochenta', 'Ninety / Noventa', 'One hundred / Cien']
    imgFrutUsa = [], con = true
    rutaLarga = './cursos/ingles/actividades/numeros/actividad_3/'
    repAudEnun=false
    iniciarJuego5()
    var audioFondoAct5 = document.getElementById('auFonAct5')
    $('#auFonAct5').prop('src', rutaLarga + 'audios/fondo.mp3')
    audioFondoAct5.volume = 0.05;
    audioFondoAct5.play()
    con = false
    $('#fondo').attr('background', rutaLarga + "/imagenes/fondo.jpg")
    $('#btnModalCorrecto').attr('onclick', 'iniciarJuego5()')
    motrarModInfoAct5()
    $('#btnModalInfo').show();
    $('#btnModalInfo').attr('onclick', 'motrarModInfoAct5()')
    $('#sigAct5').hide();
    $('#reinSigAct5').show();


}



function iniciarJuego5() {
    if (con) {
        $('#sigAct5').removeAttr('href')
        if (imgFrutUsa.length == actividadAct5.length) {
            repAudEnun=false
            silenciarDesc()
            $('#modalFelicidades').modal()
            audioFelicidades.play()
            $('#sigAct5').hide();
            $('#reinSigAct5').show();
        } else {
            genDivsAct5(genImgAlea())
            // console.log(imgFrutUsa)
        }
    }
    con = false
}

function genImgAlea() {
    let imgs = []
    let pos
    while ((imgs.length < 4 && imgFrutUsa.length < actividadAct5.length)) {
        pos = Math.round(Math.random() * ((actividadAct5.length - 1) - 0) + 0)
        if (!(imgFrutUsa.length == actividadAct5.length)) {
            if (!imgFrutUsa.includes(actividadAct5[pos])) {
                imgs.push(actividadAct5[pos])
                imgFrutUsa.push(actividadAct5[pos])
            }
        } else {
            break
        }
    }

    // console.log(imgs)
    return imgs
}

function genDivsAct5(imgs) {
    let html = ''
    let act = 0, sig = 0, ganador

    while (act < (imgs.length)) {
        sig = act + 1
        html += '<div  class="col-lg-3 col-md-4 mb-3  " >' +
            '<img data-letra="' + imgs[act] + '" id="' + act + '" onclick = "jugarAct5(' + "'" + act + "'" + ')" onmousemove="asignarClase(' + "'" + act + "'" + ')" onmouseleave="quitarClase(' + "'" + act + "'" + ')" src="' + rutaLarga + '/imagenes/' + imgs[act] + '.png"' +
            ' class="w-100 shadow-1-strong rounded mb-4 " alt="imagen" />'
        html += '<img data-letra="' + imgs[sig] + '" id="' + sig + '" onclick = "jugarAct5(' + "'" + sig + "'" + ')" src="' + rutaLarga + '/imagenes/' + imgs[sig] + '.png" onmousemove="asignarClase(' + "'" + sig + "'" + ')" onmouseleave="quitarClase(' + "'" + sig + "'" + ')"  ' +
            ' class="w-100 shadow-1-strong rounded mb-4" alt="" /> </div >'
        act = act + 2
    }
    //  console.log(html)
    ganador = imgs[Math.round(Math.random() * ((imgs.length - 1) - 0) + 0)]
    $('#tituloAct5').empty();
    $('#tituloAct5').html('<i class="fa fa-volume-up h2 text-info" aria-hidden="true"> </i> Select number ' + ganador);
    $('#imagenesFrutas').empty();
    $('#imagenesFrutas').html(html);
    $('#tituloAct5').attr('onclick', 'repAudioAct5(' + "'" + rutaLarga + "'," + "'audios/'" + ",'selecciona" + ganador + "'" + ')')
    $('#tituloAct5').data('letra', ganador)
    if(repAudEnun==true){
        $('#tituloAct5').click()
    }
}
function jugarAct5(id) {
    let letra = $('#' + id).data('letra')
    let ganador = $('#tituloAct5').data('letra')
    if (letra == ganador) {
        //mensaje ganador - enviar audio para ganar
        repAudioAct5(rutaLarga, 'audios/', letra)
        $('#textoModalCorrecto').html(escrituraAct5[actividadAct5.indexOf(letra.toString())])
        $('#imgModalCorrecto').prop('src', rutaLarga + 'imagenes/' + letra + '.png')
        $('#modalCorrecto').modal()
        repAudEnun=true
        setTimeout(function () {
            $('#modalCorrecto').modal('hide');
            con = true
            $('#sigAct5').prop('href', '#')
            iniciarJuego5()
        }, 2000);

    } else {
        con = false
        $('#modalError').modal()
        setTimeout(function () { $('#modalError').modal('hide'); }, 1000);
        repAudioAct5('./recursos/', 'audio/', 'mal')
    }
    // console.log(letra, '-', ganador)

}

function repAudioAct5(ruta, carpeta, letra) {
    silenciarDesc()
    let audioDescAct = document.getElementById("auDescAct5");
    $('#auDescAct5').prop('src', ruta + carpeta + letra + '.mp3')
    audioDescAct.play()
}

function asignarClase(id) {
    $('#' + id).addClass('selImg')
}
function quitarClase(id) {
    $('#' + id).removeClass('selImg')
}

function motrarModInfoAct5() {
    //document.getElementById('audDescAct-3').play()
    $('#tituloModalInfo').html('Select the image of the correct number! / ¡Selecciona la imagen del número correcto!')
    $('#textoModalInfo').html('<p class="textoIngles">This time your mission will be to select the image of the number indicated in the description of the activity.<br> Pay close attention! <br> tap continue to start the activity. </p> En esta ocasión tu misión será seleccionar la imagen del número indicado en la descripción de la actividad.<br>¡presta mucha atención! <br>presiona continuar para iniciar con la actividad.')
    $('#imgModalInfo').prop('src', 'recursos/img/descAct-5.gif')
    $('#modalInfoAct-3').modal();
    let audioDescAct5 = document.getElementById('audDescActs')
    $('#audDescActs').prop('src', rutaLarga + 'audios/audDescAct-5.mp3')
    audioDescAct5.play()
}

