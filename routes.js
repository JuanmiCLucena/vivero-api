const cors       = require('cors')
const express    = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get    ("/clientes",      cors(), controller.readClientes);   // Read All
router.get    ("/clientes/:id",  cors(), controller.readCliente);    // Read
router.delete ("/clientes/:id",  cors(), controller.deleteCliente);  // Delete
router.put    ("/clientes/:id",  cors(), controller.updateCliente);  // Update
router.post   ("/clientes",      cors(), controller.createCliente);  // Create

router.get    ("/articulos",     cors(), controller.readArticulos);  // Read All
router.get    ("/articulos/:id", cors(), controller.readArticulo);   // Read
router.delete ("/articulos/:id", cors(), controller.deleteArticulo); // Delete
router.put    ("/articulos/:id", cors(), controller.updateArticulo); // Update
router.post   ("/articulos",     cors(), controller.createArticulo); // Create


router.get    ("/distribuidores",     cors(), controller.readDistribuidores);  // Read All
router.get    ("/distribuidores/:id", cors(), controller.readDistribuidor);   // Read
router.delete ("/distribuidores/:id", cors(), controller.deleteDistribuidor); // Delete
router.put    ("/distribuidores/:id", cors(), controller.updateDistribuidor); // Update
router.post   ("/distribuidores",     cors(), controller.createDistribuidor); // Create

router.get    ("/plantas",      cors(), controller.readPlantas);   // Read All
router.get    ("/plantas/:id",  cors(), controller.readPlanta);    // Read
router.delete ("/plantas/:id",  cors(), controller.deletePlanta);  // Delete
router.put    ("/plantas/:id",  cors(), controller.updatePlanta);  // Update
router.post   ("/plantas",      cors(), controller.createPlanta);  // Create

module.exports = router;
