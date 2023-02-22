const express = require("express");
const { getTodo, addTodo, patchTodo, deleteTodo } = require("./operations");

const app = express();

app.use(express.json());

app.post("/posttodo", async (req, res) => {
  try {
    const newData = req.body;
    const addedTodo = await addTodo(newData);
    res.send(addedTodo);
  } catch (err) {
    console.log(err);
    res.status(500).send("Can't add task");
  }
});

app.get("/gettodo", async (req, res) => {
  try {
    const todos = await getTodo();
    res.send(todos);
  } catch (err) {
    console.log(err);
    res.status(500).send("Can't get Data");
  }
});

app.patch("/patchtodo/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const data = req.body;
    const updatedTodo = await patchTodo(id, data);
    res.send(updatedTodo);
  } catch (err) {
    console.log(err);
    res.status(500).send("Can't Update Data");
  }
});

app.delete("/deletetodo/:id", async(req, res) =>{
    try {
        const {id} = req.params;
        const data = await deleteTodo(id);
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send("Can't Update Data");
    }
})

app.listen(8080, () => {
  console.log("Server is listening on port 8080..");
});
