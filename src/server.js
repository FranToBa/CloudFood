const app = require('./index.js');
var Etcd = require('node-etcd');

let etcd = new Etcd("127.0.0.1:2231");
var p;
etcd.get("port", p);
const port = p || 5000;


app.listen(port, () => {
    console.log('Escuchando el puerto ' + port);
})


