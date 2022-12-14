const { default: mongoose } = require("mongoose");
const dbConfig = require("../../config/db.config");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.posts = require("./post.model")(mongoose);
db.todos = require("./todo.model")(mongoose);

module.exports = db;
