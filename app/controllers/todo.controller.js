const db = require("../models");
const Todo = db.todos;

exports.getAllTodo = (req, res) => {
    Todo.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error while retrieving list",
      });
    });
};

exports.createTodo = (req, res) => {
  const todo = new Todo({
    todo: req.body.todo,
    isDone: false,
  });

  todo
    .save(todo)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || "Some error while creating todo",
      });
    });
};

exports.updateTodo = (req, res) => {
  const id = req.params.id;

  Todo.findByIdAndUpdate(id, req.body)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: "Todo not found!",
        });
      }

      res.send({
        message: "Todo was updated ihir!",
      });
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || "Some error while updating todos",
      });
    });
};

exports.deleteTodo = (req, res) => {
    const id = req.params.id;

  Todo.findOneAndDelete(id)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: "Todo not found!",
        });
      }

      res.send({
        message: "Todo was deleted ihir!",
      });
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || "Some error while updating todos",
      });
    });
};
