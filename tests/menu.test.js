var Menu = require ('../src/menu.js');

const menu = new Menu("Sopa", "Pescado", "Tarta");

describe("Probando la clase menu.js", () => {

  describe("Testeando constructor", () =>{
    test("Probando la construcción correcta del objeto", () => {
      expect(menu.plato1).toBe("Sopa");
      expect(menu.plato2).toBe("Pescado");
      expect(menu.postre).toBe("Tarta");
    });

    test("Probando que avisa si el constructor no es correcto", () => {
      var e = () => new Menu("comida","comida","comida");
      expect(e).toThrow();
    });
  });
 
  describe("Testeando mostrarPrimerosPlatos", () =>{
    test("Probando la visualización de primeros platos", () => {
      var platos = ["Sopa","Pasta","Ensalada"]
      expect(menu.mostrarPrimerosPlatos()).toStrictEqual(platos);
    });
  });


  describe("Testeando mostrarSegundosPlatos", () =>{
    test("Probando la visualización de segundos platos", () => {
      var platos = ["Pescado","Carne","Arroz"]
      expect(menu.mostrarSegundosPlatos()).toStrictEqual(platos);
    });
  });

  describe("Testeando mostrarPostres", () =>{
    test("Probando la visualización de postres", () => {
      var postres = ["Tarta","Brownie","Fruta"]
      expect(menu.mostrarPostres()).toStrictEqual(postres);
    });
  });

  describe("Testeando modificarPrimerPlato", () =>{
    test("Probando que se modifica el primer plato", () => {
      var plato = "Pasta";     
      menu.modificarPrimerPlato(plato);
      expect(menu.plato1).toBe("Pasta");
    });

    test("Probando que da error si el plato no esta disponible", () => {
      var plato = "Jamon";     
      var error1 = () => menu.modificarPrimerPlato(plato);
      expect(error1).toThrow();
    });

  });

  describe("Testeando modificarSegundoPlato", () =>{
    test("Probando que se modifica el segundo plato", () => {
      var plato = "Carne";     
      menu.modificarSegundoPlato(plato);
      expect(menu.plato2).toBe("Carne");
    });

    test("Probando que da error si el plato no esta disponible", () => {
      var plato = "Pizza";     
      var error2 = () => menu.modificarSegundoPlato(plato);
      expect(error2).toThrow();
    });

  });

  describe("Testeando modificarPostre", () =>{
    test("Probando que se modifica el postre", () => {
      var plato = "Fruta";     
      menu.modificarPostre(plato);
      expect(menu.postre).toBe("Fruta");
    });

    test("Probando que da error si el postre no esta disponible", () => {
      var plato = "Yogur";     
      var error3 = () => menu.modificarPostre(plato);
      expect(error3).toThrow();
    });

  });


  describe("Testeando mostrarMenuSeleccionado", () =>{
    test("Probando la visualización del menú seleccionado (y modificado anteriormente)", () => {
      var menufinal= new Array();
      menufinal.push("PRIMER PLATO: "+"Pasta"+"\n"+"SEGUNDO PLATO: "+"Carne"+"\n"+"POSTRE: "+"Fruta");
      expect(menu.mostrarMenuSeleccionado()).toStrictEqual(menufinal);
    });

    test("Probando el error si el menu no esta completo", () => {
      menu.plato1=null;
      var e = () => menu.mostrarMenuSeleccionado();
      expect(e).toThrow();
    });


  });

})

