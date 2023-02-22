const fspromises = require("fs/promises");

const getTodo = async () => {
  const allTodos =
    (await fspromises.readFile("./todo.json", {
      encoding: "utf-8",
    })) || [];

  return JSON.parse(allTodos);
};

const updateAllTodo = async (allTodos) => {
  const todos = await JSON.stringify(allTodos, null, 4);
  await fspromises.writeFile("./todo.json", todos, { encoding: "utf-8" });
};

const addTodo = async (newTodo) => {
  const allTodos = await getTodo();
  let maxId = 0;
  console.log("add", allTodos);
  allTodos.map(({ id }) => {
    maxId = Math.max(id, maxId);
  });
  allTodos.push({ ...newTodo, id: maxId + 1 });
  await updateAllTodo(allTodos);
  return { ...newTodo, id: maxId + 1 };
};

const patchTodo = async (id, data) => {
  const allTodos = await getTodo();
  let upDatedData;
  const updatedTodos = allTodos.map((ele) => {
    if (ele.id == id) {
      const newEle = { ...ele, data };
      upDatedData = { ...ele, data };
      return newEle;
    }
    return ele;
  });
  await updateAllTodo(updatedTodos);
  return upDatedData;
};

const deleteTodo = async (id) => {
  const allTodos = await getTodo();
  let deletedTodo;
  const newTodos = allTodos.filter((ele) => {
    if (ele.id === id) {
      deletedTodo = ele;
    }
    return ele.id !== id;
  });
  await updateAllTodo(newTodos);
  return deletedTodo;
};

module.exports = { getTodo, addTodo, patchTodo, deleteTodo };
