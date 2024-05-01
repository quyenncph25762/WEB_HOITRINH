const express = require("express")
const ProductQuanlityController = require("../controllers/ProductQuanlityController")
const routerProductQuanlity = express.Router()

routerProductQuanlity.get("/", ProductQuanlityController.getAll)
routerProductQuanlity.get("/:id", ProductQuanlityController.getOne)

module.exports = routerProductQuanlity