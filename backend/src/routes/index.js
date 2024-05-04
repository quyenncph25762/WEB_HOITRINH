const express = require("express")
const router = express.Router()
const routerProductQuanlity = require("./productQuanlity")
const routerNews = require("./news")
const routerCategories = require("./categories")
const routerProduct = require("./product")
const routerVarriants = require("./varriants")

router.use("/productQuanlity", routerProductQuanlity)
router.use("/news", routerNews)
router.use("/categories", routerCategories)
router.use("/products", routerProduct)
router.use("/varriants", routerVarriants)

module.exports = router