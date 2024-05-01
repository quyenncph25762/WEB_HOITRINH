const express = require("express")
const NewsController = require("../controllers/NewsController")
const router = express.Router()

router.get("/", NewsController.getAllNews)
router.get("/:id", NewsController.getOneNew)
module.exports = router