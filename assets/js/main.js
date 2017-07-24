/*----------------------STARTING WITH CLICK-----*/
$(document).ready(function () {
    $('#new-whatsapp').keydown(onKeyPress);//listener para cuando las teclas esten oprimidas.
    $('#searchText').keydown(onKeyPressNames);//listerne buscador nombres

    setupWhatsApp();
    getFromLocalStorage()

});//end dom ready

//Esta función busca el evento 13 que es el enter del teclado para poder escribir el texto
function onKeyPress(event) {

    if (event.keyCode == 13) {
        if ($('#new-whatsapp').val() != '') {//Si el valor de lo que escriba el usuario no esta vacìo, continue.
            var html = '<div class="message-text">' + $("#new-whatsapp").val() + ' </div>'; //Esta variable crea el html con sus clases          
            $(".sender").append(html);//selecciono el div con la clase y en esta le adiciono el texto html 
            saveToLocalStorage();
            $('#new-whatsapp').val(''); //borro contenido
        } else {
            alert('Escribele un mensaje a tú amigo');
        }
    }

}


//FUNCIONES PARA EL EVENTO CLICK DE CONVERSACIONES
var whatsappUsers = [{ name: "Laboratoria Perú", id: 1, image: "logocodeacademy.png", text: "No se pique!" }, { name: "Raimy  Saldomando", id: 2, image: "raymi.jpg", text: "La clase va bien!" }, { name: "Mariana Costa", id: 3, image: "mariana.jpg", text: "El panel de speakers esta buenazo" }, { name: "Ana María Martínez", id: 4, image: "anamaria.jpg", text: "Pues dale chamo!" }, { name: "Rodulfo Prieto", id: 5, image: "rodulfo.jpg", text: "¿cómo van las chicas?" }, { name: "Andrea Lamas", id: 6, image: "andrea.jpg", text: "Hoy me toca clases de canto, yeey!" }, { name: "María Paula Rivarola", id: 7, image: "mariapaula.jpg", text: "Wuju, esto me encanta!! en verdad" }, { name: "Katy Sánchez", id: 8, image: "katy.jpg", text: "No te preocupes, tengo el salón bajo control" }, { name: "Aldo Alfaro", id: 9, image: "aldo.jpg", text: "vamos a comer?" }];//los participantes de la conversacion

//Funcion para crear elementos dinámicamente
function setupWhatsApp() {
    var html = '';
    for (var index = 0; index < whatsappUsers.length; index++) {
        var element = whatsappUsers[index];
        html += ` 
                        <div class="row sideBar-body  ` +` name_` + element.id+` ">
                            <div class="col-sm-3 col-xs-3 sideBar-avatar">
                                <div class="avatar-icon">
                                  <img src="img/`+ element.image + `">
                                </div>
                            </div>
                            <div class="col-sm-9 col-xs-9 sideBar-main">
                                <div class="row">
                                    <div class="col-sm-8 col-xs-8 sideBar-name">
                                        <span  id="conversation_` + element.id + `" data-id="` + element.id + `" href="#" class="whatsapp-profile">` + element.name + `</span><br></a>
                                            <small class="information-text">`+ element.text + `</small>
                                    </div>
                                    <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                        <span class="time-meta pull-right">18:18</span>
                                    </div>
                                </div>
                            </div>
                    </div>`;
    }
    
    $('.profiles').html(html);
    $('.whatsapp-profile').click(onClickProfile);


}
//Evento para el click y que cambie la información en el panel
function onClickProfile(event) {
    var id = $(event.currentTarget).attr("data-id");//le asigno el atributo q contiene el ID para poderlo utilizar
    var whatsapp = whatsappUsers.find(function (element) {
        return element.id == id;
    });
    var html = ` <div class="col-sm-2 col-md-1 col-xs-3 heading-avatar">
                        <div class="heading-avatar-icon">
                            <img src="img/`+ whatsapp.image + `">
                        </div>
                    </div>
                    <div class="col-sm-8 col-xs-7 heading-name">
                        <a class="heading-name-meta whatsapp-profile">`+ whatsapp.name + `</a>
                        <small >`+ whatsapp.text + `</small>
                    </div>
                    <div class="col-sm-1 col-xs-1  heading-dot pull-right">
                        <i class="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true"></i>
                        
                    </div>`;
    $('.whatsapp-names').html(html);

    var messages = whatsapp.text;
    $(".receiver").html(messages);


}
//Local storage
function saveToLocalStorage() {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem('sender', "whatsappMessagge");

    } else {
        alert("Sorry! No Web Storage support..");
    }
}

function getFromLocalStorage() {
    $('.sender').val(localStorage.getItem('sender'));
}


/*BUSCADOR, este busca el nombre o apellido en el arreglo y retorna true si lo encontró */
function findName(name) {
    var result = whatsappUsers.find(function (element) {
        var r = element.name.indexOf(name);//En qué posición esta el nombre? retorna la posición
        if(r > -1){ // si la posición es mayor a -1 (-1 xq esto retorna en caso de ser negativo)
            return true; 
        }
    });
    return result;
}


function onKeyPressNames(event) {
    if (event.keyCode == 13) {
        var result = $("#searchText").val();// lo que escribe el usuario
        if (result != '') {
            var objectWhastapp = findName(result); //busca el nombre ingresado
            if (typeof objectWhastapp != "undefined") {
             if (objectWhastapp.name === "Mariana") {
                 //$( ".name_1" ).addClass("hide");
             }
        } else {
            alert("Buscador no puede estar vacío")

        }
    }

}
}



