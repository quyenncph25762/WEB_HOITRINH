const connection = require("../config/db")

const categoryModel = {
    addCategory: (cate, callback) => {
        const query = `INSERT INTO categories (categoryName) VALUES (?)`;
        const values = [cate.categoryName]
        connection.query(query, values, callback)
    },
    updateCategory: (id, cate, callback) => {
        const query = `UPDATE categories SET categoryName = ? WHERE _id=${id}`;
        const values = [cate.categoryName]
        connection.query(query, values, callback)
    },
    fetchAllCategories: (callback) => {
        const query = `SELECT * FROM categories`
        connection.query(query, callback)
    },
    fetchOneCategories: (id, callback) => {
        const query = `SELECT * FROM categories Where _id=${id}`
        connection.query(query, id, callback)
    },
    deleteOneCategories: (id, callback) => {
        const query = `DELETE FROM categories Where _id=${id}`
        connection.query(query, id, callback)
    }
}

module.exports = categoryModel