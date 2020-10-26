//Simulamos enums sobre los tipos de platos
const ENTRANTES = ['Sopa','Pasta','Ensalada']
Object.freeze(ENTRANTES);

const PLATOS = ['Pescado','Carne','Arroz']
Object.freeze(PLATOS);


const POSTRES = ['Tarta','Brownie','Fruta']
Object.freeze(POSTRES);

class Menu {

    /*Constructor en el que comprobamos que se seleccionan platos disponibles*/
    constructor(entrante, plato, postre){

	if(ENTRANTES.includes(entrante)){
		this.entrante = entrante;
	}else{	
		this.entrante = null;
		this.plato = null;
		this.postre = null;
		throw new Error("Entrante no disponible");
	}

	if(PLATOS.includes(plato)){
		this.plato = plato;
	}else{	
		this.plato = null;
		this.postre = null;
		throw new Error("Plato principal no disponible");
	}

	if(POSTRES.includes(postre)){
		this.postre = postre;
	}else{	
		this.postre = null;
		throw new Error("Postre no disponible");
	}
    }

    
    /* Get de los entrantes disponibles */
    mostrarEntrantes(){
	var entrantes = new Array();
	for(var i=0;i<ENTRANTES.length;i++){
		entrantes.push(ENTRANTES[i]);
	}
	return entrantes;
    }

    /* Get de los platos disponibles */
    mostrarPlatos(){
	var platos = new Array();
	for(var i=0;i<PLATOS.length;i++){
		platos.push(PLATOS[i]);
	}
	return platos;
    }

   /* Get de los postres disponibles */
    mostrarPostres(){
	var postres = new Array();
	for(var i=0;i<POSTRES.length;i++){
		postres.push(POSTRES[i]);
	}
	return postres;
    }

   //Modificar platos comprobando si están disponibles
    modificarEntrante(entrante){
	if(ENTRANTES.includes(entrante)){
		this.entrante = entrante;
	}else{
		throw new Error("Entrante no disponible");
	}
    }

    modificarPlato(plato){
	if(PLATOS.includes(plato)){
		this.plato = plato;
	}else{
		throw new Error("Plato principal no disponible");
	}
    }

    modificarPostre(postre){
	if(POSTRES.includes(postre)){
		this.postre = postre;
	}else{
		throw new Error("Postre no disponible");
	}
    }

    //Mostrar el menu completo
    mostrarMenuSeleccionado(){
	var menuSeleccionado = new Array();
	if(this.entrante!=null && this.plato!=null && this.postre!=null){		
		menuSeleccionado.push("ENTRANTE: "+this.entrante+"\n"+"PLATO PRINCIPAL: "+this.plato+"\n"+"POSTRE: "+this.postre);
	}else{
		throw new Error("El menu no esta completo");
		
	}

	return menuSeleccionado;
		
    }

    realizarPedido(direccion){
	var pedido = new Array();
	if(this.entrante!=null && this.plato!=null && this.postre!=null){		
		pedido.push("ENTRANTE: "+this.entrante+"\n"+"PLATO PRINCIPAL: "+this.plato+"\n"+"POSTRE: "+this.postre +"\n"+"DIRECCION: "+ direccion);
	}else{
		throw new Error("El menu no esta completo o la dirección no ha sido introducida");
		
	}

	return pedido;
     }
	
	
}

module.exports = Menu;
