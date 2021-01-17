var Menu = require ('../src/menu.js');
const request = require('supertest');
app = require('../src/index.js');

/* EStado */
describe('GET /status', () => {
  it('Testando consulta estado', (done) => {
    request(app)
      .get('/status')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
})

/* Consulta de platos */
describe("GET de la carta", function() {
  it("Testeando la consulta de menús", function(done) {
    request(app)
      .get('/carta')
      .expect('Content-Type', '/json/')
      .expect(200,done);
  });
  it("Testeando consulta de entrantes", function(done) {
    request(app)
      .get('/carta/entrantes')
      .expect('Content-Type', /json/)
      .expect(200,done);
  });
  it("Testeando consulta de platos principales", function(done) {
    request(app)
      .get('/carta/principales')
      .expect('Content-Type', /json/)
      .expect(200,done);
  });
  it("Testeando consulta de postres", function(done) {
    request(app)
      .get('/carta/postres')
      .expect('Content-Type', /json/)
      .expect(200,done);
  });
});


/* Creación de un menú*/
describe("POST /menu", function() {
  it("Testeando creación de un menú con platos no validos", function(done) {
    request(app)
      .post('/menu')
      .set('Accept', 'application/json')
      .send({entrante:'Sopa', principal:'Patatas',postre: 'Brownie'})
      .expect(400,done);
  });
  it("Testeando creación de un menú", function(done) {
    request(app)
      .post('/menu')
      .set('Accept', 'application/json')
      .send({entrante:'Sopa', principal:'Carne',postre: 'Brownie'})
      .expect('Content-Type', /json/)
      .expect(201,done);
  });
});


/* Consulta de precios de la carta o clasificados por tipo*/
describe("GET /carta/precios", function() {
  it("Testeando consulta de precios", function(done) {
    request(app)
      .get('/carta/precios')
      .expect('Content-Type', /json/)
      .expect(200,done);
  });
  it("Testeando consulta de precios de entrantes ", function(done) {
    request(app)
      .get('/carta/precios/entrantes')
      .expect('Content-Type', /json/)
      .expect(200,done);
  });
  it("Testeando consulta de precios de tipo que no existe", function(done) {
    request(app)
      .get('/carta/precios/aperitivo')
      .expect(400,done);
  });
});

/* Consulta de precios platos específicos*/
describe("GET /carta/precios/:plato", function() {
  it("Testeando consulta de precios de plato específico", function(done) {
    request(app)
      .get('/carta/precios/plato/Carne')
      .expect('Content-Type', /json/)
      .expect(200,done);
  });
  it("Testeando consulta de precios de un plato que no existe", function(done) {
    request(app)
      .get('/carta/precios/plato/Patatas')
      .expect(404,done);
  });
});
