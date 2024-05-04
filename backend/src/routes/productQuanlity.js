const express = require("express")
const routerProductQuanlity = express.Router()
const ProductQuanlityController = require("../controllers/ProductQuanlityController")

routerProductQuanlity.get("/", ProductQuanlityController.getAll)
routerProductQuanlity.get("/:id", ProductQuanlityController.getOne)

module.exports = routerProductQuanlity