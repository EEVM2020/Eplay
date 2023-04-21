
var rutas = {}

//$(document).ready(cargarActividad())

function cargarActividad() {
    let texto = ''
    switch (actividad) {
        case 'abc':
            texto = 'Listen to the alphabet. - Escucha el alfabeto.'
            break;
        case 'numeros':
            texto = 'Learn to pronounce the numbers in English - Aprende a pronunciar los números en inglés.'
            break;
        case 'frutas':
            texto = 'Today we will learn the pronunciation of fruits in English - Hoy aprenderemos la pronunciación de las frutas en inglés.'
            break;
        case 'formasColores':
            texto = "let's see the different types of shapes and colors - Vámos a ver los diferentes tipos de formas y colores"
            break;
        case 'familia':
            texto = "Let's get to know each member of the family - Vámos a conocer a cada miembro de la familia"
            break;
        case 'animales':
            texto = "Let's go on safari, here you will meet some animals. - Vámonos de safari, aquí conocerás algunos animales."
            break;
        case 'partesCuerpo':
            texto = "From head to feet, let's know our body - De cabeza a pies, conozcamos nuestro cuerpo"
            break;
        default:
            texto = 'Opción no programada'

        //formasColores
    }

    rutas = {
        video: "cursos/ingles/actividades/" + actividad + "/actividad_1/video.mp4",
        fondo: "cursos/ingles/actividades/" + actividad + "/actividad_1/fondo.jpg",
        sonido: "cursos/ingles/actividades/" + actividad + "/actividad_1/descripcion.mp3"
    }
    $('#fondo').attr('background', rutas.fondo)
    $('#video').html(" <video class='img-fluid' id='vidAct1' controls preload='preload'>" +
        "<source src='" + rutas.video + "' type='video/mp4'>" +
        "Tu navegador no soporta Videos de HTML5" +
        "</video> ");
    $('#audio').html('<a href="#" onClick="repAud()" class=" font-italic text-white"><i class="fa fa-volume-up h1 mr-2 text-info" aria-hidden="true"></i>   ' + texto + ' </a>' +
        '<audio id ="audioDesc"  onended="repVid(' + "'vidAct1'" + ')"  >' +
        '<source src="cursos/ingles/actividades/' + actividad + '/actividad_1/descripcion.mp3" type="audio/mp3">' +
        "Tu buscador no soporta audios en HTML5" +
        '</audio>')
    repAud()

}

function repAud() {
    document.getElementById("audioDesc").play()
}



