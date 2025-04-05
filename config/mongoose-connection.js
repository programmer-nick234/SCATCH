const mongoose = require('mongoose');
const config = require("config");

const dgbr =  require('debug')("development : mongoose");
const mongoErrorMessage = config.has("MONGODB_ERROR_MESSAGE") 
    ? config.get("MONGODB_ERROR_MESSAGE") 
    : "MongoDB connection error";


mongoose  
.connect(`${config.get("MONGODB_URI")}/scatch`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => dgbr(config.get("MONGODB_SUCCESS_MESSAGE") || "Connected to MongoDB successfully"))
.catch(function(err){
    dgbr(config.get("MONGODB_ERROR_MESSAGE") || "Error in connection", err);
});

module.exports = mongoose.connection;

 