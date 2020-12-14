var Menu = require ('../src/menu.js');

const menu = new Menu("Sopa", "Pescado", "Tarta");

describe("Probando la clase menu.js", () => {

  describe("Testeando setters", () =>{
    test("Probando la construcción correcta del entrante", () => {
      var entrante = "Pasta"
      menu.setEntrante(entrante)
      expect(menu.entrante).toBe("Pasta");
    });
    test("Probando la construcción correcta del plato principal", () => {
      var plato = "Carne"
      menu.setPrincipal(plato)
      expect(menu.plato).toBe("Carne");
    });
    test("Probando la construcción correcta del menu completo", () => {
      var postre = "Fruta"
      menu.setPostre(postre)
      expect(menu.postre).toBe("Fruta");
    });

    test("Probando la construcción correcta del menu completo", () => {
      var entrante = "Sopa"
      var plato = "Pescado"
      var postre = "Tarta"
      menu.setPlatos(entrante,plato,postre)
      expect(menu.entrante).toBe("Sopa");
      expect(menu.plato).toBe("Pescado");
      expect(menu.postre).toBe("Tarta");
    });
    test("Probando que da error si algun plato no esta disponible", () => {
      var plato = "Jamon"
      var postre = "Tarta" 
      var entrante = "Sopa" 
      var error1 = () => menu.setPlatos(entrante,plato,postre);
      expect(error1).toThrow();
    });

  });
 
  describe("Testeando mostrarEntrantes", () =>{
    test("Probando la visualización de entrantes", () => {
      var entrantes = ["Sopa","Pasta","Ensalada"]
      expect(menu.mostrarEntrantes()).toStrictEqual(entrantes);
    });
  });


  describe("Testeando mostrarPlatos", () =>{
    test("Probando la visualización de platos", () => {
      var platos = ["Pescado","Carne","Arroz"]
      expect(menu.mostrarPlatos()).toStrictEqual(platos);
    });
  });

  describe("Testeando mostrarPostres", () =>{
    test("Probando la visualización de postres", () => {
      var postres = ["Tarta","Brownie","Fruta"]
      expect(menu.mostrarPostres()).toStrictEqual(postres);
    });
  });

  describe("Testeando modificarEntrantes", () =>{
    test("Probando que se modifica el entrante", () => {
      var entrante = "Pasta";     
      menu.modificarEntrante(entrante);
      expect(menu.entrante).toBe("Pasta");
    });

    test("Probando que da error si el plato no esta disponible", () => {
      var plato = "Jamon";     
      var error1 = () => menu.modificarEntrante(plato);
      expect(error1).toThrow();
    });

  });

  describe("Testeando modificarSegundoPlato", () =>{
    test("Probando que se modifica el plato", () => {
      var plato = "Carne";     
      menu.modificarPlato(plato);
      expect(menu.plato).toBe("Carne");
    });

    test("Probando que da error si el plato no esta disponible", () => {
      var plato = "Pizza";     
      var error2 = () => menu.modificarPlato(plato);
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
      menufinal.push("ENTRANTE: "+"Pasta"+" PLATO PRINCIPAL: "+"Carne"+" POSTRE: "+"Fruta");
      expect(menu.mostrarMenuSeleccionado()).toStrictEqual(menufinal);
    });

    test("Probando el error si el menu no esta completo", () => {
      menu.entrante=null;
      var e = () => menu.mostrarMenuSeleccionado();
      expect(e).toThrow();
    });


  });


  describe("Testeando realizarPedido", () =>{
    test("Probando la visualización del pedido realizado)", () => {
      menu.entrante="Pasta";
      var pedido= new Array();
      pedido.push("ENTRANTE: "+"Pasta"+"\n"+"PLATO PRINCIPAL: "+"Carne"+"\n"+"POSTRE: "+"Fruta"+"\n"+"DIRECCION: "+"Calle Antonio 13");
      expect(menu.realizarPedido("Calle Antonio 13")).toStrictEqual(pedido);
    });


  });


  describe("Testeando los métodos de consulta de precios", () =>{
    test("Probando la visualización de los precios de los entrantes)", () => {
      menu.entrante="Pasta";
      var pedido= new Array();
      pedido.push("Sopa"+": "+"2.5");
      pedido.push("Pasta"+": "+"3");
      pedido.push("Ensalada"+": "+"2");
      expect(menu.consultarPrecioEntrantes()).toStrictEqual(pedido);
    });
    test("Probando la visualización de los precios de los platos principales)", () => {
      menu.entrante="Pasta";
      var pedido= new Array();
      pedido.push("Pescado"+": "+"4.5");
      pedido.push("Carne"+": "+"5");
      pedido.push("Arroz"+": "+"4");
      expect(menu.consultarPrecioPlatos()).toStrictEqual(pedido);
    });
    test("Probando la visualización de los precios de los postres)", () => {
      menu.entrante="Pasta";
      var pedido= new Array();
      pedido.push("Tarta"+": "+"1.5");
      pedido.push("Brownie"+": "+"2");
      pedido.push("Fruta"+": "+"1");
      expect(menu.consultarPrecioPostres()).toStrictEqual(pedido);
    });
    test("Probando la visualización del precio de un plato seleccionado)", () => {
      var plato = 'Brownie'
      expect(menu.consultarPrecioPlato(plato)).toStrictEqual(2);
    });
    test("Probando la visualización del precio de un plato seleccionado que no está disponible)", () => {
      var plato = 'Patatas'
      var error = 'Plato no disponible'
      expect(menu.consultarPrecioPlato(plato)).toStrictEqual(error);
    });

  });
  describe("Testeando los métodos de consulta de precios de un menu seleccionado", () =>{
    test("Probando la visualización de los precios de los entrantes)", () => {
      menu.entrante="Pasta";
      var precio= new Array();
      precio.push("Precio del menú: " + 9);
      expect(menu.consultarPrecioMenu()).toStrictEqual(precio);
    });

  });



})

