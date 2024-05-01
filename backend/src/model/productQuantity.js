const connection = require("../config/db")

const productQuanlityModel = {
    getAllProductQuanlityModel: (callback) => {
        const query = `SELECT * FROM productQuanlity`
        connection.query(query, callback)
    },
    getOneProductQuanlityModel: (id, callback) => {
        const query = `SELECT * FROM productQuanlity where _id=${id}`
        connection.query(query, id, callback)
    },
}

module.exports = productQuanlityModel