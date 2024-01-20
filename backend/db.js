// db Schema
// Todo{
//     title : string,
//     description : string,
//     completed : boolean
// }
//generally we put this file inside .env during production


const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect("mongodb+srv://chetan:hbtu123@cluster0.znhn2y8.mongodb.net/Todos")

const todoSchema = mongoose.schema({
    titile : string,
    description : string,
    completed : boolean
})

const todo = mongoose.model("Todo", todoSchema)

module.exports = {
    todo
}