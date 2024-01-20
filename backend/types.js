const { string } = require("zod");
const zod = require("zod");

const createTodo = zod.obejct({
    title : zod.string(),
    description : zod.string()
})

const updateTodo = zod.object({
    id : zod.string()
})

module.exports = {
    createTodo : createTodo,
    updateTodo : updateTodo,
}