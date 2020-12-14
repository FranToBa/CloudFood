const Menu  = require("../src/menu");

//Función para devolver los platos del tipo indicado
function getPlatos(tipoPlato){
    var  menu = new Menu();
    if(tipoPlato == "entrantes"){
	platos = "Nuestros ligeros entrantes son: \n"
	platos += (menu.mostrarEntrantes()).toString()
    }else if (tipoPlato == "principales"){
	platos = "Nuestros deliciosos platos principales son: \n"
	platos += (menu.mostrarPlatos()).toString()
    }else if (tipoPlato == "postres"){
	platos = "Nuestros magníficos postres son: \n"
	platos += (menu.mostrarPostres()).toString()
    }else if(tipoPlato == "fav"){
	platos = "Nuestro menú estrella es: \n"
	platos += menu.mostrarMenuSeleccionado()
    }
    return platos
}

exports.handler = async function(e, c) {
    try{
        var body = JSON.parse(e.body);
        var {chat, text} = body.message;
	var result = '';
    	
        if (text){
            switch (text) {
                case "/cfentrantes":
                  result = getPlatos('entrantes');
                  break;
                case "/cfprincipales":
                  result = getPlatos('principales');
                  break;
                case "/cfpostres":
                  result = getPlatos('postres');
                  break;
                case "/cfmenufav":
                  result = getPlatos('fav');
                  break;
                case "/help":
                  result = "Bot para consultar platos según su tipo";
                  break;
                default:
                  result = "Comandos a usar: /cfentrantes, /cfprincipales, /cfpostres, /cfmenufav, /help";
                  break;
            }       
            return {
              statusCode: 200,
              body: JSON.stringify({text:result, method:'sendMessage', chat_id:chat.id}),
              headers:{
                  'Content-Type': 'application/json; charset=utf-8'
              }
          };
        }
    }
    catch(error){
    }


}

