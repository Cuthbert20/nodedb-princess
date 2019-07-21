const disney = require("../src/data")

module.exports = {
    princesses: (req,res) => {
        console.log(req.body)
        res.status(200).send(disney)
    }
}