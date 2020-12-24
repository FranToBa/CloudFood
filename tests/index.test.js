var Menu = require ('../src/menu.js');
const request = require('supertest');
app = require('../src/index.js');


describe("GET /", function() {
  it("Testeando pagina inicio", function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', "text/html; charset=utf-8")
      .expect(200,done);
  });
});

/* Consulta de platos */
describe("GET de la carta", function() {
  it("Testeando la consulta de menús", function(done) {
    request(app)
      .get('/carta')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200,done);
  });
  it("Testeando consulta de entrantes", function(done) {
    request(app)
      .get('/carta/entrantes')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200,done);
  });
  it("Testeando consulta de platos principales", function(done) {
    request(app)
      .get('/carta/principales')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200,done);
  });
  it("Testeando consulta de postres", function(done) {
    request(app)
      .get('/carta/postres')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200,done);
  });
});


/* Creación de un menú*/
describe("PUT /menu/:entrate/:plato/:postre", function() {
  it("Testeando creación de un menú con platos no validos", function(done) {
    request(app)
      .put('/menu/Sopa/Calamares/Fruta')
      .expect(400,done);
  });
  it("Testeando creación de un menú", function(done) {
    request(app)
      .put('/menu/Sopa/Carne/Fruta')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(201,done);
  });
});

/* Consulta del menu seleccionado */
describe("GET del menu", function() {
  it("Testeando la consulta del menú seleccionado", function(done) {
    request(app)
      .get('/menu')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200,done);
  });
});

/* Modificación de un menú*/
describe("PUT /menu/:tipo/:plato", function() {
  it("Testeando modificación del plato de un menu con tipo no disponible", function(done) {
    request(app)
      .put('/menu/modificar/aperitivo/Patatas')
      .expect(400,done);
  });
  it("Testeando modificación de un plato del menu con plato no válido", function(done) {
    request(app)
      .put('/menu/modificar/entrante/Patatas')
      .expect(409,done);
  });
  it("Testeando modificación de un menu", function(done) {
    request(app)
      .put('/menu/modificar/entrante/Pasta')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200,done);
  });
});


/* Consulta de precios de la carta o clasificados por tipo*/
describe("GET /preciosCarta", function() {
  it("Testeando consulta de precios", function(done) {
    request(app)
      .get('/preciosCarta')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200,done);
  });
  it("Testeando consulta de precios de entrantes", function(done) {
    request(app)
      .get('/preciosCarta/entrantes')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200,done);
  });
  it("Testeando consulta de precios de tipo que no existe", function(done) {
    request(app)
      .get('/preciosCarta/aperitivo')
      .expect(400,done);
  });
});

/* Consulta de precios platos específicos*/
describe("GET /preciosPlato", function() {
  it("Testeando consulta de precios de plato específico", function(done) {
    request(app)
      .get('/preciosPlato/Pasta')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200,done);
  });
  it("Testeando consulta de precios de un plato que no existe", function(done) {
    request(app)
      .get('/preciosPlato/Patatas')
      .expect(409,done);
  });
  it("Testeando consulta de precios de un plato sin indicarlo", function(done) {
    request(app)
      .get('/preciosPlato')
      .expect(400,done);
  });
});


