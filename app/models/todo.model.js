module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      todo: String,
      isDone: Boolean,
    },
    {
      timestamps: true,
    }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Todo = mongoose.model("todo", schema);
  return Todo;
};
