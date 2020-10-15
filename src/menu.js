
export const plato1 = {
    SOPA: 'sopa',
    PASTA: 'pasta',
    ENSALaDA: 'ensalada'
	
}

export const plato2 = {
    PESCADO: 'pescado',
    CARNE: 'carne',
    PASTA: 'pasta',
    ARROZ: 'arroz'
}

export const bebida = {
    REFRESCO: 'refresco',
    AGUA: 'agua',
    ZUMO: 'zumo'
}

export const postre = {
    TARTA: 'tarta',
    BROWNIE: 'brwonie',
    YOGUR: 'yogur',
    FRUTA: 'fruta'
	
}

export default class Menu {
    constructor(plato1, plato2, bebida, postre){
        this.plato1 = plato1;
        this.plato2 = plato2;
	this.bebida = bebida;
	this.postre = postre;
    }
}
