
const color=document.getElementById('azul')
const zona=document.getElementById('zona')

function hola(e){
    e.dataTransfer.setData('color', e.target.id);
   
}

function validar(e){
    e.target.classList.remove('bg-secondary');
    let color = e.dataTransfer.getData('color');

    if (e.target.dataset.id === color) {
        e.target.appendChild(document.getElementById(color));
        document.getElementById("auAzul").play()
        alert('CORRECTO')
    }else{
        e.target.appendChild(document.getElementById(color));
        document.getElementById("auMal").play()
        alert('ERROR')

    }
}

function colClase(e){
    e.preventDefault();
    e.target.classList.add('bg-secondary');
}

function quitClase(e){
    e.target.classList.remove('bg-secondary');
}

