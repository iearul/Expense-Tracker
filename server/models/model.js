const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//categories => field => ['type', 'color']
const categories_model = new Schema({
    type: { type: String, default: "Investment" },
    color: { type: String, default: "#392b82" }
})

//transection => fields => ['name', 'type', 'amount', 'date']
const transection_model = new Schema({
    name: { type: String, default: "Anonymous" },
    type: { type: String, default: "Investment" },
    amount: { type: Number, default: 0 },
    date: { type: Date, default: Date.now }
})

const Categories = mongoose.model('categories', categories_model);
const Transection = mongoose.model('transection', transection_model);

exports.default = Transection;

module.exports = {
    Categories,
    Transection
}