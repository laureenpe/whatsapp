/*----------------------STARTING WITH CLICK-----*/
$(document).ready(function () {
  $('#new-whatsapp').keydown(onKeyPress);//listener para cuando las teclas esten oprimidas.
  $(".whatsapp-profile").click(onClickConversation);

  setupWhatsApp();

});//end dom ready

//Esta función busca el evento 13 que es el enter del teclado para poder escribir el texto
function onKeyPress(event) {
  if (event.keyCode == 13) {
    if ($('#new-whatsapp').val() != '') {//Si el valor de lo que escriba el usuario no esta vacìo, continue.
      var html = '<div "><div class="col s12 right "><div class="green-box"  >' + $("#new-whatsapp").val() + ' </div>' + ' </div>'; //Esta variable crea el html con sus clases
      $(".todo-items").append(html);//selecciono el div con la clase y en esta le adiciono el texto html
      $('#new-whatsapp').val(''); //borro contenido
    } else {
      alert('Escribele un mensaje a tú amigo');
    }
  }
}


//FUNCIONES PARA EL EVENTO CLICK DE CONVERSACIONES
var whatsappUsers = [{ name: "Laboratoria Perú", id: 1, image: "logocodeacademy.png", text: "No se pique!" }, { name: "Raimy  Saldomando", id: 2, image: "raymi.jpg", text: "La clase va bien!" }, { name: "Mariana Costa", id: 3, image: "mariana.jpg", text: "El panel de speakers esta buenazo" }, { name: "Ana María Martínez", id: 4, image: "anamaria.jpg", text: "Pues dale chamo!" }, { name: "Rodulfo Prieto", id: 5, image: "rodulfo.jpg", text: "¿cómo van las chicas?" }, { name: "Andrea Lamas", id: 6, image: "andrea.jpg", text: "Hoy me toca clases de canto, yeey!" }, { name: "María Paula Rivarola", id: 7, image: "mariapaula.jpg", text: "Wuju, esto me encanta!! en verdad" }, { name: "Katy Sánchez", id: 8, image: "katy.jpg", text: "No te preocupes, tengo el salón bajo control" }, { name: "Aldo Alfaro", id: 9, image: "aldo.jpg", text: "vamos a comer?" }];//los participantes de la conversacion

function onClickConversation() {

  var laboratoria = $("#laboratoria");
  var raymi = $("#raymi");
  var mariana = $("#mariana");
  var anaMaria = $("#anamaria");
  var rodulfo = $("#rodulfo");
  var andrea = $("#andrea");
  var mariaPaula = $("#mariapaula");
  var katy = $("#katy");
  var aldo = $("#aldo");
}

function setupWhatsApp() {
  var html = '';
  for (var index = 0; index < whatsappUsers.length; index++) {
    var element = whatsappUsers[index];
    html += ` <div class="row">
      <div class="col s2"><img class="circle" src="assets/img/`+ element.image + `" alt="photo"></div>
      <div class="col s10"><a id="conversation_` + element.id + `" data-id="` + element.id + `" href="#" class="whatsapp-profile"><small>` + element.name + `</small><br></a>
      <small class="information-text">`+ element.text + `</small>
      <div class="divider"></div></div>
    </div>`;
  }

  $('.conversations').html(html);
  $('.whatsapp-profile').click(onClickProfile);

}

function onClickProfile(event) {
  var id = $(event.currentTarget).attr("data-id");
  var whatsapp = whatsappUsers.find(function (element) {
    return element.id == id;
  });
  var html = `<div class="col s8">
                    <div class="col s2 ">
                        <img class="circle " src="assets/img/` + whatsapp.image + `" alt="photo">
                    </div>
                    <div class="col s10">
                        <a href="#" class="whatsapp-profile"><small>`+ whatsapp.name + `</small><br></a>
                        <small >`+ whatsapp.text + `</small>
                    </div>`;
  $('.whatsapp-names').html(html);
  console.log(whatsapp)
}
