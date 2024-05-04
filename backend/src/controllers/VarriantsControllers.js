const Varriants = require("../model/varriants")
class VarriantsControllers {
    getAllVarriantsControllers(req, res) {
        Varriants.getAllVarriantModel((err, data) => {
            if (err) {
                return res.status(400).json({
                    message: err
                })
            }
            if (!data) {
                return res.status(400).json({
                    message: err
                })
            }
            return res.status(400).json(data)
        })
    }
}

module.exports = new VarriantsControllers