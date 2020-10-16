//Simulamos enums sobre los tipos de platos
const PLATOS1 = ['Sopa','Pasta','Ensalada']
Object.freeze(PLATOS1);

const PLATOS2 = ['Pescado','Carne','Arroz']
Object.freeze(PLATOS2);


const POSTRES = ['Tarta','Brownie','Fruta']
Object.freeze(POSTRES);

class Menu {

    /*Constructor en el que comprobamos que se seleccionan platos disponibles*/
    constructor(plato1, plato2, postre){

	if(PLATOS1.includes(plato1)){
		this.plato1 = plato1;
	}else{	
		this.platos1 = null;
		this.plato2 = null;
		this.postre = null;
		throw new Error("Primer plato no disponible");
	}

	if(PLATOS2.includes(plato2)){
		this.plato2 = plato2;
	}else{	
		this.plato2 = null;
		this.postre = null;
		throw new Error("Segundo plato no disponible");
	}

	if(POSTRES.includes(postre)){
		this.postre = postre;
	}else{	
		this.postre = null;
		throw new Error("Postre no disponible");
	}
    }

    
    /* Get de los primeros platos disponibles */
    mostrarPrimerosPlatos(){
	var platos1 = new Array();
	for(var i=0;i<PLATOS1.length;i++){
		platos1.push(PLATOS1[i]);
	}
	return platos1;
    }

    /* Get de los segundos platos disponibles */
    mostrarSegundosPlatos(){
	var platos2 = new Array();
	for(var i=0;i<PLATOS2.length;i++){
		platos2.push(PLATOS2[i]);
	}
	return platos2;
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
    modificarPrimerPlato(plato1){
	if(PLATOS1.includes(plato1)){
		this.plato1 = plato1;
	}else{
		throw new Error("Primer plato no disponible");
	}
    }

    modificarSegundoPlato(plato2){
	if(PLATOS2.includes(plato2)){
		this.plato2 = plato2;
	}else{
		throw new Error("Segundo plato no disponible");
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
	if(this.plato1!=null && this.plato2!=null && this.postre!=null){		
		menuSeleccionado.push("PRIMER PLATO: "+this.plato1+"\n"+"SEGUNDO PLATO: "+this.plato2+"\n"+"POSTRE: "+this.postre);
	}else{
		throw new Error("El menu no esta completo");
		
	}

	return menuSeleccionado;
		
    }
	
}

module.exports = Menu;
