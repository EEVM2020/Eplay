var imgsUsaAct3 = []
var sets = 0
var acert = 0
var audioFondo = document.getElementById("auFonAct3");
//var imgs

//$(document).ready(cargarActividad3())

function cargarActividad3() {
    rutaLarga = 'cursos/ingles/actividades/' + actividad + '/actividad_3/'
    actividadAct = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    escritura = ['Ei', 'Bi', 'Ci', 'Di', 'I', 'Ef', 'Yi', 'Eich', 'Ai', 'Jei', 'Kei', 'El', 'Em', 'En', 'Ou', 'Pi', 'Kiu', 'Ar', 'Es', 'Ti', 'Iu', 'Vi', 'Dabliw', 'Ex', 'Uai', 'Zi']
    rutasImagenes = []
    rutasAudios = []
    rutasAudiosDesc = []
    $('#fondo').attr('background', rutaLarga + "/imagenes/fondo.jpg")
    seleccionarImg()
    $('#sigSet').show()
    acert = 0
    motrarModInfo()
    $('#auFonAct3').prop('src', rutaLarga + 'audios/fondo.mp3')
    audioFondo.volume = 0.1;
    audioFondo.play()
    $('#btnModalInfo').show();
    $('#btnModalInfo').attr('onclick', 'motrarModInfo()')

}

function seleccionarImg() {
    $('#sigSet').prop('disabled', true);
    sets = 0
    let imgs = genImgAleaAct3()
    let imgsHtml = ''
    let divImg = ''
    let divs = genDivAlea(imgs)
    imgs.forEach(function (valor, indice, arreglo) {
        imgsHtml += ' <img data-img="' + actividadAct[valor] + '" id="Img' + actividadAct[valor] + '" ondragstart="obtenerNomImg(event)" src="' + rutaLarga + '/imagenes/' + actividadAct[valor] + '.png" alt="IMAGEN" class="img-fluid ml-3 mr-3 imgAct3">'
        divImg += '<div data-img="' + actividadAct[imgs[divs[indice]]] + '" id="divImg' + actividadAct[imgs[divs[indice]]] + '" ondrop="validar(event)" ondragleave="quitClase(event)"' +
            'ondragover="colClase(event)" class=" mr-3 p-3  border rounded divImgAct3 " style="width: 166px;height: 200px">' +
            '<p class=" mx-auto h3 pTextAct3" >' + actividadAct[imgs[divs[indice]]] + ' (' + escritura[imgs[divs[indice]]] + ')</p>' +
            ' </div>'
    }
    )
    $('#divImgsAct3').html(divImg)
    $('#imgsAct3').html(imgsHtml)
}

function genImgAleaAct3() {
    let imgs = []
    let pos
    while ((imgs.length < 6)) {
        pos = Math.round(Math.random() * ((actividadAct.length - 1) - 0) + 0)
        if (!(imgsUsaAct3.length == actividadAct.length)) {
            if (!imgsUsaAct3.includes(pos)) {
                imgs.push(pos)
                imgsUsaAct3.push(pos)
            }
        } else {
            break
        }
    }

    return imgs
}

function genDivAlea(imgs) {
    let divs = []
    let pos
    while (divs.length < 6) {
        pos = Math.round(Math.random() * ((imgs.length - 1) - 0) + 0)
        if (!(imgsUsaAct3.length == actividadAct.length)) {
            if (!divs.includes(pos)) {
                divs.push(pos)
            }
        } else {
            if (!divs.includes(pos)) {
                divs.push(pos)
                if (divs.length == 2) {
                    $('#sigSet').hide()
                    break
                }
            }
        }
    }
    return divs
}
function reiniciarAct3() {
    imgsUsaAct3 = []
    acert = 0
    seleccionarImg()
    $('#sigSet').show()

}

function obtenerNomImg(e) {
    e.dataTransfer.setData('imagen', e.target.dataset.img);
    // console.log('drag ' + e.target.dataset.img)
}

function validar(e) {
    e.preventDefault();
    e.target.classList.remove('bg-secondary');
    let imgMov = e.dataTransfer.getData('imagen');
    // console.log('DROP ')
    //console.log(e.target.dataset.img)
    if (e.target.dataset.img === imgMov) {
        $('#Img' + imgMov).hide();
        $('#divImg' + imgMov).append(' <img  src="' + rutaLarga + '/imagenes/' + imgMov + '.png" alt="IMAGEN" class="img-fluid ImgAct3Div">')
        $('#audsImgAct3').html('<audio id="audImgAct3" onended="limpiarAudio()"  >' +
            '<source id="hola" src="' + rutaLarga + '/audios/' + imgMov + '.mp3 " type="audio/mp4">' +
            'Tu navegador no soporta el audio en HTML5' +
            '</audio>')
        sets++
        validarJuegoSets()
        let audioDescAct3 = document.getElementById('audDescActs')
        audioDescAct3.pause()
        audioDescAct3.currentTime = 0;
        document.getElementById('audImgAct3').play()
    } else {
        $('#audImgAct3').html('')
        $('#audsImgAct3').html('<audio id="audImgAct3" onended="limpiarAudio()"  >' +
            '<source src="recursos/audio/mal.mp3" type="audio/mp4">' +
            'Tu navegador no soporta el audio en HTML5' +
            '</audio>')
        let audioDescAct3 = document.getElementById('audDescActs')
        audioDescAct3.pause()
        audioDescAct3.currentTime = 0;
        document.getElementById('audImgAct3').play()
        $('#modalError').modal()
        setTimeout(function () { $('#modalError').modal('hide'); }, 1000);
    }
}

function validarJuegoSets() {
    acert++
    if (sets == 6) {
        $('#sigSet').prop('disabled', false);
    }
    if (acert == actividadAct.length) {
        let audioDescAct3 = document.getElementById('audDescActs')
        audioDescAct3.pause()
        audioDescAct3.currentTime = 0;
        $('#modalFelicidades').modal()
        audioFelicidades.play()
    }

}

function colClase(e) {
    e.preventDefault();
    $('#divImg' + e.target.dataset.img).addClass('bg-secondary')
    //e.target.classList.add('bg-secondary');
}

function quitClase(e) {
    // e.target.classList.remove('bg-secondary');
    $('#divImg' + e.target.dataset.img).removeClass('bg-secondary')
}

function limpiarAudio() {
    $('#audImgAct3').remove()
}

function motrarModInfo() {
    //document.getElementById('audDescActs').play()
    $('#tituloModalInfo').html('Associate the images and win! / ¡Asocia las imágenes y gana!')
    $('#textoModalInfo').html('<p class="textoIngles">Next, we will present you a series of images, which you must drag to their respective box.<br> we wish you good luck! <br> tap continue to start the activity.</p>  A continuación te presentaremos una serie de imágenes, las cuales debes arrastrar hasta su respectiva casilla.<br> ¡te deseamos buena suerte! <br> presiona continuar para iniciar con la actividad.')
    $('#imgModalInfo').prop('src', 'recursos/img/descAct-3.gif')
    $('#modalInfoAct-3').modal();
    let audioDescAct3 = document.getElementById('audDescActs')
    $('#audDescActs').prop('src', rutaLarga + 'audios/audDescAct-3.mp3')
    audioDescAct3.play()
}

