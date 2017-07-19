/*----------------------STARTING WITH CLICK-----*/


var i = 0; //contador para asignarle un id a cada texto que se escriba
$(document).ready(function () {

  $('#new-whatsapp').keydown(onKeyPress);//listener para cuando las teclas esten oprimidas.

});//end dom ready

//Esta función busca el evento 13 que es el enter del teclado para poder escribir el texto
function onKeyPress(event) {
  if (event.keyCode == 13) {
    if ($('#new-whatsapp').val() != '') {//Si el valor de lo que escriba el usuario no esta vacìo, continue.
      var html = '<div  id="item_' + i + '"><div class="col s12 offset-s1 "><div class="green-box"  onclick="onSelectItem(item_' + i + ')">' + $("#new-whatsapp").val() + ' </div>' + ' </div>'; //Esta variable crea el html con sus clases y pone un onclick que va creando divs dinamicos, llamando a la clase new-task
      $(".todo-items").append(html);//selecciono el div con la clase y en esta le adiciono el texto html
      $('#new-whatsapp').val(''); //borro contenido
      i++; //vaya sumando mi variable contador
    } else {
      alert('Escribele un mensaje a tú amigo');
    }
  }
}


function onSelectItem(item) {
  var html = '<div" id="' + item.id + '">' + $(item).html() + '</div>'; //id item nuevo
  console.log(html);
}

//FUNCIONES PARA EL EVENTO CLICK DE CONVERSACIONES

function onClickConversation(event){
//listerner al click

}