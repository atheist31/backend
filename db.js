const  mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://ravi:ravibhashkar@cluster0.yzaylus.mongodb.net/eva4?retryWrites=true&w=majority")

module.exports={
    connection
}

