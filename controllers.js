const { Cliente, Articulo, Distribuidor, Planta } = require("./models.js");


// ------- CLIENTES

exports.readClientes = (req, res) =>
    Cliente.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readCliente = (req, res) =>
    Cliente.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deleteCliente = (req, res) =>
    Cliente.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.updateCliente = (req, res) =>
    Cliente.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createCliente = (req, res) =>
    new Cliente({ nombre: req.body.nombre, apellidos: req.body.apellidos })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



// ------ ARTÍCULOS

exports.readArticulos = (req, res) =>
    Articulo.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readArticulo = (req, res) =>
    Articulo.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deleteArticulo = (req, res) =>
    Articulo.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



exports.updateArticulo = (req, res) =>
    Articulo.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, precio: req.body.precio } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createArticulo = (req, res) =>
    new Articulo({ nombre: req.body.nombre, precio: req.body.precio })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });

    // ------- DISTRIBUIDORES

exports.readDistribuidores = (req, res) =>
Distribuidor.find({}, (err, data) => {
    if (err) res.json({ error: err });
    else     res.json(data);
});


exports.readDistribuidor = (req, res) =>
Distribuidor.findOne({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else     res.json(data);
});


exports.deleteDistribuidor = (req, res) =>
Distribuidor.findOneAndRemove({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else     res.json(data);
});


exports.updateDistribuidor = (req, res) =>
Distribuidor.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos } }, 
    (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    }
);


exports.createDistribuidor = (req, res) =>
new Distribuidor({ nombre: req.body.nombre, apellidos: req.body.apellidos })
.save((err, data) => {
    if (err) res.json({ error: err });
    else     res.json(data);
});



// ------ PLANTAS

exports.readPlantas = (req, res) =>
Planta.find({}, (err, data) => {
    if (err) res.json({ error: err });
    else     res.json(data);
});


exports.readPlanta = (req, res) =>
Planta.findOne({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else     res.json(data);
});


exports.deletePlanta = (req, res) =>
Planta.findOneAndRemove({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else     res.json(data);
});



exports.updatePlanta = (req, res) =>
Planta.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { nombre: req.body.nombre, precio: req.body.precio } }, 
    (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    }
);


exports.createPlanta = (req, res) =>
new Planta({ nombre: req.body.nombre, precio: req.body.precio })
.save((err, data) => {
    if (err) res.json({ error: err });
    else     res.json(data);
});


