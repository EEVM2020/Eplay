var actividad = ''
var rutaLarga = ''
var actividadAct = ''
var escritura = ''
var rutasImagenes = []
var rutasAudios = []
var rutasAudiosDesc = []
var imagenActual = -1
var numAct = 0;
var actOcul, actMost
var secciones = ['bienvenida', 'instrucciones', 'introduccion', 'menu', 'contAct-1', 'contAct-2', 'contAct-3', 'contAct-4', 'contAct-5', 'contAct-6', 'contAct-7', 'contAct-8','contAct-9']
var actividadAct4 = []
var imagUsar = []
var posiciones
var turno, finalizado, turnoAnt, continuar, acertadas, cantidad, actNuevas
var actividadAct5, imgFrutUsa = [], con
var actividadAct6, combinaciones, contadorAct6, conAct6
var audioFelicidades= document.getElementById("audioFelicidades");
var repAudEnun=false
function auIntro() {
    // document.getElementById("auIntro").play();
}

$(document).ready(iniciarCurso())

function iniciarCurso() {
    $('#bienvenida').show()
    $('#contAct-1').hide();
    $('#contAct-2').hide(1000);
    $('#contAct-3').hide(1000);
    $('#contAct-4').hide();
    $('#contAct-5').hide();
    $('#contAct-6').hide();
    $('#contAct-7').hide();
    $('#contAct-8').hide();
    $('#contAct-9').hide();
    $('#btnModalInfo').hide();
    $('#menu').hide(1000);
    $('#instrucciones').hide(1000);
    $('#introduccion').hide(1000);
    $('#modalInicio').modal()
    $('#btnRet').prop('disabled', true)
    actNuevas = 0

    // document.getElementById("auIntro").play();
}

function menu(num, act) {
    $('#btnModalInfo').hide();
    actOcul = 0, actMost = 0
    if (act != undefined) {
        actividad = act
    }

    sileciarAudios()
    if (num === '1') {
        numAct++;
        actOcul = numAct - 1
        actMost = numAct
    } else if (num === '0') {
        if (actNuevas == 0) {
            numAct--;
            actOcul = numAct + 1
            actMost = numAct
        } else {
            numAct--;
            actOcul = actNuevas
            actMost = numAct

        }

    } else {
        if (actNuevas == 0) {
            actOcul = numAct > 0 ? numAct-- : 0
            numAct = parseInt(num)
            actMost = numAct
        } else {
            actOcul = actNuevas
            numAct = parseInt(num)
            actMost = numAct
        }


    }
    actNuevas = 0
    if (numAct == 0) {
        $('#btnRet').prop('disabled', true)
    } else {
        $('#btnRet').prop('disabled', false)
    }
    if (numAct >= 6) {
        $('#btnAvan').prop('disabled', true)
    } else {
        $('#btnAvan').prop('disabled', false)
    }
    if (numAct == 3) {
        $('#btnAvan').hide()
    } else {
        $('#btnAvan').show()
    }

    switch (numAct) {
        case 0:
            iniciarCurso()
            break;
        case 1:
            $('#fondo').attr('background', '')
            $('#fondo').addClass('bg-primary')
            document.getElementById("auInstrucciones").play();
            break;
        case 2:
            $('#fondo').attr('background', '')
            $('#fondo').addClass('bg-primary')
            document.getElementById("auintroduccion").play();
            break;
        case 3:
            $('#fondo').addClass('bg-primary')
            $('#fondo').attr('background', 'recursos/img/fonMenu.jpg')
            break;
        case 4:
            $('#fondo').removeClass('bg-primary')
            cargarActividad()
            break;
        case 5:
            cargarActividad2()
            break;
        case 6:
            actividadTres()
            //cargarActividad3()
            break;
        case 7:
            iniciarActividad4()
            break;

    }
   // console.log('--->1 mostrar ', actMost)
    //console.log('--->2 ocultar', actOcul)

    $('#' + secciones[actOcul]).hide();
    $('#' + secciones[actMost]).show();

}


function sileciarAudios() {
    var allAudios = document.getElementsByTagName("audio");
    for (var i = 0; i < allAudios.length; i++) {
        allAudios[i].pause();
        allAudios[i].currentTime = 0;

    }
    var videos = document.getElementsByTagName("video");
    for (var i = 0; i < videos.length; i++) {
        videos[i].pause();
        videos[i].currentTime = 0;

    }
}

function repAudActMenu(nro) {
    $('#audMenu').html('<audio id="audioMenu" preload="preload" onended="removerElemento(' + "'" + "audioMenu" + "'" + ')" >' +
        '<source src="recursos/audio/menu/' + nro + '.mp3" type="audio/mp3">   Tu navegador no soporta el audio en HTML5' +
        '</audio>')
    document.getElementById("audioMenu").play();
}

function removerElemento(idEliminar) {
    $('#' + idEliminar).remove()
}

function repVid(idVid) {
    let videoRep = document.getElementById(idVid)
    if (videoRep.requestFullscreen) {
        videoRep.requestFullscreen();
    } else if (videoRep.mozRequestFullScreen) {
        videoRep.mozRequestFullScreen();
    } else if (videoRep.webkitRequestFullscreen) {
        videoRep.webkitRequestFullscreen();
    } else if (videoRep.msRequestFullscreen) {
        videoRep.msRequestFullscreen();
    }
    videoRep.play();
}


function pantallaCompletaMin(element) {
    if (element) {
        if (element.requestFullScreen) {
            element.requestFullScreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        }
        $('#btnPantalla').attr('onclick', 'pantallaCompletaMin()')
        $('#iconPantalla').removeClass('fa fa-arrows-alt')
        $('#iconPantalla').addClass('fa fa-compress')
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
        $('#iconPantalla').removeClass('fa fa-compress')
        $('#iconPantalla').addClass('fa fa-arrows-alt')
        $('#btnPantalla').attr('onclick', 'pantallaCompletaMin(document.documentElement)')

    }
}

function actividadTres() {
    switch (actividad) {
        case 'abc':
            cargarActividad3()
            break;
        case 'frutas':
            iniciarActividad4()
            actMost = secciones.indexOf('contAct-4')
            numAct = actMost - 1
            actNuevas = secciones.indexOf('contAct-4')

            break;
        case 'numeros':
            iniciarActividad5()
            actMost = secciones.indexOf('contAct-5')
            numAct = actMost - 2
            actNuevas = secciones.indexOf('contAct-5')
            break;
        case 'formasColores':
            iniciarActividad6()
            actMost = secciones.indexOf('contAct-6')
            numAct = actMost - 3
            actNuevas = secciones.indexOf('contAct-6')
            break;
        case 'familia':
            iniciarActividad7()
            actMost = secciones.indexOf('contAct-7')
            numAct = actMost - 4
            actNuevas = secciones.indexOf('contAct-7')
            break;
        case 'animales':
            iniciarActividad8()
            actMost = secciones.indexOf('contAct-8')
            numAct = actMost - 5
            actNuevas = secciones.indexOf('contAct-8')
            break;
        case 'partesCuerpo':
            iniciarActividad9()
            actMost = secciones.indexOf('contAct-9')
            numAct = actMost - 6
            actNuevas = secciones.indexOf('contAct-9')
            break;
        default:
            texto = 'Opción no programada'


    }
}
function silenciarDesc(){
    let audioDescAct = document.getElementById('audDescActs')
    audioDescAct.pause()
    audioDescAct.currentTime = 0;
}
function cerrarModalFelicidades(){
    audioFelicidades.pause()
    audioFelicidades.currentTime=0;
}
