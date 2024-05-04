const connection = require("../config/db")

const varriantModel = {
    getAllVarriantModel: (callBack) => {
        const query = `SELECT * FROM varriants`
        connection.query(query, callBack)
    }
}

module.exports = varriantModel