//write basic express boilerplate code
//express.json() as middleware
const express= require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json());

app.post("/todo",(req,res) => {
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad)
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg : "user sent the wrong inputs"
        })
        return;
    }
})

app.get("/todos", (req,res) =>{

})

app.put("/completed",(req,res) => {
    const updatePayload = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayload)
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg : " user sent the wrong inputs"
        })
    }

})

const PORT = 3000;

app.listen(PORT);