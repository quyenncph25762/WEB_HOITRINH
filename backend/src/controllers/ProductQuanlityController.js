const ProductQuantity = require("../model/productQuantity")
class productQuanlityController {
    getAll(req, res, next) {
        ProductQuantity.getAllProductQuanlityModel((err, data) => {
            if (err) {
                return res.status(200).json({
                    message: err
                })
            }
            return res.status(200).json(
                data
            )
        })
    }
    getOne(req, res, next) {
        const id = req.params.id
        ProductQuantity.getOneProductQuanlityModel(id, (err, data) => {
            if (err) {
                return res.status(400).json({
                    message: err
                })
            }
            if (!data || data.length === 0) {
                return res.status(200).json({
                    message: "Không thấy giá trị nào"
                })
            }
            console.log(data[0])
            return res.status(200).json(
                data[0]
            )
        })
    }
}

module.exports = new productQuanlityController