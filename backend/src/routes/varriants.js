const express = require("express")
const VarriantsControllers = require("../controllers/VarriantsControllers")
const routerVarriants = express.Router()

routerVarriants.get("/", VarriantsControllers.getAllVarriantsControllers)

module.exports = routerVarriants
