
//$(document).ready(cargarActividad2())

function cargarActividad2() {
    inicializarVariablesAct2()
    rutasImagenes = []
    rutasAudios = []
    rutasAudiosDesc = []
    imagenActual = -1
    for (let i = 0; i < actividadAct.length; i++) {
        rutasImagenes.push(rutaLarga + '/imagenes/' + actividadAct[i] + '.png')
        rutasAudios.push(rutaLarga + '/audios/' + actividadAct[i] + '.mp3')
        rutasAudiosDesc.push(rutaLarga + '/audios/desc' + actividadAct[i] + '.mp3')
    }
    $('#fondo').attr('background', rutaLarga + "/imagenes/fondo.jpg")
    mostrarImagenes(true)

}

function mostrarImagenes(accion) {
    if (!accion) {

        imagenActual--

    } else if (imagenActual < actividadAct.length) {
        imagenActual++
    }

    if (imagenActual == 0) {
        $('#anterior').hide()
    } else {
        $('#anterior').show()
    } if (imagenActual == actividadAct.length - 1) {
        $('#siguiente').hide()
    } else { $('#siguiente').show() }

    $('#imagen').attr('src', rutasImagenes[imagenActual])
    $('#escritura').html('<i class="fa fa-volume-up h2 ml-2" aria-hidden="true"> </i> <b class="text-white h3 ml-2"> ' + actividadAct[imagenActual] + ' (' + escritura[imagenActual] + ')</b>')
    $('#auAct2').html('<audio id ="audioAct2"  >' +
        '<source src="' + rutasAudios[imagenActual] + '" type="audio/mp3">' +
        "Tu buscador no soporta audios en HTML5" +
        '</audio>' +
        '<audio id ="audioDescAct2"  >' +
        '<source src="' + rutasAudiosDesc[imagenActual] + '" type="audio/mp3">' +
        "Tu buscador no soporta audios en HTML5" +
        '</audio>')
    reprodAudAct2(true)

}
function reprodAudAct2(audioDesc) {
    sileciarAudios()
    if (audioDesc) {
        document.getElementById("audioDescAct2").play();
    } else {
        document.getElementById("audioAct2").play();
    }

}

function inicializarVariablesAct2() {
    switch (actividad) {
        case 'abc':
            rutaLarga = 'cursos/ingles/actividades/' + actividad + '/actividad_2/'
            actividadAct = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
            escritura = ['Ei', 'Bi', 'Ci', 'Di', 'I', 'Ef', 'Yi', 'Eich', 'Ai', 'Jei', 'Kei', 'El', 'Em', 'En', 'Ou', 'Pi', 'Kiu', 'Ar', 'Es', 'Ti', 'Iu', 'Vi', 'Dabliw', 'Ex', 'Uai', 'Zi']
            break;
        case 'numeros':
            rutaLarga = 'cursos/ingles/actividades/' + actividad + '/actividad_3/'
            actividadAct = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11','12','13','14','15','16','17','18','19', '20', '30', '40', '50', '60', '70', '80', '90', '100']
            escritura = ['One - Uno', 'Two - Dos', 'Three - Tres', 'Four - Cuatro', 'Five - Cinco', 'Six - Seis', 'Seven - Siete', 'Eight - Ocho', 'Nine - Nueve', 'Ten - Diez','Eleven - Once','Twelve - Doce','Thirteen - Trece','Fourteen - Catorce','Fifteen - Quince','Sixteen - Dieciséis','Seventeen - Diecisiete','Eighteen - Dieciocho','Nineteen - Diecinueve', 'Twenty - Veinte', 'Thirty - Treinta', 'Forty - Cuarenta', 'Fifty - Cincuenta', 'Sixty - Sesenta', 'Seventy - Setenta', 'Eighty - Ochenta', 'Ninety - Noventa', 'One hundred - Cien']         
            break;
        case 'frutas':
            rutaLarga = 'cursos/ingles/actividades/' + actividad + '/actividad_3/'
            actividadAct = ['Aguacate', 'Banano', 'Cereza','Kiwi', 'Limón', 'Manzana', 'Durazno', 'Naranja', 'Pera', 'Piña', 'Sandía', 'Uvas']
            escritura = ['Avocado', 'Banana','Cherry', 'Kiwi', 'Lemon', 'Apple', 'Peach', 'Orange', 'Pear', 'Pineapple', 'Watermelon', 'Grapes']
            break;
        case 'formasColores':
            rutaLarga = 'cursos/ingles/actividades/' + actividad + '/actividad_3/'
            actividadAct = ['Cuadrado', 'Círculo', 'Triángulo', 'Rectángulo', 'Óvalo', 'Hexágono', 'Rombo', 'Estrella', 'Pentágono', 'Amarillo', 'azul', 'rojo', 'verde', 'morado', 'anaranjado', 'negro', 'blanco', 'gris']
            escritura = ['Square', 'Circle', 'Triangle', 'Rectangle', 'Oval', 'Hexagon', 'Rhombus', 'Star', 'Pentagon', 'Yellow', 'Blue', 'Red', 'Green', 'Purple', 'Orange', 'Black', 'White', 'Gray']
            break;
        case 'familia':
            rutaLarga = 'cursos/ingles/actividades/' + actividad + '/actividad_3/'
            actividadAct = ['Abuela', 'Abuelo', 'Familia', 'Gemelos', 'Hermana', 'Hermano', 'Hija', 'Hijo', 'Madre', 'Nieta', 'Nieto', 'Padre', 'Primo-Prima', 'Sobrina', 'Sobrino', 'Tía', 'Tío', 'Esposo', 'Esposa']
            escritura = ['grandma', 'grandpa', 'Family ', 'Twins', 'Sister', 'Brother', 'Daughter', 'Son', 'Mother', 'Granddaughter', 'Grandson', 'Father', 'Cousin', 'Niece', 'Nephew', 'Aunt', 'Uncle', ' Husband', 'Wife']
            break;
        case 'animales':
            rutaLarga = 'cursos/ingles/actividades/' + actividad + '/actividad_3/'
            actividadAct = ['Caballo', 'Cebra', 'Cerdo', 'Elefante', 'Gallina', 'Gato', 'Serpiente', 'León', 'Mono', 'Oso', 'Pájaro', 'Pato', 'Perro', 'Vaca']
            escritura = ['Horse', 'Zebra', 'Pig ', 'Elephant', 'Hen', 'Cat', 'Snake', 'Lion', 'Monkey', 'Bear', 'Bird', 'Duck', 'Dog', 'Cow']
            break;
        case 'partesCuerpo':
            rutaLarga = 'cursos/ingles/actividades/' + actividad + '/actividad_2/'
            actividadAct = ['Boca', 'Brazo', 'Labios', 'Lengua', 'Mano', 'Nariz', 'Ojo', 'Oreja', 'Pecho', 'Piernas', 'Rodilla','Dientes','Dedos','Pie']
            escritura = ['Mouth', 'Arm', 'Lips ', 'Tongue', 'Hand', 'Nose', 'Eye', 'Ear', 'Chest', 'Legs', 'Knee', 'Teeth', 'Fingers','Foot']
            break;
        default:
            texto = 'Opción no programada'


    }
}

