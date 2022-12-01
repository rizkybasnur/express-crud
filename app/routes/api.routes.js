module.exports = (app) => {
  const posts = require("../controllers/post.controller");
  const todos = require("../controllers/todo.controller");
  const router = require("express").Router();

  router.get("/", posts.findAll);
  router.post("/post", posts.create);
  router.get("/:id", posts.findOne);
  router.put("/:id", posts.update);
  
  router.get("/todo/tes", todos.getAllTodo);
  router.post("/todo/create", todos.createTodo);
  // router.get("/:id", todos.findOne);
  router.put("/todo/:id", todos.updateTodo);
  router.delete("/todo/:id", todos.deleteTodo);

  app.use("/api/", router);
};
