const express = require("express")
const database = require("./src/config/db/index")
const router = require("./src/routes")
const port = 3000
const app = express()
app.use(express.json())

app.use("/api", router)


database.connection
app.listen(port, () => {
    `Example app listening on port  http://localhost:${port}`
})


