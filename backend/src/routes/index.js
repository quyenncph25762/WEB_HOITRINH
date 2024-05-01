const express = require("express")
const router = express.Router()
const routerProductQuanlity = require("./productQuanlity")
const routerNews = require("./news")
const routerCategories = require("./categories")
const routerProduct = require("./product")

router.use("/productQuanlity", routerProductQuanlity)
router.use("/news", routerNews)
router.use("/categories", routerCategories)
router.use("/products", routerProduct)

module.exports = router