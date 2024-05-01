const newsModel = require("../model/news")
class NewsController {
    getAllNews(req, res, next) {
        newsModel.getAllNewsModel((err, data) => {
            if (err) {
                return res.status(400).json({
                    message: err
                })
            }
            if (data.length === 0) {
                return res.status(400).json({
                    message: "Không tìm thấy sản phẩm nào"
                })
            }
            return res.status(200).json(data)
        })
    }
    getOneNew(req, res, next) {
        const id = req.params.id
        newsModel.getOneNewsModel(id, (err, data) => {
            if (err) {
                return res.status(400).json({
                    message: err
                })
            }
            if (data.length === 0) {
                return res.status(400).json({
                    message: "Không tìm thấy sản phẩm nào"
                })
            }
            return res.status(200).json(data[0])
        })
    }
}

module.exports = new NewsController