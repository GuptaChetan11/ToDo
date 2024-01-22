//write basic express boilerplate code
//express.json() as middleware
const express = require("express");
const { todo } = require("./db");
const { createTodo, updateTodo } = require("./types");
const app = express();
const cors = require("cors");
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const createPayLoad = req.body;
  const parsedPayLoad = createTodo.safeParse(createPayLoad);
  if (!parsedPayLoad.success) {
    res.status(411).json({
      msg: "user sent the wrong inputs",
    });
    return;
  }
  //await beacuse if db is down then user will not get msg that Todo created successfully
  await todo.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    completed: false,
  });

  res.json({
    msg: "Todo created successfully",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayLoad = updateTodo.safeParse(updatePayload);
  if (!parsedPayLoad.success) {
    res.status(411).json({
      msg: " user sent the wrong inputs",
    });
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "ToDo completed successfully",
  });
});

// app.listen(8080);

app.listen(PORT, () => console.log(`Your server is listening on ${PORT}`));
