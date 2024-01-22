// db Schema
// Todo{
//     title : string,
//     description : string,
//     completed : boolean
// }
//generally we put this file inside .env during production

const { application } = require("express");
const mongoose = require("mongoose");
const { string, boolean } = require("zod");

mongoose.connect(
  "mongodb+srv://chetan:hbtu123@cluster0.znhn2y8.mongodb.net/Todos"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("Todo", todoSchema);

module.exports = {
  todo,
};
