const express = require("express");
const fspromises = require("fs/promises");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to file server");
});

app.post("/createfile", async (req, res) => {
  try {
    const { filename, content = "" } = req.body;
    await fspromises.writeFile(filename, content);
    res.send(`${filename} has been created`);
  } catch (err) {
    res.status(500).send("Can't create file");
  }
});

app.get("/readfile", async (req, res) => {
  try {
    const { filename } = req.body;
    let content = await fspromises.readFile(filename, { encoding: "utf-8" });
    res.send({ data: content });
  } catch (err) {
    res.status(500).send("Can't read file");
  }
});

app.patch("/appendfile", async (req, res) => {
  try {
    const { filename, content } = req.body;
    await fspromises.appendFile(filename, `\n ${content}`);
    let newcontent = await fspromises.readFile(filename, { encoding: "utf-8" });
    res.send({ data: newcontent });
  } catch (err) {
    console.log(err);
    res.status(500).send("Can't append data");
  }
});

app.delete("/deletefile/:filename", async (req, res) => {
  try {
    const { filename } = req.params;
    await fspromises.unlink(filename);
    res.send(`${filename} has been removed`);
    
  } catch (err) {
    console.log(err);
    res.status(500).send("Can't delete file");
  }
});

app.listen(8080, () => {
  console.log("listening on port 8080..");
});
