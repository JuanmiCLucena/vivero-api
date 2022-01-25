const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente',
  new mongoose.Schema({ nombre: String, apellidos: String })
);

const Articulo = mongoose.model('Articulo',
  new mongoose.Schema({ nombre: String, precio: Number })
);

const Distribuidor = mongoose.model('Distribuidor',
  new mongoose.Schema({ nombre: String, apellidos: String })
);

const Planta = mongoose.model('Planta',
  new mongoose.Schema({ nombre: String, precio: Number })
);

module.exports = {
  Cliente: Cliente,
  Articulo: Articulo,
  Distribuidor: Distribuidor,
  Planta: Planta
}

// Otra forma más corta:
// module.exports = {
//     Cliente,
//     Articulo
// }
