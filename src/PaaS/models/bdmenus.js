const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema({
  Entrante: { type: String, enum: ['Sopa','Pasta','Ensalada']},
  Principal: { type: String, enum: ['Pescado','Carne','Arroz']},
  Postre: { type: String, enum: ['Tarta','Bownie','Fruta']}

});

module.exports = mongoose.model('Menu', MenuSchema);
