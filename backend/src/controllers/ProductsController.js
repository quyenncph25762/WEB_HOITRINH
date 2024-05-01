const ProductModel = require("../model/product")
class ProductsController {
    getAllProductController(req, res, next) {
        ProductModel.fetchAllProductsModel((err, data) => {
            if (err) {
                return res.status(400).json({
                    message: err
                })
            }
            if (!data) {
                return res.status(400).json({
                    message: "Khong co data"
                })
            }
            return res.status(200).json(data)
        })
    }
    getOneProductByIdController(req, res, next) {
        const id = req.params.id
        ProductModel.fetchOneProductsModel(id, (err, data) => {
            if (err) {
                return res.status(400).json({
                    message: err
                })
            }
            if (!data) {
                return res.status(400).json({
                    message: "Khong co data"
                })
            }
            return res.status(200).json(data[0])
        })
    }
    removeProductByIdController(req, res, next) {
        const id = req.params.id
        ProductModel.deleteProductByIdModel(id, (err, data) => {
            if (err) {
                return res.status(400).json({
                    message: err
                })
            }
            if (!data) {
                return res.status(400).json({
                    message: "Khong co data"
                })
            }
            return res.status(200).json({
                message: "Xoa thanh cong"
            })
        })
    }
    addProductController(req, res, next) {
        ProductModel.addProductModel({
            productName: req.body.productName,
            price: req.body.price,
            discount: req.body.discount,
            description: req.body.description,
            categoryId: req.body.categoryId,
            image: req.body.image,
            averageStar: req.body.averageStar
        }, (err, data) => {
            if (err) {
                return res.status(400).json({
                    message: err
                })
            }
            if (!data) {
                return res.status(400).json({
                    message: "Khong co data"
                })
            }
            return res.status(200).json({
                message: "them thanh cong",
                data
            })
        })
    }
    updateProductController(req, res, next) {
        const id = req.params.id
        ProductModel.updateProductByIdModel(id, {
            productName: req.body.productName,
            price: req.body.price,
            discount: req.body.discount,
            description: req.body.description,
            categoryId: req.body.categoryId,
            image: req.body.image,
            averageStar: req.body.averageStar
        }, (err, data) => {
            if (err) {
                return res.status(400).json({
                    message: err
                })
            }
            if (!data) {
                return res.status(400).json({
                    message: "Khong co data"
                })
            }
            return res.status(200).json({
                message: "sua thanh cong",
                data
            })
        })
    }
}

module.exports = new ProductsController