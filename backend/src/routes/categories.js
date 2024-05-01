const express = require("express")
const CategoriesController = require("../controllers/CategoriesController")
const routerCategories = express.Router()

routerCategories.get("/", CategoriesController.getAllCategories)
routerCategories.get("/:id", CategoriesController.getOneCategories)
routerCategories.post("/add", CategoriesController.addCategories)
routerCategories.put("/update/:id", CategoriesController.updateCategoryById)
routerCategories.delete("/:id", CategoriesController.deleteCategoryById)
module.exports = routerCategories