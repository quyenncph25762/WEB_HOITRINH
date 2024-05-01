const Categories = require("../model/categories")
class CategoriesController {
    getAllCategories(req, res, next) {
        Categories.fetchAllCategories((err, data) => {
            if (err) {
                return res.status(400).json({
                    message: err
                })
            }
            if (!data) {
                return res.status(400).json({
                    message: "San pham loi"
                })
            }
            return res.status(200).json(data)
        })
    }
    getOneCategories(req, res, next) {
        const id = req.params.id
        Categories.fetchOneCategories(id, (err, data) => {
            if (err) {
                return res.status(400).json({
                    message: err
                })
            }
            if (!data) {
                return res.status(400).json({
                    message: "San pham loi"
                })
            }
            return res.status(200).json(data[0])
        })
    }
    deleteCategoryById(req, res, next) {
        const id = req.params.id
        Categories.deleteOneCategories(id, (err, data) => {
            if (err) {
                return res.status(400).json({
                    message: err
                })
            }
            if (!data) {
                return res.status(400).json({
                    message: "San pham loi"
                })
            }
            return res.status(200).json({
                message: "xoa thanh cong!"
            })
        })
    }
    addCategories(req, res, next) {
        console.log(req.body)
        Categories.addCategory({ categoryName: req.body.categoryName }, (err, data) => {
            if (err) {
                return res.status(400).json({
                    message: err
                })
            }
            if (!data) {
                return res.status(400).json({
                    message: "San pham loi"
                })
            }
            return res.status(201).json({
                message: "Them thanh cong",
                data
            })
        })
    }
    updateCategoryById(req, res, next) {
        const id = req.params.id
        Categories.updateCategory(id, { categoryName: req.body.categoryName }, (err, data) => {
            if (err) {
                return res.status(400).json({
                    message: err
                })
            }
            if (!data) {
                return res.status(400).json({
                    message: "San pham loi"
                })
            }
            return res.status(201).json({
                message: "sua thanh cong",
                data
            })
        })
    }
}

module.exports = new CategoriesController