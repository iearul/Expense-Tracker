const model = require('../models/model.js');

//POST: http://localhost:3002/api/categories
async function create_Categories(req, res) {
    const Create = new model.Categories({
        type: "Investment",
        color: "#392b82"
    })

    await Create.save(function (err) {
        if (!err) return res.json(Create);
        return res.status(400).json({ message: `Error while creating category ${err}` });
    });
}

//GET: http://localhost:3002/api/categories
async function get_Categories(req, res) {
    let data = await model.Categories.find({})
    let filter = await data.map(v => Object.assign({}, { type: v.type, color: v.color }))
    return res.json(filter);
}

//POST: http://localhost:3002/api/transaction
async function create_Transaction(req, res) {
    if (!req.body) return res.status(400).json("POST HTTP Data not provided");
    let { name, type, amount } = req.body;

    const create = await new model.Transection({
        name,
        type,
        amount,
        date: new Date()
    });
    create.save(function (err) {
        if (!err) return res.json(create);
        return res.status(400).json({ message: `Error while creating transaction ${err}` })
    });
}

//GET: http://localhost:3002/api/transaction
async function get_Transaction(req, res) {
    let data = await model.Transection.find({});
    //let filter = await data.map(v => Object.assign({}, { name: v.name, amount: v.amount, type: v.type, date: v.date }))
    return res.json(data);
}

//DELETE: http://localhost:3002/api/transaction


module.exports = {
    create_Categories,
    get_Categories,
    create_Transaction,
    get_Transaction
}