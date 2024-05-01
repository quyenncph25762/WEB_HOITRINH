const connection = require("../config/db")

const newsModel = {
    getAllNewsModel: (callBack) => {
        const query = `SELECT * FROM news`
        connection.query(query, callBack)
    },
    getOneNewsModel: (id, callBack) => {
        const query = `SELECT * FROM news Where _id=${id}`
        connection.query(query, id, callBack)
    }
}

module.exports = newsModel