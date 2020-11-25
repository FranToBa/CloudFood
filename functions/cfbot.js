const Menu  = require("../src/menu");

function getPlatos(tipoPlato){
   //Creamos un menu y devolvemos los platos del tipo indicado
    var  menu = new Menu("Sopa", "Pescado", "Tarta");
    if(tipoPlato == "entrantes")
	platos= menu.mostrarEntrantes()
    else if (tipoPlato == "principales")
	platos= menu.mostrarPlatos()
    else if (tipoPlato == "postres")
	platos= menu.mostrarPostres()
    else if(tipoPlato == "fav")
	platos = menu.mostrarMenuSeleccionado()

    return platos
}

exports.handler = async function(e, c) {
    try{
        var body = JSON.parse(e.body);
        var {chat, text} = body.message;
	var result = '';
      
        if (text){ //Contiene texto el mensaje, será el comando
            
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
                  result = "Comandos a usar: /entrantes, /principales, /postres, /menufav, /help"
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

