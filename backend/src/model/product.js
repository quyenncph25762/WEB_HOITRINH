const connection = require("../config/db")

const productsModel = {
    fetchAllProductsModel: (callback) => {
        const query = `SELECT * FROM products`
        connection.query(query, callback)
    },
    fetchOneProductsModel: (id, callback) => {
        const query = `SELECT * FROM products where _id=${id}`
        connection.query(query, id, callback)
    },
    deleteProductByIdModel: (id, callback) => {
        const query = `DELETE FROM products where _id=${id}`
        connection.query(query, id, callback)
    },
    addProductModel: (product, callback) => {
        const query = `INSERT INTO products (productName,price,discount,description,categoryId,image,averageStar) VALUES (?,?,?,?,?,?,?)`
        const values = [product.productName, product.price, product.discount, product.description, product.categoryId, product.image, product.averageStar]
        connection.query(query, values, callback)
    },
    updateProductByIdModel: (id, product, callback) => {
        const query = `UPDATE products SET productName = ? , price = ? , discount = ? , description = ? , categoryId = ? , image = ? , averageStar = ? where _id = ?`
        const values = [product.productName, product.price, product.discount, product.description, product.categoryId, product.image, product.averageStar, id]
        connection.query(query, values, callback)
    }
}

module.exports = productsModel