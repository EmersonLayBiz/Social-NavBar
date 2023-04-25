const toggleBoton = document.querySelector('.desplegar_img')
const toggleImagen = document.querySelector('.desplegar_img img')
const toggleImagen1 = document.querySelector('.desplegar_img img')
const mobilNavegacion = document.querySelector('.seguir_ul_li')
const mobilNavegacion1 = document.querySelector('.seguir_ul_li1')
const mobilNavegacion2 = document.querySelector('.seguir_ul_li2')
const mobilNavegacion3 = document.querySelector('.seguir_ul_li3')
toggleBoton.onclick = function(){
    mobilNavegacion.classList.toggle('despliegue')
    mobilNavegacion1.classList.toggle('despliegue')
    mobilNavegacion2.classList.toggle('despliegue')
    mobilNavegacion3.classList.toggle('despliegue')
    toggleImagen1.classList.toggle('.desplegar_imagen')
    const desplegar = mobilNavegacion.classList.contains('despliegue');
    if (desplegar) {
        toggleImagen.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/10158/10158346.png');
    } else {
        toggleImagen.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/8367/8367755.png');
    }
}