const disney = require("../src/data")

let id = disney.length +1

module.exports = {
    princesses: (req,res) => {
        res.status(200).send(disney)
    },
    updatePrincess: (req,res) => {
        //console.log(req.params)
        const { id } = req.params
        //console.log("id",req.params,id)
        const { name } = req.body//when deconstructing remeber that the variable must match the key of the key value pair you are accessing in the body
        //console.log("Princess", req.body, name)
        const { info } = req.body
        //console.log("info",req.body,info )
        const { pets } = req.body
        const index = disney.findIndex(princess => {
            //GET MORE EXPLINATION ON WHAT IS HAPPENING HERE WALK THROUGH IT AND UPDATE THIS MESSAGE
            return princess.id === +id //always returned as a string, needs to be converted using + or parseInt
        })
        console.log("index", index)
        disney[index].name = name
        //disney[index].info = info   If we leave it active then when updating we would also need to update the info or it would be removed
        //disney[index].pets = pets   If we leave it active then when updating we would also need to update the info or it would be removed
        res.status(200).send(disney)
    },
    newPrincess: (req,res) => {
        //console.log(req.body)
        //now we just need to deconstruct req.body or are we using the spread operator I AM NOT SURE ASK FOR HELP.
        disney.push({...req.body,id})
        id++
        res.status(200).send(disney)
    },
    queryFinder: (req,res) => {
        //req.query gives us access to whichever key we are deconstructing, in this case name then we can use it in our query
        //remeber ? is the end of the url, then you enter the key, then a = then the value of the key you want to delete.
        const { name } = req.query
        console.log("name", req.query, name)
        let rightPrincess = disney.filter(elm => {
            return elm.name === name
        })
       res.status(200).send(rightPrincess)
    }
}