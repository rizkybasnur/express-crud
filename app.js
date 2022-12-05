const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: true,
  })
  .then((res) => {
    console.log(`Database connected euy!`, res);
  })
  .catch((err) => {
    console.log(`Can't connect to database`, err);
    process.exit();
  });

// app.get("/", (req, res) => {
//   res.json({
//     message: "welcome to express noob",
//   });
// });

require("./app/routes/api.routes")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
