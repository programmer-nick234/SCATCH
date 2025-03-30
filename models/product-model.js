const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/scatch");

const  productSchema =  mongoose.Schema({
    image: String,
    name: String, 
    price: Number,
    discount: {
        type: Number,
        default:0
    },
    bgcolour: String,
    planecolour: String,
    textcolour: String,

});

module.exports = mongoose.model("Product", userSchema);

