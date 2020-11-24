const data = require("./data");
const Menu  = require("../src/menu");


module.exports = (req,res) =>{

   //Declaramos las variables: el argumento del menu elegido => -1 si no hay arg
    const{numMenu=-1} = req.query
    var result;
    var i = 0;
    var carta = []

    //Guardamos en un arrat carta los menus obtenidos del fichero data
    while( i < data.data.length){
	entrante = data.data[i]['entrante'];
        principal = data.data[i]['principal'];
	postre = data.data[i]['postre'];      
        var menu = new Menu(entrante,principal,postre)
        carta.push(menu)
	i+=1
    }

    //Dependiendo del numero del menu, seleccionamos dicho menu o indicamos si hay fallo,
    //Pasamos el menu a json

    if(numMenu == 1 || numMenu == 2 || numMenu == 3){
    	var datosJSON = []
    	var objetoJSON = {}
        var menuElegido = carta[numMenu-1]
        
        datosJSON.push({menuElegido.mostrarMenuSeleccionado()});
        objetoJSON = datosJSON;
        result = JSON.stringify(objetoJSON)
        
    }
    else if(menu == -1){
        result="Indica un menú";
    }
    else{
        result="Solo disponemos de los menús: 1, 2 y 3";
    }

    res.status(200).send(result)

}
