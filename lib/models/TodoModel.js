const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });  // Corrected 'timeStamp' to 'timestamps'

// Use mongoose.models to avoid model overwrite error
const TodoModel = mongoose.models.Todo || mongoose.model('Todo', Schema);

export default TodoModel;
