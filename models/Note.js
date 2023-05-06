import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    require: true,
  },
});

module.exports = mongoose.models.Note || mongoose.model("Note", NoteSchema);
