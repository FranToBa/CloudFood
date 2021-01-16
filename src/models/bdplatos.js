const mongoose = require('mongoose');

const PlatosSchema = mongoose.Schema({
  Plato: { type: String},
  Precio: { type: Number},
  Tipo: { type: String}
});

module.exports = mongoose.model('Platos', PlatosSchema);
